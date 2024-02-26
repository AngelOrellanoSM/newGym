"use client"
import styles from "../../../ui/productos/agregarProducto/agregarProducto.module.css"
import { IoPersonSharp } from "react-icons/io5";
import { SlEnvolopeLetter } from "react-icons/sl";
import { RiMailSendLine } from "react-icons/ri";
import Link from "next/link";
import { addProducto } from "@/app/apiAccions/productosAccions";
import { useState } from "react";

const AgregarProducto = () => {
    const [dataForm, setDataForm] = useState({
        nombre: "",
        descripcion: "",
        stock: "",
        costo: "",
        venta: "",
    })

    const handleInput = (e) =>{
        const {name, value} = e.target
        setDataForm((prevData) => ({
            ...prevData,
            [name] : value
        }))
    }

    const handleForm = async (e) =>{
        e.preventDefault()
        try{
            const result = await addProducto(dataForm)
            if(result){
                console.error("Error al insertar producto: ", result)
            }else{
                console.log("Se inserto Correctamente")
            }
        }catch(e){
            console.error("Error inesperado: ", e)
        }
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleForm}>
                <div className={styles.addClient}>
                    <div className={styles.itemContainer}>
                        <div className={styles.titulo}>
                            <h2>Informacion del Producto</h2>
                            <h4>Ingresar la información basica del producto, sea detallado.</h4>
                        </div>
                        <div className={styles.inputContainer}>
                            <div className={styles.ingresoContent}>
                                <div className={styles.label}>
                                    <IoPersonSharp />
                                    <p>Nombre del Producto</p>
                                </div>
                                <input name="nombre" placeholder="Ingresa el nombre" onChange={handleInput}></input>
                            </div>
                            <div className={styles.ingresoContent}>
                                <div className={styles.label}>
                                    <SlEnvolopeLetter />
                                    <p>Stock inicial</p>
                                </div>
                                <input name="stock" placeholder="Ingresa el stock inicial del producto" onChange={handleInput}></input>
                            </div>
                            <div className={styles.ingresoContent}>
                                <div className={styles.label}>
                                    <SlEnvolopeLetter />
                                    <p>Descripcion</p>
                                </div>
                                <textarea name="descripcion" placeholder="Ingresa la descripcion del producto" onChange={handleInput}></textarea>
                            </div>     
                        </div>
                    </div>
                    <div className={styles.itemContainer}>
                        <div className={styles.titulo}>
                            <h2>Informacion Contable</h2>
                            <h4>Ingresa la información relacionado a las finanzas del producto</h4>
                        </div>
                        <div className={styles.inputContainer}>
                            <div className={styles.ingresoContent}>
                                <div className={styles.label}>
                                    <RiMailSendLine  />
                                    <p>Costo de compra ( S/. )</p>
                                </div>
                                <input name="costo" type="float" placeholder="Ingresa el costo de compra del producto" onChange={handleInput}></input>
                            </div>
                            <div className={styles.ingresoContent}>
                                <div className={styles.label}>
                                    <RiMailSendLine  />
                                    <p>Precio de Venta ( S/. )</p>
                                </div>
                                <input name="venta" type="float" placeholder="Ingresa el precio de venta del producto" onChange={handleInput}></input>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.botones}>
                    <button type="submit" className={styles.add}>AGREGAR</button>
                    <Link href={"/dashboard/productos"}>
                        <button className={styles.cancel}>
                            CANCELAR
                        </button>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default AgregarProducto