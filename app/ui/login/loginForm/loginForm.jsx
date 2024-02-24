"use client"

import styles from "@/app/ui/login/loginForm/loginForm.module.css"
import { IoEnterOutline } from "react-icons/io5";
import { useState } from "react";
import {logInConEmail, registrarConEmail} from "@/app/auth-actions/actions"

const LoginForm = () => {

    const [email , setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmitRegister = async (e) =>{
        e.preventDefault();
        try{
            const result = await registrarConEmail(email, password);
            const {error} = JSON.parse(result);
            if(error)
            {
                console.error("error en el registro", error.message)
            }else{
                console.log("registro Exitoso")
            }
        }catch(error){
            console.error("error inesperado", error)
        }
    }

    const  handleSubmitLogin = async (e) => {
        e.preventDefault();
        try{
            const result = await logInConEmail(email, password);
            const {error} = JSON.parse(result);
    
            if(error?.message){
                console.error("Error al logearse: ", error.message)
            }else{
                console.log("Login exitoso")
            }
        }catch(e){
            console.error("Error inesperado", e)
        }


    }


    return (
        <form onSubmit={handleSubmitLogin}>
            <div className={styles.inputs}>
                <input placeholder="@ Ingresa tu correo" onChange={(e) => setEmail(e.target.value)}></input>
                <input placeholder="Ingresa tu contraseña" onChange={(e) => setPassword(e.target.value)}></input>
            </div>
            <div className={styles.boton}>            
                <button type="submit">
                    <IoEnterOutline />
                    Ingresar
                </button>
            </div>
        </form>
    )
}

export default LoginForm