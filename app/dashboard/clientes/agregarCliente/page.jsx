"use client"
import styles from "../../../ui/clientes/agregarClientes/agregarClientes.module.css"
import { IoPersonSharp } from "react-icons/io5";
import { SlEnvolopeLetter } from "react-icons/sl";
import { RiMailSendLine } from "react-icons/ri";
import { TbGenderBigender } from "react-icons/tb";
import { IoCalendar } from "react-icons/io5";
import Link from "next/link";
import { addCliente } from "@/app/apiAccions/clientesAccions";

import React, { useState } from "react";


const AgregarClientes = () => {
    
    const [dataForm, setDataForm] = useState({
        nombre: "",
        dni: "",
        genero: "",
        fechaNacimiento: null,
        correo: "",
        celular: "",
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
            const result = await addCliente(dataForm)
            if(result){
                console.error("Error al insertar cliente: ", result)
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
                            <h2>Informacion personal</h2>
                            <h4>Ingresar toda la información que el cliente este dispuesto a dar.</h4>
                        </div>
                        <div className={styles.inputContainer}>
                            <div className={styles.ingresoContent}>
                                <div className={styles.label}>
                                    <IoPersonSharp />
                                    <p>Nombre Completo</p>
                                </div>
                                <input name="nombre" placeholder="Ingresa el nombre" onChange={handleInput}></input>
                            </div>
                            <div className={styles.ingresoContent}>
                                <div className={styles.label}>
                                    <SlEnvolopeLetter />
                                    <p>DNI</p>
                                </div>
                                <input name="dni" placeholder="Ingresa el DNI" onChange={handleInput}></input>
                            </div>
                            <div className={styles.ingresoContent}>
                                <div className={styles.label}>
                                    <TbGenderBigender  />
                                    <p>Sexo</p>
                                </div>
                                <input name="genero" placeholder="Ingresa el genero" onChange={handleInput}></input>
                            </div> 
                            <div className={styles.ingresoContent}>
                                <div className={styles.label}>
                                    <IoCalendar   />
                                    <p>Fecha de Nacimiento</p>
                                </div>
                                <input type="date" name="fechaNacimiento" placeholder="Ingresa la fecha de nacimiento" onChange={handleInput}></input>
                            </div>                   
                        </div>
                    </div>
                    <div className={styles.itemContainer}>
                        <div className={styles.titulo}>
                            <h2>Informacion de Contacto</h2>
                            <h4>Ingresa la información de contacto del cliente, para enviar info.</h4>
                        </div>
                        <div className={styles.inputContainer}>
                            <div className={styles.ingresoContent}>
                                <div className={styles.label}>
                                    <RiMailSendLine  />
                                    <p>Correo Electronico</p>
                                </div>
                                <input name="correo" placeholder="Ingresa el correo electronico" onChange={handleInput}></input>
                            </div>
                            <div className={styles.ingresoContent}>
                                <div className={styles.label}>
                                    <RiMailSendLine  />
                                    <p>Celular</p>
                                </div>
                                <input name="celular" placeholder="Ingresa el número de celular" onChange={handleInput}></input>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.botones}>
                    <button type="submit" className={styles.add}>AGREGAR</button>
                    <Link href={"/dashboard/clientes"}>
                        <button className={styles.cancel}>
                            CANCELAR
                        </button>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default AgregarClientes