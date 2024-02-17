"use client"
import styles from "../../../../ui/compras/editarCompra/editarCompra.module.css"
import { IoPersonSharp } from "react-icons/io5";
import { SlEnvolopeLetter } from "react-icons/sl";
import { RiMailSendLine } from "react-icons/ri";
import Link from "next/link";
import React, { useState } from "react";

const compras = [
    {
        "idCompra": 1,
        "fechaCompra": "2024-02-10",
        "producto": "Camiseta deportiva",
        "costo": 15.50,
        "cantidad": 3,
        "status": "pendiente",
        "total": 46.50
      },
      {
        "idCompra": 2,
        "fechaCompra": "2024-01-25",
        "producto": "Pantalones de yoga",
        "costo": 20.75,
        "cantidad": 2,
        "status": "recibido",
        "total": 41.50
      },
      {
        "idCompra": 3,
        "fechaCompra": "2023-12-15",
        "producto": "Zapatillas para correr",
        "costo": 45.00,
        "cantidad": 1,
        "status": "pendiente",
        "total": 45.00
      },
      {
        "idCompra": 4,
        "fechaCompra": "2024-02-05",
        "producto": "Mancuernas de 5 libras",
        "costo": 10.00,
        "cantidad": 5,
        "status": "pendiente",
        "total": 50.00
      },
      {
        "idCompra": 5,
        "fechaCompra": "2023-11-20",
        "producto": "Pelota de yoga",
        "costo": 8.50,
        "cantidad": 1,
        "status": "recibido",
        "total": 8.50
      },
]

const EditarCompra = ({params}) => {
    const compras_id = params.id;
    const compra = compras.find((item)=>{return item.idCompra.toString() === compras_id});

    const [,setMostrarCampo] = compra.status === "recibido"?useState(true):useState(false);

    const handleSelectChange = (event) => {
        const selectedOption = event.target.value;
        if (selectedOption === "recibido") {
            setMostrarCampo(true);
            compra.status = "recibido";
        } else {
            setMostrarCampo(false);
            compra.status = "pendiente";
        }
    };
    
    return (
        <div className={styles.container}>
            <div className={styles.addClient}>
                <div className={styles.itemContainer}>
                    <div className={styles.titulo}>
                        <h2>Informacion Basica</h2>
                    </div>
                    <div className={styles.inputContainer}>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <IoPersonSharp />
                                <p>Fecha de Compra</p>
                            </div>
                            <input placeholder={compra.fechaCompra} disabled></input>
                        </div>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <SlEnvolopeLetter />
                                <p>Nombre del Producto</p>
                            </div>
                            <input placeholder={compra.producto} disabled ></input>
                        </div>
                    </div>
                </div>
                <div className={styles.itemContainer}>
                    <div className={styles.titulo}>
                        <h2>Informacion Contable</h2>
                    </div>
                    <div className={styles.inputContainer}>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <RiMailSendLine  />
                                <p>Costo</p>
                            </div>
                            <input placeholder={compra.costo} disabled></input>
                        </div>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <RiMailSendLine  />
                                <p>Cantidad</p>
                            </div>
                            <input placeholder={compra.cantidad} disabled></input>
                        </div> 
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <RiMailSendLine  />
                                <p>Total</p>
                            </div>
                            <input placeholder={compra.total} disabled></input>
                        </div>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <RiMailSendLine  />
                                <p>Status</p>
                            </div>
                            <select value={compra.status} onChange={handleSelectChange}>
                                <option value="recibido">Recibido</option>
                                <option value="pendiente" >Pendiente</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.botones}>
                <button className={styles.add}>GUARDAR CAMBIOS</button>
                <Link href={"/dashboard/compras"}>
                    <button className={styles.cancel}>
                        CANCELAR
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default EditarCompra;