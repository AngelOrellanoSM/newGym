import styles from "./tablaVenta.module.css"
import Paginacion from "@/app/ui/components/paginacion/paginacion"
import BarraBusqueda from "@/app/ui/components/barraBusqueda/barraBusqueda"
import Link from "next/link";
import Tablas from "@/app/ui/components/tablas/tablas";

import { IoMdPerson } from "react-icons/io";
import { PiArchiveBoxThin } from "react-icons/pi";
import { BiSolidStar } from "react-icons/bi";
import { LuCalendar } from "react-icons/lu";
import { GrStatusGoodSmall } from "react-icons/gr";
import { TbMoneybag } from "react-icons/tb";
import { FaSortAmountUpAlt } from "react-icons/fa";

const tablaVentas = 
    {
        "columnas": [
          {
            "icon": <BiSolidStar />,
            "titulo": "Id",
            "width": "8%"
          },
          {
            "icon": <LuCalendar />,
            "titulo": "FechaDeVenta",
            "width": "16%"
          },
          {
            "icon": <IoMdPerson  />,
            "titulo": "NombreDeCliente",
            "width": "16%"
          },
          {
            "icon": <PiArchiveBoxThin  />,
            "titulo": "Producto",
            "width": "16%"
          },
          {
            "icon": <FaSortAmountUpAlt />,
            "titulo": "Cantidad",
            "width": "11%"
          },
          {
            "icon": <GrStatusGoodSmall />,
            "titulo": "Estatus",
            "width": "11%"
          },
          {
            "icon": <TbMoneybag />,
            "titulo": "Total",
            "width": "11%"
          }
        ],
        "contenido": [
          {
            "Id": 1,
            "FechaDeVenta": "2024-02-15",
            "NombreDeCliente": "Juan Pérez",
            "Producto": "Plan A",
            "Cantidad": 1,
            "Estatus": "pagado",
            "Total": 50
          },
          {
            "Id": 2,
            "FechaDeVenta": "2024-02-14",
            "NombreDeCliente": "María López",
            "Producto": "Clase de Yoga",
            "Cantidad": 1,
            "Estatus": "pagado",
            "Total": 10
          },
          {
            "Id": 3,
            "FechaDeVenta": "2024-02-13",
            "NombreDeCliente": "Carlos García",
            "Producto": "Mancuernas de 5kg",
            "Cantidad": 2,
            "Estatus": "pendiente",
            "Total": 30
          },
          {
            "Id": 4,
            "FechaDeVenta": "2024-02-12",
            "NombreDeCliente": "Ana Martínez",
            "Producto": "Clase de Pilates",
            "Cantidad": 1,
            "Estatus": "pagado",
            "Total": 15
          },
          {
            "Id": 5,
            "FechaDeVenta": "2024-02-11",
            "NombreDeCliente": "Pedro Rodríguez",
            "Producto": "Plan C",
            "Cantidad": 1,
            "Estatus": "pagado",
            "Total": 120
          },
          {
            "Id": 6,
            "FechaDeVenta": "2024-02-10",
            "NombreDeCliente": "Laura Sánchez",
            "Producto": "Clase de Zumba",
            "Cantidad": 1,
            "Estatus": "pendiente",
            "Total": 12
          },
          {
            "Id": 7,
            "FechaDeVenta": "2024-02-09",
            "NombreDeCliente": "Sofía Fernández",
            "Producto": "Plan D",
            "Cantidad": 1,
            "Estatus": "pagado",
            "Total": 200
          },
          {
            "Id": 8,
            "FechaDeVenta": "2024-02-08",
            "NombreDeCliente": "Diego Ruiz",
            "Producto": "Bicicleta estática",
            "Cantidad": 1,
            "Estatus": "pagado",
            "Total": 200
          },
          {
            "Id": 9,
            "FechaDeVenta": "2024-02-07",
            "NombreDeCliente": "Isabel Gómez",
            "Producto": "Plan E",
            "Cantidad": 1,
            "Estatus": "pendiente",
            "Total": 90
          },
          {
            "Id": 10,
            "FechaDeVenta": "2024-02-06",
            "NombreDeCliente": "Elena Castro",
            "Producto": "Cinta de correr",
            "Cantidad": 1,
            "Estatus": "pagado",
            "Total": 300
          },
          {
            "Id": 11,
            "FechaDeVenta": "2024-02-05",
            "NombreDeCliente": "Javier Hernández",
            "Producto": "Plan F",
            "Cantidad": 1,
            "Estatus": "pagado",
            "Total": 150
          },
          {
            "Id": 12,
            "FechaDeVenta": "2024-02-04",
            "NombreDeCliente": "Carmen Pérez",
            "Producto": "Bandas elásticas",
            "Cantidad": 1,
            "Estatus": "pendiente",
            "Total": 10
          },
          {
            "Id": 13,
            "FechaDeVenta": "2024-02-03",
            "NombreDeCliente": "Andrés Díaz",
            "Producto": "Plan G",
            "Cantidad": 1,
            "Estatus": "pagado",
            "Total": 180
          },
          {
            "Id": 14,
            "FechaDeVenta": "2024-02-02",
            "NombreDeCliente": "Marta Martínez",
            "Producto": "Guantes de Boxeo",
            "Cantidad": 1,
            "Estatus": "pendiente",
            "Total": 20
          },
          {
            "Id": 15,
            "FechaDeVenta": "2024-02-01",
            "NombreDeCliente": "Raúl López",
            "Producto": "Plan H",
            "Cantidad": 1,
            "Estatus": "pagado",
            "Total": 100
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
            "pagina": "ventas",
            "subpagina": "Venta"
          }
        }
      }
const TablaVenta = () => {
    return (
        <div className={styles.container}>
            <div className={styles.tablaContent}>
                <div className={styles.titulo}>
                    <div className={styles.searchContent}>
                        <h2>Todos las ventas</h2>
                        <BarraBusqueda placeholder="Buscar ventas ..."></BarraBusqueda>
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
            <Tablas datos={tablaVentas}></Tablas>
            <Paginacion></Paginacion>
        </div>
    )
}

export default TablaVenta