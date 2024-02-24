"use client"
import styles from "./datosEmpleado.module.css"
import { IoPersonSharp } from "react-icons/io5";
import { SlEnvolopeLetter } from "react-icons/sl";
import { RiMailSendLine } from "react-icons/ri";
import { TbGenderBigender } from "react-icons/tb";
import { IoCalendar } from "react-icons/io5";
import { RiLockPasswordLine } from "react-icons/ri";
import React, { useState } from "react";

const DatosEmpleado = ({data}) =>{
    const empleado = data[0];
    const [mostrarCampo, setMostrarCampo] = empleado.Rol === "administrador"?useState(true):useState(false);

    const handleSelectChange = (event) => {
        const selectedOption = event.target.value;
        if (selectedOption === "administrador") {
            setMostrarCampo(true);
            empleado.Rol = "administrador";
        } else {
            setMostrarCampo(false);
            empleado.Rol = "entrenador";
        }
    };
    
    return(
        <div className={styles.addClient}>
                <div className={styles.itemContainer}>
                    <div className={styles.titulo}>
                        <h2>Informacion personal</h2>
                        <h4>Ingresar la informacion del Personal Nuevo</h4>
                    </div>
                    <div className={styles.inputContainer}>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <IoPersonSharp />
                                <p>Nombre Completo</p>
                            </div>
                            <input placeholder={empleado.Nombre}></input>
                        </div>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <SlEnvolopeLetter />
                                <p>DNI</p>
                            </div>
                            <input placeholder={empleado.Dni}></input>
                        </div>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <TbGenderBigender  />
                                <p>Genero</p>
                            </div>
                            <input placeholder={empleado.Genero} disabled></input>
                        </div> 
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <IoCalendar   />
                                <p>Fecha de Nacimiento</p>
                            </div>
                            <input disabled placeholder={empleado.FechaDeNacimiento}></input>
                        </div>                   
                    </div>
                </div>
                <div className={styles.itemContainer}>
                    <div className={styles.titulo}>
                        <h2>Informacion Relevante</h2>
                        <h4>Información de gran interes para el gimnasio</h4>
                    </div>
                    <div className={styles.inputContainer}>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <RiMailSendLine  />
                                <p>Correo Electronico</p>
                            </div>
                            <input placeholder={empleado.Correo}></input>
                        </div>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <RiMailSendLine  />
                                <p>Celular</p>
                            </div>
                            <input placeholder={empleado.Celular}></input>
                        </div>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <RiMailSendLine  />
                                <p>Rol</p>
                            </div>
                            <select value={empleado.Rol} onChange={handleSelectChange}>
                                <option value="entrenado">Entrenador</option>
                                <option value="administrador" >Administrador</option>
                            </select>
                        </div>
                        
                       {mostrarCampo && <div className={styles.ingresoContent} hidden={empleado.Rol === "administrador"?false:true}>
                            <div className={styles.label}>
                                <RiLockPasswordLine   />
                                <p>Contraseña</p>
                            </div>
                            <input placeholder={empleado.Contraseña}></input>
                        </div>}
                    </div>
                </div>
            </div>
    )
}

export default DatosEmpleado