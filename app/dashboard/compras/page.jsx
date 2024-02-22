import styles from "../../ui/compras/compras.module.css"
import Cards from "@/app/ui/components/cards/cards"
import { IoPeopleSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { MdClass } from "react-icons/md";
import { BiSolidStar } from "react-icons/bi";
import { LuCalendar } from "react-icons/lu";
import { GrStatusGoodSmall } from "react-icons/gr";
import { TbMoneybag } from "react-icons/tb";
import { FaSortAmountUpAlt } from "react-icons/fa";
import { PiArchiveBoxThin } from "react-icons/pi";
import { BiMoneyWithdraw } from "react-icons/bi";


import Tablas from "../../ui/components/tablas/tablas"
import Paginacion from "../../ui/components/paginacion/paginacion"
import BarraBusqueda from "../../ui/components/barraBusqueda/barraBusqueda"
import Link from "next/link";

const datos = [
    {
        icon: <IoPeopleSharp />,
        titulo: "Gastos Totales",
        cantidad: "S/.1500.00",
        color: "blue"
    },
    {
        icon: <FaHeart />,
        titulo: "Cant. Compras",
        cantidad: 150,
        color: "green"
    },{
        icon: <MdClass />,
        titulo: "Cant. Pendientes",
        cantidad: 20,
        color: "yellow"
    },
]
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
      "visible": true,
      "delete": true,
      "edit": true,
      "historial": false,
      "ruta": {
        "pagina": "compras",
        "subpagina": "Compra"
      }
    }
  }



const Compras = () => {
    return (
        <div className={styles.container}>
        <div className={styles.cards}>
            <Cards datos={datos[0]}></Cards>
            <Cards datos={datos[1]}></Cards>
            <Cards datos={datos[2]}></Cards>
        </div>
        <div className={styles.tablaContent}>
            <div className={styles.titulo}>
                <div className={styles.searchContent}>
                    <h2>Todos las Compras</h2>
                    <BarraBusqueda placeholder="Buscar compras ..."></BarraBusqueda>
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
                    <Link href={"/dashboard/compras/agregarCompra"}>
                        <button>
                            Agregar Compra
                        </button>
                    </Link>
                </div>
            </div>
        </div>
        <Tablas datos={tablaCompras}></Tablas>
        <Paginacion></Paginacion>
    </div>
    )
}

export default Compras;