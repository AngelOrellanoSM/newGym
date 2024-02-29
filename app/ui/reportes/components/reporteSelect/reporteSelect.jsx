"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import styles from "./reporteSelect.module.css"
import React, { useState } from 'react';
const ReporteSelect = ({valor}) => {
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
                <div className={styles.temporal}>
                    <select>
                        <option value="mensual">Ultimo Mes</option>
                        <option value="diario">Ultimo Día</option>
                        <option value="personalizado">Personalizado</option>
                    </select>
                </div>
                <button>Exportar a PDF</button>
            </div>
        </div>
    )
}

export default ReporteSelect