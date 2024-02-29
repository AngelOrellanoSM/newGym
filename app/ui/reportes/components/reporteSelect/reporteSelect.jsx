"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import styles from "./reporteSelect.module.css"
import React, { useState } from 'react';
const ReporteSelect = () => {
    const searchParams = useSearchParams();
    const {replace} = useRouter()
    const pathname = usePathname()

    const seleccionCambio = (e) =>{
        const params = new URLSearchParams(searchParams);
        params.set("tipoReporte", e.target.value)
        replace(`${pathname}?${params}`)
    }
    return (
        <div className={styles.informeTitulo}>
            <div className={styles.informeSeleccion}>
                <select onChange={seleccionCambio}>
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