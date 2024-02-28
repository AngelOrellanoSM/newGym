"use client"
import styles from  "./formPerfil.module.css"
import { IoPersonSharp } from "react-icons/io5";
import { SlEnvolopeLetter } from "react-icons/sl";
import { RiMailSendLine } from "react-icons/ri";
import { TbGenderBigender } from "react-icons/tb";
import { IoCalendar } from "react-icons/io5";
import { RiLockPasswordLine } from "react-icons/ri";
import { useState } from "react";
import { updateEmpleado } from "@/app/apiAccions/empleadosAccions";

const FormPerfil = ({perfil}) => {

    const [formData, setFormData] = useState({
        nombre: "",
        dni: "",
        correo: "",
        celular: "",
        rol: perfil.Rol,
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
            const result = await updateEmpleado(formData, perfil.Rol, perfil.id, true)
            
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
                        <h4>Ingresar la informacion del Personal Nuevo</h4>
                    </div>
                    <div className={styles.inputContainer}>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <IoPersonSharp />
                                <p>Nombre Completo</p>
                            </div>
                            <input name="nombre" placeholder={perfil.Nombre} onChange={handleInputChange}></input>
                        </div>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <SlEnvolopeLetter />
                                <p>DNI</p>
                            </div>
                            <input name="dni" placeholder={perfil.Dni} onChange={handleInputChange}></input>
                        </div>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <TbGenderBigender  />
                                <p>Genero</p>
                            </div>
                            <input name="genero" placeholder={perfil.Genero} disabled ></input>
                        </div> 
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <IoCalendar   />
                                <p>Fecha de Nacimiento</p>
                            </div>
                            <input name="fechaNacimiento" disabled placeholder={perfil.FechaDeNacimiento} onChange={handleInputChange}></input>
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
                            <input name="correo" placeholder={perfil.Correo} onChange={handleInputChange}></input>
                        </div>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <RiMailSendLine  />
                                <p>Celular</p>
                            </div>
                            <input onChange={handleInputChange} name="celular" placeholder={perfil.Celular}></input>
                        </div>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <RiMailSendLine  />
                                <p>Rol</p>
                            </div>
                            <input name="rol" placeholder={perfil.Rol} disabled></input>
                        </div>
                        
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <RiLockPasswordLine   />
                                <p>Contraseña</p>
                            </div>
                            <input onChange={handleInputChange} name="contraseña" placeholder={perfil.Contraseña}></input>
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

export default FormPerfil