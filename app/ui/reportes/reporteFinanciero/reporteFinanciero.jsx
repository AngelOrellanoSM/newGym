import styles from "./reporteFinanciero.module.css"
import Cards from "@/app/ui/components/cards/cards"
import IngresosGastos from "../../dashboard/graficos/ingresosGastos/ingresosGastos";
import { IoPeopleSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { MdClass } from "react-icons/md";
import { FaBed } from "react-icons/fa";
import BeneficioTotal from "../../dashboard/graficos/beneficioTotal/beneficioTotal";
import { readDatos } from "@/app/apiAccions/ventasAccions";
import { readDatosCompra } from "@/app/apiAccions/comprasAccions";
import { TotalIngresosUltimosMeses } from "@/app/apiAccions/generalAccions";

const datos = [
    {
        icon: <IoPeopleSharp />,
        titulo: "Ventas Totales",
        cantidad: 0,
        color: "blue"
    },
    {
        icon: <FaHeart />,
        titulo: "Gastos Totales",
        cantidad: 0,
        color: "green"
    },{
        icon: <MdClass />,
        titulo: "Beneficios Totales",
        cantidad: 0,
        color: "yellow"
    }
]
const ReporteFinanciero = async () => {
    const datosIngresoEgreso = await TotalIngresosUltimosMeses()

    const {ingresoTotales} = await readDatos();
    const {gastosTotales} = await readDatosCompra();
    const beneficioNeto = parseFloat(ingresoTotales - gastosTotales).toFixed(2)

    datos[0].cantidad = ingresoTotales.toFixed(2)
    datos[1].cantidad = gastosTotales
    datos[2].cantidad = beneficioNeto

    return (
        <div className={`${styles.container} InformeFinancieroDoc`}>
            <div className={styles.cardContainer}>
                <Cards datos={datos[0]}></Cards>
                <Cards datos={datos[1]}></Cards>
                <Cards datos={datos[2]}></Cards>
            </div>

            <div className={styles.graphComprasVentas}>
                <IngresosGastos totalBeneficio={ingresoTotales.toFixed(2)} datos = {datosIngresoEgreso}></IngresosGastos>
            </div>

            <div className={styles.graphBeneficio}>
                <BeneficioTotal totalBeneficio={ingresoTotales.toFixed(2)} datos = {datosIngresoEgreso}></BeneficioTotal>
            </div>
        </div>
    )
}

export default ReporteFinanciero