"use client"

import styles from "@/app/ui/planes/agregarPlan/agregarPlan.module.css"
import { IoPersonSharp } from "react-icons/io5";
import { SlEnvolopeLetter } from "react-icons/sl";
import { RiMailSendLine } from "react-icons/ri";
import { TbGenderBigender } from "react-icons/tb";
import { IoCalendar } from "react-icons/io5";
import { RiLockPasswordLine } from "react-icons/ri";


import Link from "next/link";
import React, { useState } from "react";

const AgregarPlan = () => {

    const [mostrarCampo, setMostrarCampo] = useState(false);

    const handleSelectChange = (event) => {
        const selectedOption = event.target.value;
        if (selectedOption === "clase") {
            setMostrarCampo(true);
        } else {
            setMostrarCampo(false);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.addClient}>
                <div className={styles.itemContainer}>
                    <div className={styles.titulo}>
                        <h2>Informacion Básica</h2>
                        <h4>Ingresar la informacion basica del plan, clase o personalizado.</h4>
                    </div>
                    <div className={styles.inputContainer}>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <IoPersonSharp />
                                <p>Nombre</p>
                            </div>
                            <input placeholder="Ingresa el nombre del plan"></input>
                        </div>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <SlEnvolopeLetter />
                                <p>Descripcion</p>
                            </div>
                            <textarea placeholder="Ingresa la descripcion del plan"></textarea>
                        </div> 
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <RiMailSendLine  />
                                <p>Rol</p>
                            </div>
                            <select onChange={handleSelectChange}>
                                <option value="noSelect">Seleccione el tipo</option>
                                <option value="plan">Plan</option>
                                <option value="clase">Clase</option>
                                <option value="personalizado">Personalizado</option>
                            </select>
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
                                <p>Duración</p>
                            </div>
                            <input placeholder="Ingresa la duración del plan"></input>
                        </div>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <RiMailSendLine  />
                                <p>Costo</p>
                            </div>
                            <input placeholder="Ingresa el costo del plan"></input>
                        </div>
                        {mostrarCampo && (
                            <div className={styles.ingresoContent}>
                                <div className={styles.label}>
                                    <RiLockPasswordLine   />
                                    <p>Encargado</p>
                                </div>
                                <input placeholder="Ingresa al encargado de la clase"></input>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className={styles.botones}>
                <button className={styles.add}>AGREGAR</button>
                <Link href={"/dashboard/planes"}>
                    <button className={styles.cancel}>
                        CANCELAR
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default AgregarPlan