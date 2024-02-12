"use client"

import styles from "@/app/ui/empleados/agregarEmpleado/agregarEmpleado.module.css"
import { IoPersonSharp } from "react-icons/io5";
import { SlEnvolopeLetter } from "react-icons/sl";
import { RiMailSendLine } from "react-icons/ri";
import { TbGenderBigender } from "react-icons/tb";
import { IoCalendar } from "react-icons/io5";
import { RiLockPasswordLine } from "react-icons/ri";


import Link from "next/link";
import React, { useState } from "react";

const AgregarEmpleado = () => {

    const [mostrarCampo, setMostrarCampo] = useState(false);

    const handleSelectChange = (event) => {
        const selectedOption = event.target.value;
        if (selectedOption === "administrador") {
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
                        <h2>Informacion personal</h2>
                        <h4>Ingresar la informacion del Personal Nuevo</h4>
                    </div>
                    <div className={styles.inputContainer}>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <IoPersonSharp />
                                <p>Nombre Completo</p>
                            </div>
                            <input placeholder="Ingresa el nombre"></input>
                        </div>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <SlEnvolopeLetter />
                                <p>DNI</p>
                            </div>
                            <input placeholder="Ingresa el DNI"></input>
                        </div>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <TbGenderBigender  />
                                <p>Genero</p>
                            </div>
                            <input placeholder="Ingresa el genero"></input>
                        </div> 
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <IoCalendar   />
                                <p>Fecha de Nacimiento</p>
                            </div>
                            <input placeholder="Ingresa la fecha de nacimiento"></input>
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
                            <input placeholder="Ingresa el correo electronico"></input>
                        </div>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <RiMailSendLine  />
                                <p>Celular</p>
                            </div>
                            <input placeholder="Ingresa el número de celular"></input>
                        </div>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <RiMailSendLine  />
                                <p>Rol</p>
                            </div>
                            <select onChange={handleSelectChange}>
                                <option value="noSelect">Seleccione el rol del personal</option>
                                <option value="entrenado">Entrenador</option>
                                <option value="administrador">Administrador</option>
                            </select>
                        </div>
                        {mostrarCampo && (
                            <div className={styles.ingresoContent}>
                                <div className={styles.label}>
                                    <RiLockPasswordLine   />
                                    <p>Contraseña</p>
                                </div>
                                <input placeholder="Ingresa la contraseña del empleado"></input>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className={styles.botones}>
                <button className={styles.add}>AGREGAR</button>
                <Link href={"/dashboard/empleados"}>
                    <button className={styles.cancel}>
                        CANCELAR
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default AgregarEmpleado