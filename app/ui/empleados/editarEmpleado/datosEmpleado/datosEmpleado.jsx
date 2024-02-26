"use client"
import styles from "./datosEmpleado.module.css"
import { IoPersonSharp } from "react-icons/io5";
import { SlEnvolopeLetter } from "react-icons/sl";
import { RiMailSendLine } from "react-icons/ri";
import { TbGenderBigender } from "react-icons/tb";
import { IoCalendar } from "react-icons/io5";
import { RiLockPasswordLine } from "react-icons/ri";
import React, { useState } from "react";
import { updateEmpleado } from "@/app/apiAccions/empleadosAccions";

const DatosEmpleado = ({data}) =>{
    const empleado = data[0];
    const [mostrarCampo, setMostrarCampo] = empleado.Rol === "administrador"?useState(true):useState(false);
    const [formData, setFormData] = useState({
        nombre: "",
        dni: "",
        correo: "",
        celular: "",
        rol: empleado.Rol,
        contraseña: ""
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name] : value
        }))
    }

    const handleSelectChange = (event) => {
        const selectedOption = event.target.value;
        if (selectedOption === "administrador") {
            setMostrarCampo(true);
            setFormData((prevData)  => ({...prevData, rol:"administrador"}));
        } else {
            setMostrarCampo(false);
            setFormData((prevData)  => ({...prevData, rol:"entrenador"}));
        }
    };
    
    const handleForm = async (e) => {
        e.preventDefault()
        try{
            const result = await updateEmpleado(formData, empleado.Rol, empleado.id)
            
            if(result){
                console.error("Error al actualizar", error)
            }else{
                console.log("Actualizacion EXITOSA")
            }
        }catch(e){
            console.error("Error inesperado", e)
        }
    }

    return(
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
                                    <input name="nombre" placeholder={empleado.Nombre} onChange={handleInputChange}></input>
                                </div>
                                <div className={styles.ingresoContent}>
                                    <div className={styles.label}>
                                        <SlEnvolopeLetter />
                                        <p>DNI</p>
                                    </div>
                                    <input name="dni" placeholder={empleado.Dni} onChange={handleInputChange}></input>
                                </div>
                                <div className={styles.ingresoContent}>
                                    <div className={styles.label}>
                                        <TbGenderBigender  />
                                        <p>Genero</p>
                                    </div>
                                    <input name="genero" placeholder={empleado.Genero} disabled></input>
                                </div> 
                                <div className={styles.ingresoContent}>
                                    <div className={styles.label}>
                                        <IoCalendar   />
                                        <p>Fecha de Nacimiento</p>
                                    </div>
                                    <input name="fech_nac" disabled placeholder={empleado.FechaDeNacimiento}></input>
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
                                    <input name="correo" placeholder={empleado.Correo} onChange={handleInputChange}></input>
                                </div>
                                <div className={styles.ingresoContent}>
                                    <div className={styles.label}>
                                        <RiMailSendLine  />
                                        <p>Celular</p>
                                    </div>
                                    <input name="celular" placeholder={empleado.Celular} onChange={handleInputChange}></input>
                                </div>
                                <div className={styles.ingresoContent}>
                                    <div className={styles.label}>
                                        <RiMailSendLine  />
                                        <p>Rol</p>
                                    </div>
                                    <select name="rol" value={formData.rol} onChange={handleSelectChange}>
                                        <option value="entrenado">Entrenador</option>
                                        <option value="administrador" >Administrador</option>
                                    </select>
                                </div>
                                
                            {mostrarCampo && <div className={styles.ingresoContent} hidden={formData.rol === "administrador"?false:true}>
                                    <div className={styles.label}>
                                        <RiLockPasswordLine   />
                                        <p>Contraseña</p>
                                    </div>
                                    <input name="contraseña" placeholder={empleado.Contraseña} onChange={handleInputChange}></input>
                                </div>}
                            </div>
                        </div>
                    </div>
                    <button type="submit" className={styles.add}>GUARDAR CAMBIOS</button>
                </form>
            </div>
    )
}

export default DatosEmpleado