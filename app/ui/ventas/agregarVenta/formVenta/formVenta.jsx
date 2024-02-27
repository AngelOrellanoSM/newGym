"use client"
import styles from "./formVenta.module.css"
import { IoPersonSharp } from "react-icons/io5";
import { RiMailSendLine } from "react-icons/ri";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { addVenta } from "@/app/apiAccions/ventasAccions";


const FormVenta = ({clientes, productos}) => {
    const [mostrarCosto, setMostrarCosto] = useState(false);
    const [total, setTotal] = useState(0);
    const [costoUnitario, setCostoUnitario] = useState(0)
    const [cantidad, setCantidad] = useState(0)
 
    const [dataForm, setDataForm] = useState({
        idCliente: "",
        idProducto: "",
        cantidad: "",
        total: "",
        status: "",
    })
    
    const handleSelect = (e, tipo) =>{
        e.preventDefault()
        if(tipo === "cliente") {
            const {name, value} = e.target
            if(value !== "noSelect"){
                const client = clientes.find(element =>     
                    element.Nombre === value  
                )
                setDataForm((prevData) => ({
                    ...prevData,
                    [name] : client.id
                }))
            }
        }else if(tipo === "producto"){
            setMostrarCosto(true);
            const {name, value} = e.target
            if(value !== "noSelect"){
                const prod = productos.find(element =>     
                    element.Nombre === e.target.value  
                )
                setCostoUnitario(prod.Costo)
                setDataForm((prevData) => ({
                    ...prevData,
                    [name] : prod.id
                }))
            }else{
                setCostoUnitario(0)
                setMostrarCosto(false)
            }
        }else if(tipo === "estatus" ){
            const {name, value} = e.target
            setDataForm((prevData) => ({
                ...prevData,
                [name] : value
            }))
        }
    }
    
    const handleInput = async (e) => {
        const {name, value} = e.target
            setDataForm((prevData) => ({
                ...prevData,
                [name] : value
            }))
            setCantidad(value)
    }

    useEffect ( () => {
        if(costoUnitario !== 0 && cantidad !== 0)
        {
            setTotal(parseFloat(costoUnitario*cantidad).toFixed(2))
            setDataForm((prevData) => ({
                ...prevData,
                ["total"] : parseFloat(costoUnitario*cantidad).toFixed(2)
            }))
        }
    }, [cantidad, costoUnitario])



    const handleForm = async (e) =>{
        e.preventDefault()
        try{
            console.log(dataForm)
            const result = await addVenta(dataForm)
            if(result){
                console.error("Error al insertar Venta: ", result)
            }else{
                console.log("Se inserto Correctamente")
            }
        }catch(e){
            console.error("Error inesperado: ", e)
        }
    }
    return (
        <form onSubmit={handleForm}>
            <div className={styles.addClient}>
                <div className={styles.itemContainer}>
                    <div className={styles.titulo}>
                        <h2>Informacion de la Venta</h2>
                        <h4>Ingresar la información basica de la venta realizada.</h4>
                    </div>
                    <div className={styles.inputContainer}>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <IoPersonSharp />
                                <p>Nombre del Cliente</p>
                            </div>
                            <select name="idCliente" onChange={(e) => handleSelect(e, "cliente")}>
                                <option value="noSelect">Ingresa el nombre del Cliente</option>
                                {
                                    clientes.map((cliente, index) => {
                                        return (
                                            <option value={cliente.Nombre} key={index}>{cliente.Nombre}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <IoPersonSharp />
                                <p>Nombre del producto</p>
                            </div>
                            <select name="idProducto" onChange={(e) => handleSelect(e, "producto")}>
                                <option value="noSelect">Ingresa el nombre del producto</option>
                                    {
                                    productos.map((producto, index) => {
                                        return (
                                            <option value={producto.Nombre} key={index}>{producto.Nombre}</option>
                                        )
                                    })
                                    }
                            </select>
                        </div>
                        { mostrarCosto && (
                            <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <RiMailSendLine  />
                                <p>Precio de Venta por Unidad</p>
                            </div>
                            <input disabled type="number" placeholder={costoUnitario}></input>
                        </div>
                        )
                        }
                    </div>
                </div>
                <div className={styles.itemContainer}>
                    <div className={styles.titulo}>
                        <h2>Informacion Contable</h2>
                        <h4>Ingresa la información relacionado a las finanzas de la venta</h4>
                    </div>
                    <div className={styles.inputContainer}>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <RiMailSendLine  />
                                <p>Cantidad Vendida</p>
                            </div>
                            <input name="cantidad" onChange={handleInput} type="number" placeholder="Ingresa la cantidad vendida"></input>
                        </div>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <RiMailSendLine  />
                                <p>Precio de Venta Total ( S/. )</p>
                            </div>
                            <input type="number" placeholder={total} disabled value={total}></input>
                        </div>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <RiMailSendLine  />
                                <p>Status</p>
                            </div>
                            <select name="status" onChange={(e) => handleSelect(e, "estatus")}>
                                <option value="noSelect">Seleccione el status de la venta</option>
                                <option value="pendiente">Pendiente</option>
                                <option value="pagado">Pagado</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.botones}>
                <button type="submit" className={styles.add}>AGREGAR</button>
                <Link href={"/dashboard/ventas"}>
                    <button className={styles.cancel}>
                        CANCELAR
                    </button>
                </Link>
            </div>
        </form>
    )
}

export default FormVenta