import styles from "./tablaCompra.module.css"
import BarraBusqueda from "@/app/ui/components/barraBusqueda/barraBusqueda"
import Tablas from "@/app/ui/components/tablas/tablas"

import { BiSolidStar } from "react-icons/bi";
import { LuCalendar } from "react-icons/lu";
import { GrStatusGoodSmall } from "react-icons/gr";
import { TbMoneybag } from "react-icons/tb";
import { FaSortAmountUpAlt } from "react-icons/fa";
import { PiArchiveBoxThin } from "react-icons/pi";
import { BiMoneyWithdraw } from "react-icons/bi";
import Paginacion from "@/app/ui/components/paginacion/paginacion";

const tablaCompras = 
{
    "columnas": [
      {
        "icon": <BiSolidStar />,
        "titulo": "Id",
        "width": "8%"
      },
      {
        "icon": <LuCalendar />,
        "titulo": "FechaDeCompra",
        "width": "17%"
      },
      {
        "icon": <PiArchiveBoxThin />,
        "titulo": "Producto",
        "width": "17%"
      },
      {
        "icon": <BiMoneyWithdraw  />,
        "titulo": "Costo",
        "width": "12%"
      },
      {
        "icon": <FaSortAmountUpAlt />,
        "titulo": "Cantidad",
        "width": "12%"
      },
      {
        "icon": <GrStatusGoodSmall />,
        "titulo": "Estatus",
        "width": "12%"
      },
      {
        "icon": <TbMoneybag />,
        "titulo": "Total",
        "width": "10%"
      }
    ],
    "contenido": [
      {
        "Id": 1,
        "FechaDeCompra": "2024-02-10",
        "Producto": "Camiseta deportiva",
        "Costo": 15.50,
        "Cantidad": 3,
        "Estatus": "pendiente",
        "Total": 46.50
      },
      {
        "Id": 2,
        "FechaDeCompra": "2024-01-25",
        "Producto": "Pantalones de yoga",
        "Costo": 20.75,
        "Cantidad": 2,
        "Estatus": "recibido",
        "Total": 41.50
      },
      {
        "Id": 3,
        "FechaDeCompra": "2023-12-15",
        "Producto": "Zapatillas para correr",
        "Costo": 45.00,
        "Cantidad": 1,
        "Estatus": "pendiente",
        "Total": 45.00
      },
      {
        "Id": 4,
        "FechaDeCompra": "2024-02-05",
        "Producto": "Mancuernas de 5 libras",
        "Costo": 10.00,
        "Cantidad": 5,
        "Estatus": "pendiente",
        "Total": 50.00
      },
      {
        "Id": 5,
        "FechaDeCompra": "2023-11-20",
        "Producto": "Pelota de yoga",
        "Costo": 8.50,
        "Cantidad": 1,
        "Estatus": "recibido",
        "Total": 8.50
      }
    ],
    "condicion": {
      "columna": "Estatus",
      "tipo": "cadena"
    },
    "acciones": {
      "visible": false,
      "delete": true,
      "edit": true,
      "historial": false,
      "ruta": {
        "pagina": "compras",
        "subpagina": "Compra"
      }
    }
  }


const TablaCompra = () => {
    return (
        <div className={styles.container}>
            <div className={styles.tablaContent}>
                <div className={styles.titulo}>
                    <div className={styles.searchContent}>
                        <h2>Todos los Productos</h2>
                        <BarraBusqueda placeholder="Buscar productos ..."></BarraBusqueda>
                    </div>
                    <div className={styles.funcionalidades}>
                        <div className={styles.cantPaginas}>
                            <p>Filas por página</p>
                            <select>
                                <option value="10">10</option>
                                <option value="20">20</option>
                                <option value="30">30</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <Tablas datos={tablaCompras}></Tablas>
            <Paginacion></Paginacion>
        </div>
    )
}

export default TablaCompra