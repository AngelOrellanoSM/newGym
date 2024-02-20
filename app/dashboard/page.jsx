import styles from "../ui/dashboard/dashboard.module.css"
import { IoPersonSharp } from "react-icons/io5";
import { FaCirclePlus } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { MdSell } from "react-icons/md";

import Cards from "@/app/ui/components/cards/cards"
import Graficos from "../ui/dashboard/components/graficos/graficos"
import InformeVentas from "../ui/dashboard/components/informeVentas/informeVentas"
import VentasRecientes from "../ui/dashboard/components/ventasRecientes/ventasRecientes"


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
        titulo: "Clientes al mes",
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
]


const dashboardPage = () => {
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
                <InformeVentas></InformeVentas>
                <VentasRecientes></VentasRecientes>
            </div>
        </div>
    )
}

export default dashboardPage;