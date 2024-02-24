"use client"
import styles from "./formAgregarEmpleado.module.css"
import { IoPersonSharp } from "react-icons/io5";
import { SlEnvolopeLetter } from "react-icons/sl";
import { RiMailSendLine } from "react-icons/ri";
import { TbGenderBigender } from "react-icons/tb";
import { IoCalendar } from "react-icons/io5";
import { RiLockPasswordLine } from "react-icons/ri";

import React, { useState } from "react";
import { addEmpleado } from "@/app/apiAccions/empleadosAccions";


const FormAgregarEmpleado = ({onchange}) => {
    const [mostrarCampo, setMostrarCampo] = useState(false);
    const [dataForm, setDataForm] = useState({
        nombre: "",
        dni: "",
        genero: "",
        fechaNacimiento: null,
        correo: "",
        celular: "",
        rol: "",
        contraseña: ""
    })

    const handleSelectChange = (event) => {
        const selectedOption = event.target.value;
        if (selectedOption === "administrador") {
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
            const result = await addEmpleado(dataForm)
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
                                <h4>Ingresar la informacion del Personal Nuevo</h4>
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
                                        <p>Genero</p>
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
                                <h2>Informacion Relevante</h2>
                                <h4>Información de gran interes para el gimnasio</h4>
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
                                <div className={styles.ingresoContent}>
                                    <div className={styles.label}>
                                        <RiMailSendLine  />
                                        <p>Rol</p>
                                    </div>
                                    <select name="rol" onChange={handleSelectChange}>
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
                                        <input name="contraseña" placeholder="Ingresa la contraseña del empleado" onChange={handleInput}></input>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <button type="submit" className={styles.add}>AGREGAR</button>
                </form>
            </div>
    )
}

export default FormAgregarEmpleado