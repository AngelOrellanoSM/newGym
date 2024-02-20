import styles from "./reporteFinanciero.module.css"
import Cards from "@/app/ui/components/cards/cards"
import IngresosGastos from "../../dashboard/components/graficos/ingresosGastos/ingresosGastos";
import { IoPeopleSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { MdClass } from "react-icons/md";
import { FaBed } from "react-icons/fa";
import BeneficioTotal from "../../dashboard/components/graficos/beneficioTotal/beneficioTotal";

const datos = [
    {
        icon: <IoPeopleSharp />,
        titulo: "Ventas Totales",
        cantidad: 750,
        color: "blue"
    },
    {
        icon: <FaHeart />,
        titulo: "Gastos Totales",
        cantidad: 450,
        color: "green"
    },{
        icon: <MdClass />,
        titulo: "Beneficios Totales",
        cantidad: 180,
        color: "yellow"
    },{
        icon: <FaBed  />,
        titulo: "Antiguos",
        cantidad: 120,
        color: "black"
    },
]
const ReporteFinanciero = () => {
    return (
        <div className={styles.container}>
            <div className={styles.cardContainer}>
                <Cards datos={datos[0]}></Cards>
                <Cards datos={datos[1]}></Cards>
                <Cards datos={datos[2]}></Cards>
            </div>

            <div className={styles.graphComprasVentas}>
                <IngresosGastos></IngresosGastos>
            </div>

            <div className={styles.graphBeneficio}>
                <BeneficioTotal></BeneficioTotal>
            </div>
        </div>
    )
}

export default ReporteFinanciero