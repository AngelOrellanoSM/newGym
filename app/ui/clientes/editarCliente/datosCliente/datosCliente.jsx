"use client"
import styles from "./datosCliente.module.css"
import React, { useState } from "react";
import { IoPersonSharp } from "react-icons/io5";
import { SlEnvolopeLetter } from "react-icons/sl";
import { RiMailSendLine } from "react-icons/ri";
import { TbGenderBigender } from "react-icons/tb";
import { IoCalendar } from "react-icons/io5";
import { updateCliente } from "@/app/apiAccions/clientesAccions";

const DatosCliente = ({data}) => {
    const cliente = data[0];

    const [formData, setFormData] = useState({
        nombre: "",
        dni: "",
        correo: "",
        celular: "",
        contraseña: ""
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name] : value
        }))
    }
    
    const handleForm = async (e) => {
        e.preventDefault()
        try{
            const result = await updateCliente(formData, cliente.id)
            
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
                            <h2>Informacion personal</h2>
                            <h4>Editar la información requerida.</h4>
                        </div>
                        <div className={styles.inputContainer}>
                            <div className={styles.ingresoContent}>
                                <div className={styles.label}>
                                    <IoPersonSharp />
                                    <p>Nombre Completo</p>
                                </div>
                                <input name="nombre" placeholder={cliente.Nombre} onChange={handleInputChange}></input>
                            </div>
                            <div className={styles.ingresoContent}>
                                <div className={styles.label}>
                                    <SlEnvolopeLetter />
                                    <p>DNI</p>
                                </div>
                                <input name="dni" placeholder={cliente.Dni} onChange={handleInputChange}></input>
                            </div>
                            <div className={styles.ingresoContent}>
                                <div className={styles.label}>
                                    <TbGenderBigender  />
                                    <p>Sexo</p>
                                </div>
                                <input placeholder={cliente.Genero} disabled></input>
                            </div> 
                            <div className={styles.ingresoContent}>
                                <div className={styles.label}>
                                    <IoCalendar   />
                                    <p>Fecha de Nacimiento</p>
                                </div>
                                <input placeholder={cliente.FechaNacimiento} disabled></input>
                            </div>                   
                        </div>
                    </div>
                    <div className={styles.itemContainer}>
                        <div className={styles.titulo}>
                            <h2>Informacion de Contacto</h2>
                            <h4>Revisa cuidadosamente la info editada, que es importante poder contactar.</h4>
                        </div>
                        <div className={styles.inputContainer}>
                            <div className={styles.ingresoContent}>
                                <div className={styles.label}>
                                    <RiMailSendLine  />
                                    <p>Correo Electronico</p>
                                </div>
                                <input name="correo" placeholder={cliente.Correo} onChange={handleInputChange}></input>
                            </div>
                            <div className={styles.ingresoContent}>
                                <div className={styles.label}>
                                    <RiMailSendLine  />
                                    <p>Celular</p>
                                </div>
                                <input name="celular" placeholder={cliente.Celular} onChange={handleInputChange}></input>
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

export default DatosCliente