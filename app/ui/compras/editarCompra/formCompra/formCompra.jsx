"use client"
import styles from "./formCompra.module.css"
import { IoPersonSharp } from "react-icons/io5";
import { SlEnvolopeLetter } from "react-icons/sl";
import { RiMailSendLine } from "react-icons/ri";
import Link from "next/link";
import React, { useState } from "react";
import { updateCompra } from "@/app/apiAccions/comprasAccions";


const FormCompra = ({compra}) => {
    const fecha = new Date(compra.FechaDeCompra)
    const [estatus , setEstatus] = useState(compra.Estatus)
    const handleSelectChange = (event) => {
        const selectedOption = event.target.value;
        setEstatus(selectedOption)
    };
    const handleForm = async (e) =>{
        e.preventDefault();
        try{
            const result = await updateCompra(estatus, compra.id, compra.Cantidad)
            if(result){
                console.error("Error al actualizar la compra: ", result.error)
            }else{
                console.log("Actualizacion Exitosa")
            }
        }catch(e){
            console.error("Error inesperado Cliente: ", e)
        }
    }
    return (
        <form onSubmit={handleForm}>
            <div className={styles.addClient}>
                <div className={styles.itemContainer}>
                    <div className={styles.titulo}>
                        <h2>Informacion Basica</h2>
                    </div>
                    <div className={styles.inputContainer}>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <IoPersonSharp />
                                <p>Fecha de Compra</p>
                            </div>
                            <input placeholder={fecha.toLocaleDateString('es-ES', {day: '2-digit', month: '2-digit', year: 'numeric'})} disabled></input>
                        </div>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <SlEnvolopeLetter />
                                <p>Nombre del Producto</p>
                            </div>
                            <input placeholder={compra.Producto.Nombre} disabled ></input>
                        </div>
                    </div>
                </div>
                <div className={styles.itemContainer}>
                    <div className={styles.titulo}>
                        <h2>Informacion Contable</h2>
                    </div>
                    <div className={styles.inputContainer}>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <RiMailSendLine  />
                                <p>Costo</p>
                            </div>
                            <input placeholder={compra.Producto.Costo} disabled></input>
                        </div>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <RiMailSendLine  />
                                <p>Cantidad</p>
                            </div>
                            <input placeholder={compra.Cantidad} disabled></input>
                        </div> 
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <RiMailSendLine  />
                                <p>Total</p>
                            </div>
                            <input placeholder={compra.Total} disabled></input>
                        </div>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <RiMailSendLine  />
                                <p>Estatus</p>
                            </div>
                            <select value={estatus} onChange={handleSelectChange}>
                                <option value="recibido">Recibido</option>
                                <option value="pendiente" >Pendiente</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.botones}>
                <button type="submit" className={styles.add}>GUARDAR CAMBIOS</button>
                <Link href={"/dashboard/compras"}>
                    <button className={styles.cancel}>
                        CANCELAR
                    </button>
                </Link>
            </div>
        </form>
    )
}

export default FormCompra