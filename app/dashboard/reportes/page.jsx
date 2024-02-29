import styles from "../../ui/reportes/reportes.module.css"
import ReporteVenta from "@/app/ui/reportes/reporteVenta/reporteVenta"
import ReporteCompra from "@/app/ui/reportes/reporteCompra/reporteCompra"
import ReporteFinanciero from "@/app/ui/reportes/reporteFinanciero/reporteFinanciero"
import ReporteSelect from "@/app/ui/reportes/components/reporteSelect/reporteSelect"



const Reportes = ({searchParams}) => {
    const dataParam = searchParams?.tipoReporte || "informeVentas"
    
    return (
        <div className={styles.container}>
            
            <ReporteSelect></ReporteSelect>
            {dataParam === "informeVentas" && <ReporteVenta ></ReporteVenta>}
            {dataParam === "informeCompras" && <ReporteCompra></ReporteCompra>}
            {dataParam === "informeFinanciero" && <ReporteFinanciero></ReporteFinanciero>}
        </div>
    )
}

export default Reportes