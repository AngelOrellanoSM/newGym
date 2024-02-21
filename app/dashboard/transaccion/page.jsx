import styles from "../../ui/transaccion/transaccion.module.css"
import Tablas from "@/app/ui/components/tablas/tablas"
import { FaHome } from "react-icons/fa";

const tablaPrueba = {
    columnas: [
        {
            icon: <FaHome />,
            titulo: "Nombre",
            width: "50%",
        },
        {
            icon: <FaHome />,
            titulo: "Fecha",
            width: "20%",
        },
        {
            icon: <FaHome />,
            titulo: "Total",
            width: "15%",
        },
    ], 
    contenido: [
        {
            Nombre: "Pedro",
            Fecha: "20-12-2022",
            Total: "60"
        },
        {
            Nombre: "Pedro",
            Fecha: "20-12-2022",
            Total: "40"
        },
        {
            Nombre: "Pedro",
            Fecha: "20-12-2022",
            Total: "20"
        },
        {
            Nombre: "Pedro",
            Fecha: "20-12-2022",
            Total: "80"
        },
        {
            Nombre: "Pedro",
            Fecha: "20-12-2022",
            Total: "10"
        },
        {
            Nombre: "Pedro",
            Fecha: "20-12-2022",
            Total: "20"
        },
        {
            Nombre: "Pedro",
            Fecha: "20-12-2022",
            Total: "70"
        },
        {
            Nombre: "Pedro",
            Fecha: "20-12-2022",
            Total: "30"
        },
        {
            Nombre: "Pedro",
            Fecha: "20-12-2022",
            Total: "20"
        },
    ],
    condicion: {
        columna: "Total",
        tipo: "numerico"
    },
    acciones: {
        visible: true,
        delete: true,
        edit: true,
        historial: true,
        ruta: {
            pagina: "",
            subpagina: "",
        }
    }
}



const Transaccion = () => {
    return (
        <div className={styles.container}>
            <Tablas datos={tablaPrueba}></Tablas>
        </div>
    )
}

export default Transaccion