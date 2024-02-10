import styles from "../ui/dashboard/dashboard.module.css"
import { IoPersonSharp } from "react-icons/io5";
import { FaCirclePlus } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { MdSell } from "react-icons/md";


import Cards from "../ui/dashboard/components/cards/cards"
import Graficos from "../ui/dashboard/components/graficos/graficos"
import InformeVentas from "../ui/dashboard/components/informeVentas/informeVentas"
import VentasRecientes from "../ui/dashboard/components/ventasRecientes/ventasRecientes"


const datos=[
    {
        icon: <MdSell  />,
        title: "Ventas de Productos",
        cant: "60",
        ben: "28.4%",
        estado: "positivo"
    },{
        icon: <IoPersonSharp />,
        title: "Clientes al mes",
        cant: "743",
        ben: "12.6%",
        estado: "negativo"
    },{
        icon: <FaCirclePlus  />,
        title: "Nuevos Clientes",
        cant: "35",
        ben: "3%",
        estado: "positivo"
    },{
        icon: <FaStar  />,
        title: "Suscripciones",
        cant: "150",
        ben: "11.3%",
        estado: "positivo"
    },
]

const dashboardPage = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.cards}>
                <Cards informacion={datos[0]}></Cards>
                <Cards informacion={datos[1]}></Cards>
                <Cards informacion={datos[2]}></Cards>
                <Cards informacion={datos[3]}></Cards>
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