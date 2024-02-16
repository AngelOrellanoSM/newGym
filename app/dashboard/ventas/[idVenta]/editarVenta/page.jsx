"use client"

import styles from "../../../../ui/ventas/editarVenta/editarVenta.module.css"
import { IoPersonSharp } from "react-icons/io5";
import { SlEnvolopeLetter } from "react-icons/sl";
import { RiMailSendLine } from "react-icons/ri";
import { TbGenderBigender } from "react-icons/tb";
import { IoCalendar } from "react-icons/io5";
import { RiLockPasswordLine } from "react-icons/ri";
import Link from "next/link";
import React, { useState } from "react";

const ventas = [
    {
        "idVenta": 1,
        "fechaVenta": "2024-02-15",
        "nombreCliente": "Juan Pérez",
        "producto": "Plan A",
        "cantidad": 1,
        "status": "pagado",
        "total": 50
    },
    {
        "idVenta": 2,
        "fechaVenta": "2024-02-14",
        "nombreCliente": "María López",
        "producto": "Clase de Yoga",
        "cantidad": 1,
        "status": "pagado",
        "total": 10
    },
    {
        "idVenta": 3,
        "fechaVenta": "2024-02-13",
        "nombreCliente": "Carlos García",
        "producto": "Mancuernas de 5kg",
        "cantidad": 2,
        "status": "pendiente",
        "total": 30
    },
    {
        "idVenta": 4,
        "fechaVenta": "2024-02-12",
        "nombreCliente": "Ana Martínez",
        "producto": "Clase de Pilates",
        "cantidad": 1,
        "status": "pagado",
        "total": 15
    },
    {
        "idVenta": 5,
        "fechaVenta": "2024-02-11",
        "nombreCliente": "Pedro Rodríguez",
        "producto": "Plan C",
        "cantidad": 1,
        "status": "pagado",
        "total": 120
    },
    {
        "idVenta": 6,
        "fechaVenta": "2024-02-10",
        "nombreCliente": "Laura Sánchez",
        "producto": "Clase de Zumba",
        "cantidad": 1,
        "status": "pendiente",
        "total": 12
    },
    {
        "idVenta": 7,
        "fechaVenta": "2024-02-09",
        "nombreCliente": "Sofía Fernández",
        "producto": "Plan D",
        "cantidad": 1,
        "status": "pagado",
        "total": 200
    },
    {
        "idVenta": 8,
        "fechaVenta": "2024-02-08",
        "nombreCliente": "Diego Ruiz",
        "producto": "Bicicleta estática",
        "cantidad": 1,
        "status": "pagado",
        "total": 200
    },
    {
        "idVenta": 9,
        "fechaVenta": "2024-02-07",
        "nombreCliente": "Isabel Gómez",
        "producto": "Plan E",
        "cantidad": 1,
        "status": "pendiente",
        "total": 90
    },
    {
        "idVenta": 10,
        "fechaVenta": "2024-02-06",
        "nombreCliente": "Elena Castro",
        "producto": "Cinta de correr",
        "cantidad": 1,
        "status": "pagado",
        "total": 300
    },
    {
        "idVenta": 11,
        "fechaVenta": "2024-02-05",
        "nombreCliente": "Javier Hernández",
        "producto": "Plan F",
        "cantidad": 1,
        "status": "pagado",
        "total": 150
    },
    {
        "idVenta": 12,
        "fechaVenta": "2024-02-04",
        "nombreCliente": "Carmen Pérez",
        "producto": "Bandas elásticas",
        "cantidad": 1,
        "status": "pendiente",
        "total": 10
    },
    {
        "idVenta": 13,
        "fechaVenta": "2024-02-03",
        "nombreCliente": "Andrés Díaz",
        "producto": "Plan G",
        "cantidad": 1,
        "status": "pagado",
        "total": 180
    },
    {
        "idVenta": 14,
        "fechaVenta": "2024-02-02",
        "nombreCliente": "Marta Martínez",
        "producto": "Guantes de Boxeo",
        "cantidad": 1,
        "status": "pendiente",
        "total": 20
    },
    {
        "idVenta": 15,
        "fechaVenta": "2024-02-01",
        "nombreCliente": "Raúl López",
        "producto": "Plan H",
        "cantidad": 1,
        "status": "pagado",
        "total": 100
    },
]

const EditarEmpleado = ({params}) => {

    const venta_id = params.idVenta;
    const venta = ventas.find((item)=>{return item.idVenta.toString() === venta_id});
    
    const [mostrarCampo, setMostrarCampo] = venta.status === "pagado"?useState(true):useState(false);

    const handleSelectChange = (event) => {
        const selectedOption = event.target.value;
        if (selectedOption === "pagado") {
            setMostrarCampo(true);
            venta.status = "pagado";
        } else {
            setMostrarCampo(false);
            venta.status = "pendiente";
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.addClient}>
                <div className={styles.itemContainer}>
                    <div className={styles.titulo}>
                        <h2>Informacion de la Venta</h2>
                        <h4>Ingresar la información basica de la venta realizada.</h4>
                    </div>
                    <div className={styles.inputContainer}>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <IoPersonSharp />
                                <p>Nombre del Cliente</p>
                            </div>
                            <input placeholder={venta.nombreCliente} disabled></input>
                        </div>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <IoPersonSharp />
                                <p>Nombre del producto</p>
                            </div>
                            <input placeholder={venta.producto} disabled></input>
                        </div>
                    </div>
                </div>
                <div className={styles.itemContainer}>
                    <div className={styles.titulo}>
                        <h2>Informacion Contable</h2>
                        <h4>Ingresa la información relacionado a las finanzas de la venta</h4>
                    </div>
                    <div className={styles.inputContainer}>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <RiMailSendLine  />
                                <p>Cantidad Vendida</p>
                            </div>
                            <input type="number" placeholder={venta.cantidad} disabled></input>
                        </div>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <RiMailSendLine  />
                                <p>Precio de Venta Total ( S/. )</p>
                            </div>
                            <input type="number" placeholder={venta.total} disabled></input>
                        </div>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <RiMailSendLine  />
                                <p>Status</p>
                            </div>
                            <select value={venta.status} onChange={handleSelectChange} disabled={venta.status === "pagado"?true:false}>
                                <option value="pendiente">Pendiente</option>
                                <option value="pagado">Pagado</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.botones}>
                <button className={styles.add}>AGREGAR</button>
                <Link href={"/dashboard/ventas"}>
                    <button className={styles.cancel}>
                        CANCELAR
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default EditarEmpleado