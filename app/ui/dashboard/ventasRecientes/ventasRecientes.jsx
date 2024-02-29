import styles from "./ventasRecientes.module.css"
import Tablas from "../../components/tablas/tablas";
import { BiSolidStar } from "react-icons/bi";
import { FaCalendarDay } from "react-icons/fa6";
import { GrStatusGoodSmall } from "react-icons/gr";
import { TbMoneybag } from "react-icons/tb";
import { ultimasVentas } from "@/app/apiAccions/generalAccions";

  const tablaVentasRecientes = {
    columnas: [
        {
            icon: <BiSolidStar />,
            titulo: "Id",
            width: "15%",
        },
        {
            icon: <FaCalendarDay  />,
            titulo: "Fecha",
            width: "22%",
        },
        {
            icon: <GrStatusGoodSmall />,
            titulo: "Estatus",
            width: "20%",
        },
        {
            icon: <TbMoneybag  />,
            titulo: "Total",
            width: "15%",
        },
    ], 
    contenido: [
        
    ],
    condicion: {
        columna: "Estatus",
        tipo: "cadena"
    },
    acciones: {
        visible: false,
        delete: false,
        edit: false,
        historial: false,
        ruta: {
            pagina: "",
            subpagina: "",
        }
    }
}

const VentasRecientes = async () => {
    const resultado = await ultimasVentas()
    const {data} = JSON.parse(resultado)
    tablaVentasRecientes.contenido = []
    data.map((item) => {
        const fecha = new Date(item.FechaDeVenta)
        tablaVentasRecientes.contenido.push({
            "Id": item.id,
            "Fecha": fecha.toLocaleDateString('es-ES', {day: '2-digit', month: '2-digit', year: 'numeric'}),
            "Estatus": item.Estatus,
            "Total": item.Total.toFixed(2)
        })
    })

    return (
        <div className={styles.container}>
            <div className={styles.titulo}>
                <h2>Ultimas Ventas</h2>
            </div>
            <div className={styles.table}>
                <Tablas datos={tablaVentasRecientes}></Tablas>
            </div>
        </div>
    )
}

export default VentasRecientes;