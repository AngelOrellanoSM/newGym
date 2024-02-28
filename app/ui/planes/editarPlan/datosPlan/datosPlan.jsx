"use client"
import styles from "./datosPlan.module.css"
import React, { useState } from "react";
import { IoPersonSharp } from "react-icons/io5";
import { SlEnvolopeLetter } from "react-icons/sl";
import { RiMailSendLine } from "react-icons/ri";
import { TbGenderBigender } from "react-icons/tb";
import { updatePlanes } from "@/app/apiAccions/planesAccions";


const DatosPlan = ({data, empleados}) =>{
    const plan = data[0];
    const [entrenador, setEntrenador] = useState(plan.Encargado || "")
    const mostrarEncargado = plan.Tipo === "clase" || plan.Tipo === "personalizado"
    const [formData, setFormData] = useState({
        nombre: "",
        descripcion: "",
        duracion: "",
        costo: "", 
        encargado: ""
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name] : value
        }))
    }

    const handleSelectChange = (e) => {
        const {name, value} = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name] : value
        }))
        setEntrenador(value)
    }
    
    const handleForm = async (e) => {
        e.preventDefault()
        try{
            const result = await updatePlanes(formData, plan.id)
            
            if(result){
                console.error("Error al actualizar", error)
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
                        <h2>Informacion Basica</h2>
                        <h4>Editar la información requerida.</h4>
                    </div>
                    <div className={styles.inputContainer}>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <IoPersonSharp />
                                <p>Nombre</p>
                            </div>
                            <input name="nombre" placeholder={plan.Nombre} onChange={handleInputChange}></input>
                        </div>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <SlEnvolopeLetter />
                                <p>Descripcion</p>
                            </div>
                            <textarea name="descripcion" placeholder={plan.Descripcion} onChange={handleInputChange}></textarea>
                        </div>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <TbGenderBigender  />
                                <p>Tipo</p>
                            </div>
                            <input placeholder={plan.Tipo} disabled></input>
                        </div>          
                    </div>
                </div>
                <div className={styles.itemContainer}>
                    <div className={styles.titulo}>
                        <h2>Informacion Importante</h2>
                        <h4>Revisa cuidadosamente la info editada, que es importante para la gestion.</h4>
                    </div>
                    <div className={styles.inputContainer}>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <RiMailSendLine  />
                                <p>Costo</p>
                            </div>
                            <input name="costo" placeholder={plan.Costo} onChange={handleInputChange}></input>
                        </div>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <RiMailSendLine  />
                                <p>Duracion</p>
                            </div>
                            <input name="duracion" placeholder={plan.Duracion} onChange={handleInputChange}></input>
                        </div>
                        {mostrarEncargado && <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <RiMailSendLine  />
                                <p>Encargado</p>
                            </div>
                            <select name="encargado" value={entrenador} onChange={handleSelectChange}>
                                <option value={plan.Encargado}>{plan.Encargado}</option>
                                {
                                    empleados.map((item, index) => {
                                        if(item.Rol === "entrenador" && item.Nombre !== plan.Encargado){
                                        return (
                                            <option value={item.Nombre} key={index}>{item.Nombre}</option>
                                        )
                                        }
                                    })
                                }
                            </select>
                        </div>}
                    </div>
                </div>
            </div>
            <div className={styles.botones}>
                <button type="submit" className={styles.add}>GUARDAR CAMBIOS</button>   
            </div>
        </form>
    )
}

export default DatosPlan