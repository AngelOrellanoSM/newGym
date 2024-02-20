"use client"
import styles from "../../ui/reportes/reportes.module.css"
import ReporteVenta from "@/app/ui/reportes/reporteVenta/reporteVenta"
import ReporteCompra from "@/app/ui/reportes/reporteCompra/reporteCompra"
import ReporteFinanciero from "@/app/ui/reportes/reporteFinanciero/reporteFinanciero"
import React, { useState } from 'react';


const Reportes = () => {
    const [tipoReporte, setTipoReporte] = useState("informeVentas");

    const seleccionCambio = (e) =>{
        setTipoReporte(e.target.value);
    }
    
    return (
        <div className={styles.container}>
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
            
            {tipoReporte === "informeVentas" && <ReporteVenta ></ReporteVenta>}
            {tipoReporte === "informeCompras" && <ReporteCompra></ReporteCompra>}
            {tipoReporte === "informeFinanciero" && <ReporteFinanciero></ReporteFinanciero>}
        </div>
    )
}

export default Reportes