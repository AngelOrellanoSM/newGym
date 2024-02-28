"use client"
import styles from "./logOut.module.css"
import { cerrarSesion } from "@/app/auth-actions/actions";
import {
    MdLogout,
  } from "react-icons/md";

const LogOut = () => {
    const logOut = async (e) => {
        e.preventDefault();
        try{
          await cerrarSesion();
        }catch(e){
          console.error("Error inesperado: ", e)
        }
      };
    return (
        <form onSubmit={logOut}>
          <button type="submit" className={styles.logout}>
                <MdLogout></MdLogout>
                Logout
          </button>
        </form>
    )
}

export default LogOut