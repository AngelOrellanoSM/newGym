"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import styles from "./reporteSelect.module.css"
import React, { useState } from 'react';
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const ReporteSelect = ({valor}) => {
    const botonFuntion = () =>{
        console.log(valor)
        let captura = {};
        if(valor === "informeVentas"){
            captura = document.querySelector(".InformeVentaDoc")
        }else if(valor === "informeCompras"){
            captura = document.querySelector(".InformeCompraDoc")
        }else{
            captura = document.querySelector(".InformeFinancieroDoc")
        }
        console.log(captura)
        html2canvas(captura).then((canvas) => {
            const imgData = canvas.toDataURL("img/png")
            const doc = new jsPDF("p", "mm", "a4")
            const componentWidth = doc.internal.pageSize.getWidth()
            const componentHeight = doc.internal.pageSize.getHeight()
            doc.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight)
            doc.save("informe.pdf")
        })
    }
    const searchParams = useSearchParams();
    const {replace} = useRouter()
    const pathname = usePathname()

    const seleccionCambio = (e) =>{
        const params = new URLSearchParams(searchParams);
        params.set("tipoReporte", e.target.value)
        params.set("page",1)
        params.set("data","")
        replace(`${pathname}?${params}`)
    }
    return (
        <div className={styles.informeTitulo}>
            <div className={styles.informeSeleccion}>
                <select value={valor} onChange={seleccionCambio}>
                    <option value="informeVentas">Informe de Ventas</option>
                    <option value="informeCompras">Informe de Compras</option>
                    <option value="informeFinanciero">Informe de Financiero</option>
                </select>
            </div>
            
            <div className={styles.boton}>
                
                <button onClick={botonFuntion}>Exportar a PDF</button>
            </div>

        </div>
    )
}

export default ReporteSelect