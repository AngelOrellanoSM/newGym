"use client"
import styles from "./datosVenta.module.css"
import { IoPersonSharp } from "react-icons/io5";
import { RiMailSendLine } from "react-icons/ri";
import React, { useState } from "react";
import { updateVenta } from "@/app/apiAccions/ventasAccions";


const DatosVenta = ({venta}) => {
    const [mostrarCampo, setMostrarCampo] = venta.Estatus === "pagado"?useState(true):useState(false);
    const [estadoForm, setEstadoForm] = useState(venta.Estatus)

    const handleSelectChange = (event) => {
        const selectedOption = event.target.value;
        if (selectedOption === "pagado") {
            setMostrarCampo(true);
            setEstadoForm("pagado")
        } else {
            setMostrarCampo(false);
            setEstadoForm("pendiente")
        }
    };
    const handleForm = async (e) =>{
        e.preventDefault();
        try{
            const result = await updateVenta(estadoForm, venta.id)
            
            if(result){
                console.error("Error al actualizar", result)
            }else{
                console.log("Actualizacion EXITOSA")
            }
        }catch(e){
            console.error("Error inesperado", e)
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
                            <input placeholder={venta.Cliente.Nombre} disabled></input>
                        </div>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <IoPersonSharp />
                                <p>{venta.Producto !== null ? "Nombre del producto" : "Nombre del Plan"}</p>
                            </div>
                            <input placeholder={venta.Producto !== null?venta.Producto.Nombre: venta.Plan.Nombre} disabled></input>
                        </div>
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
                            <input type="number" placeholder={venta.Cantidad} disabled></input>
                        </div>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <RiMailSendLine  />
                                <p>Precio de Venta Total ( S/. )</p>
                            </div>
                            <input type="number" placeholder={venta.Total} disabled></input>
                        </div>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <RiMailSendLine  />
                                <p>Status</p>
                            </div>
                            <select value={estadoForm} onChange={handleSelectChange} disabled={venta.status === "pagado"?true:false}>
                                <option value="pendiente">Pendiente</option>
                                <option value="pagado">Pagado</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.botones}>
                <button type="submit" className={styles.add}>GUARDAR CAMBIOS</button>
            </div>
        </form>
    )
}

export default DatosVenta