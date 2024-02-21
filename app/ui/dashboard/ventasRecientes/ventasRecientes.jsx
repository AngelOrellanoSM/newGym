import styles from "./ventasRecientes.module.css"
import Tablas from "../../components/tablas/tablas";
import { BiSolidStar } from "react-icons/bi";
import { FaCalendarDay } from "react-icons/fa6";
import { GrStatusGoodSmall } from "react-icons/gr";
import { TbMoneybag } from "react-icons/tb";

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
        {
            "Id": "#1234",
            "Fecha": "dec30, 10.07AM",
            "Estatus": "pagado",
            "Total": "S/.329.40"
          },
          {
            "Id": "#5678",
            "Fecha": "jan15, 09.30AM",
            "Estatus": "pendiente",
            "Total": "S/.412.75"
          },
          {
            "Id": "#9012",
            "Fecha": "feb02, 11.15AM",
            "Estatus": "pagado",
            "Total": "S/.376.21"
          },
          {
            "Id": "#3456",
            "Fecha": "mar20, 02.45PM",
            "Estatus": "pendiente",
            "Total": "S/.438.89"
          },
          {
            "Id": "#7890",
            "Fecha": "apr05, 08.20AM",
            "Estatus": "pagado",
            "Total": "S/.491.13"
          },
          {
            "Id": "#2345",
            "Fecha": "may10, 01.55PM",
            "Estatus": "pendiente",
            "Total": "S/.389.62"
          },
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

const VentasRecientes = () => {
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