"use client"
import styles from "@/app/ui/planes/agregarPlan/agregarPlan.module.css"
import { IoPersonSharp } from "react-icons/io5";
import { SlEnvolopeLetter } from "react-icons/sl";
import { RiMailSendLine } from "react-icons/ri";
import { RiLockPasswordLine } from "react-icons/ri";
import Link from "next/link";
import React, { useState } from "react";
import { addPlanes } from "@/app/apiAccions/planesAccions";

const AgregarPlan = () => {

    const [mostrarCampo, setMostrarCampo] = useState(false);
    const [dataForm, setDataForm] = useState({
        nombre: "",
        descripcion: "",
        tipo: "noSelect",
        duracion: "",
        costo: "",
        encargado: ""
    })

    const handleSelectChange = (event) => {
        const selectedOption = event.target.value;
        if (selectedOption === "clase") {
            setMostrarCampo(true);
        } else {
            setMostrarCampo(false);
        }
        setDataForm((prevData)  => ({...prevData, [event.target.name]: selectedOption}));
    };

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
            const result = await addPlanes(dataForm)
            if(result){
                console.error("Error al insertar el plan: ", result)
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
                            <h2>Informacion Básica</h2>
                            <h4>Ingresar la informacion basica del plan, clase o personalizado.</h4>
                        </div>
                        <div className={styles.inputContainer}>
                            <div className={styles.ingresoContent}>
                                <div className={styles.label}>
                                    <IoPersonSharp />
                                    <p>Nombre</p>
                                </div>
                                <input name="nombre" placeholder="Ingresa el nombre del plan" onChange={handleInput}></input>
                            </div>
                            <div className={styles.ingresoContent}>
                                <div className={styles.label}>
                                    <SlEnvolopeLetter />
                                    <p>Descripcion</p>
                                </div>
                                <textarea name="descripcion" placeholder="Ingresa la descripcion del plan" onChange={handleInput}></textarea>
                            </div> 
                            <div className={styles.ingresoContent}>
                                <div className={styles.label}>
                                    <RiMailSendLine  />
                                    <p>Tipo</p>
                                </div>
                                <select name="tipo" onChange={handleSelectChange}>
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
                                <input name="duracion" placeholder="Ingresa la duración del plan" onChange={handleInput}></input>
                            </div>
                            <div className={styles.ingresoContent}>
                                <div className={styles.label}>
                                    <RiMailSendLine  />
                                    <p>Costo</p>
                                </div>
                                <input type="float" name="costo" placeholder="Ingresa el costo del plan" onChange={handleInput}></input>
                            </div>
                            {mostrarCampo && (
                                <div className={styles.ingresoContent}>
                                    <div className={styles.label}>
                                        <RiLockPasswordLine   />
                                        <p>Encargado</p>
                                    </div>
                                    <input name="encargado" placeholder="Ingresa al encargado de la clase" onChange={handleInput}></input>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className={styles.botones}>
                    <button type="submit" className={styles.add}>AGREGAR</button>
                    <Link href={"/dashboard/planes"}>
                        <button className={styles.cancel}>
                            CANCELAR
                        </button>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default AgregarPlan