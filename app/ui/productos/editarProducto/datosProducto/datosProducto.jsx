"use client"
import styles from "./datosProducto.module.css"
import { IoPersonSharp } from "react-icons/io5";
import { SlEnvolopeLetter } from "react-icons/sl";
import { RiMailSendLine } from "react-icons/ri";
import { updateProducto } from "@/app/apiAccions/productosAccions";
import { useState } from "react";

const DatosProducto = ({data}) => {
    const producto = data[0]

    const [formData, setFormData] = useState({
        nombre: "",
        descripcion: "",
        costo: "",
        venta: "",
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
            const result = await updateProducto(formData, producto.id)
            
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
                        <h2>Informacion del Producto</h2>
                        <h4>Sea cuidadoso al cambiar la información del producto</h4>
                    </div>
                    <div className={styles.inputContainer}>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <IoPersonSharp />
                                <p>Nombre del Producto</p>
                            </div>
                            <input name="nombre" placeholder={producto.Nombre} onChange={handleInputChange}></input>
                        </div>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <SlEnvolopeLetter />
                                <p>Stock</p>
                            </div>
                            <input placeholder={producto.Stock} disabled></input>
                        </div>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <SlEnvolopeLetter />
                                <p>Descripcion</p>
                            </div>
                            <textarea name="descripcion" placeholder={producto.Descripcion} onChange={handleInputChange}></textarea>
                        </div>     
                    </div>
                </div>
                <div className={styles.itemContainer}>
                    <div className={styles.titulo}>
                        <h2>Informacion Contable</h2>
                        <h4>Ingresa la información relacionado a las finanzas del producto</h4>
                    </div>
                    <div className={styles.inputContainer}>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <RiMailSendLine  />
                                <p>Costo de compra ( S/. )</p>
                            </div>
                            <input name="costo" onChange={handleInputChange} type="float" placeholder={producto.Costo}></input>
                        </div>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <RiMailSendLine  />
                                <p>Precio de Venta ( S/. )</p>
                            </div>
                            <input name="venta" onChange={handleInputChange} type="float" placeholder={producto.Venta}></input>
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

export default DatosProducto