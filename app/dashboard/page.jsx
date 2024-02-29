/*import styles from "../ui/dashboard/dashboard.module.css"
import { IoPersonSharp } from "react-icons/io5";
import { FaCirclePlus } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { MdSell } from "react-icons/md";

import Cards from "@/app/ui/components/cards/cards"
import Graficos from "../ui/dashboard/graficos/graficos"
import InformeVentas from "../ui/dashboard/informeVentas/informeVentas"
import VentasRecientes from "../ui/dashboard/ventasRecientes/ventasRecientes"
import { dataCardDashboard, fetchInformeData } from "../apiAccions/generalAccions";

const datos=[
    {
        icon: <MdSell  />,
        titulo: "Ventas de Productos",
        cantidad: "60",
        color: "blue",
        ben: "28.4%",
        estado: "positivo"
    },{
        icon: <IoPersonSharp />,
        titulo: "Clientes Activos",
        cantidad: "60",
        color: "green",
        ben: "12.6%",
        estado: "negativo"
    },{
        icon: <FaCirclePlus  />,
        titulo: "Nuevos Clientes",
        cantidad: "60",
        color: "yellow",
        ben: "3%",
        estado: "positivo"
    },{
        icon: <FaStar  />,
        titulo: "Suscripciones",
        cantidad: "60",
        color: "black",
        ben: "11.3%",
        estado: "positivo"
    },
]*/

import styles from "@/app/ui/reportes/reportes.module.css"
import ReporteVenta from "@/app/ui/reportes/reporteVenta/reporteVenta"
import ReporteCompra from "@/app/ui/reportes/reporteCompra/reporteCompra"
import ReporteFinanciero from "@/app/ui/reportes/reporteFinanciero/reporteFinanciero"
import ReporteSelect from "@/app/ui/reportes/components/reporteSelect/reporteSelect"




const dashboardPage = async ({searchParams}) => {
    /*const {ventaProductos, clientesActivos, clientesNuevos, ventaPlanes } = await dataCardDashboard()
    datos[0].cantidad = ventaProductos;
    datos[1].cantidad = clientesActivos;
    datos[2].cantidad = clientesNuevos;
    datos[3].cantidad = ventaPlanes;

    const dataInforme = await fetchInformeData()
    
    return (
        <div className={styles.wrapper}>
            <div className={styles.cards}>
                <Cards datos={datos[0]}></Cards>
                <Cards datos={datos[1]}></Cards>
                <Cards datos={datos[2]}></Cards>
                <Cards datos={datos[3]}></Cards>
            </div>
            
            <Graficos></Graficos>
            
            <h2>Resumen de informes</h2>
            <div className={styles.informes}>
                <InformeVentas dataInforme={dataInforme}></InformeVentas>
                <VentasRecientes></VentasRecientes>
            </div>
        </div>
    )*/
    const dataParam = searchParams?.tipoReporte || "informeVentas"
    const dataVenta = searchParams?.data || "";
    const dataCantidad = searchParams?.cant || 10;
    let page = searchParams?.page || 1;
    page < 1 ? page = 1 : false;
    return (
        <div className={styles.container}>
            
            <ReporteSelect valor = {dataParam}></ReporteSelect>
            {dataParam === "informeVentas" && <ReporteVenta dataParam = {dataVenta} page={page} dataCantidad = {dataCantidad}></ReporteVenta>}
            {dataParam === "informeCompras" && <ReporteCompra dataParam = {dataVenta} page={page} dataCantidad = {dataCantidad}></ReporteCompra>}
            {dataParam === "informeFinanciero" && <ReporteFinanciero></ReporteFinanciero>}
        </div>
    )

}

export default dashboardPage;
