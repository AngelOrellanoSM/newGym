"use client"
import styles from "./formVenta.module.css"
import { IoPersonSharp } from "react-icons/io5";
import { RiMailSendLine } from "react-icons/ri";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { addVenta } from "@/app/apiAccions/ventasAccions";


const FormVenta = ({clientes, productos, planes}) => {
    const [mostrarCosto, setMostrarCosto] = useState(false);
    const [total, setTotal] = useState(0);
    const [costoUnitario, setCostoUnitario] = useState(0)
    const [stockUnitario, setStockunitario] = useState(0)
    const [cantidad, setCantidad] = useState(0)
    const [tipoDeVenta, setTipoDeVenta] = useState("noSelect")
    const [dataForm, setDataForm] = useState({
        idCliente: "noSelect",
        idProducto: "noSelect",
        idPlan: "noSelect",
        cantidad: "",
        total: "",
        status: "",
    })
    
    const handleSelect = (e, tipo) =>{
        e.preventDefault()
        const {name, value} = e.target
        if(tipo === "cliente") {
            if(value !== "noSelect"){
                const client = clientes.find(element =>     
                    element.Nombre === value  
                )
                setDataForm((prevData) => ({
                    ...prevData,
                    [name] : client.id
                }))
            }else{
                setDataForm((prevData) => ({
                    ...prevData,
                    [name] : "noSelect"
                }))
            }
        }else if(tipo === "producto"){
            setMostrarCosto(true);
            if(value !== "noSelect"){
                const prod = productos.find(element =>     
                    element.Nombre === e.target.value  
                )
                setCostoUnitario(prod.Costo)
                setStockunitario(prod.Stock)
                setDataForm((prevData) => ({
                    ...prevData,
                    [name] : prod.id
                }))
                setDataForm((prevData) => ({
                    ...prevData,
                    ["cantidad"] : 1
                }))
                setCantidad(1)
            }else{
                setCostoUnitario(0)
                setStockunitario(0)
                setMostrarCosto(false)
                setDataForm((prevData) => ({
                    ...prevData,
                    [name] : "noSelect"
                }))
            }
        }else if(tipo === "estatus" ){
            setDataForm((prevData) => ({
                ...prevData,
                [name] : value
            }))
        }else if(tipo === "tipoVenta"){
            setTipoDeVenta(value)
            if(value !== "producto"){
                setCostoUnitario(0)
                setStockunitario(0)
                setMostrarCosto(false)
                setDataForm((prevData) => ({
                    ...prevData,
                    ["idProducto"] : ""
                }))
            }else{
                setDataForm((prevData) => ({
                    ...prevData,
                    ["idPlan"] : ""
                }))
            }
            setDataForm((prevData) => ({
                ...prevData,
                ["cantidad"] : 0
            }))
            setCantidad(0)
            setTotal(0)
        }else if(tipo === "plan"){
            setDataForm((prevData) => ({
                ...prevData,
                [name] : value
            }))
            if(value !== "noSelect"){
                const plan = planes.find(element => element.id === parseInt(value))
                setCostoUnitario(plan.Costo)
                setDataForm((prevData) => ({
                    ...prevData,
                    ["cantidad"] : 1
                }))
                setCantidad(1)
            }else{
                setCostoUnitario(0)
                setDataForm((prevData) => ({
                    ...prevData,
                    ["cantidad"] : ""
                }))
                setCantidad(0)
            }
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
                                <p>Tipo de Venta</p>
                            </div>
                            <select value={tipoDeVenta} onChange={(e) => handleSelect(e, "tipoVenta")}>
                                <option value="noSelect">Ingresa el tipo de Venta</option>
                                <option value="producto">Producto</option>
                                <option value="plan">Plan</option>
                                <option value="clase">Clase</option>
                                <option value="personalizado">Personalizado</option>
                            </select>
                        </div>
                        {tipoDeVenta==="producto" && 
                            <div className={styles.ingresoContent}>
                                <div className={styles.label}>
                                    <IoPersonSharp />
                                    <p>Nombre del producto</p>
                                </div>
                                <select name="idProducto" onChange={(e) => handleSelect(e, "producto")}>
                                    <option value="noSelect">Ingresa el nombre del producto</option>
                                        {
                                        productos.map((producto, index) => {
                                            if(producto.Stock > 0){
                                                return (
                                                    <option value={producto.Nombre} key={index}>{producto.Nombre}</option>
                                                )
                                            }
                                        })
                                        }
                                </select>
                            </div>
                        }
                        { ( mostrarCosto && tipoDeVenta==="producto") && (
                            <div className={styles.ingresoContent}>
                                <div className={styles.label}>
                                    <RiMailSendLine  />
                                    <p>Precio de Venta por Unidad</p>
                                </div>
                                <input disabled type="number" placeholder={costoUnitario}></input>
                            </div>
                        )}
                        { mostrarCosto && (
                            <div className={styles.ingresoContent}>
                                <div className={styles.label}>
                                    <RiMailSendLine  />
                                    <p>Cantidad Actual del Producto</p>
                                </div>
                                <input disabled type="number" placeholder={stockUnitario}></input>
                            </div>
                        )}
                        
                        {(tipoDeVenta==="plan" || tipoDeVenta==="clase" || tipoDeVenta==="personalizado")  && 
                            <div className={styles.ingresoContent}>
                                <div className={styles.label}>
                                    <IoPersonSharp />
                                    <p>Nombre del {tipoDeVenta}</p>
                                </div>
                                <select name="idPlan" onChange={(e) => handleSelect(e, "plan")}>
                                    <option value="noSelect">Ingresa el nombre del {tipoDeVenta}</option>
                                        {
                                        planes.map((plan, index) => {
                                            if(plan.Tipo === tipoDeVenta)
                                            {return (
                                                <option value={plan.id} key={index}>{plan.Nombre}</option>
                                            )}
                                        })
                                        }
                                </select>
                            </div>
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
                            <input name="cantidad" onChange={handleInput} type="number" placeholder="Ingresa la cantidad vendida" disabled={tipoDeVenta !== "producto"} value={cantidad}></input>
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