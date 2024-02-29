import styles from "../../ui/ventas/ventas.module.css"
import Cards from "@/app/ui/components/cards/cards"
import { IoPeopleSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { MdClass } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { PiArchiveBoxThin } from "react-icons/pi";
import { BiSolidStar } from "react-icons/bi";
import { LuCalendar } from "react-icons/lu";
import { GrStatusGoodSmall } from "react-icons/gr";
import { TbMoneybag } from "react-icons/tb";
import { FaSortAmountUpAlt } from "react-icons/fa";

import Tablas from "../../ui/components/tablas/tablas"
import Paginacion from "../../ui/components/paginacion/paginacion"
import HeadTabla from "@/app/ui/components/tablas/headTabla/headTabla";
import {readDatos, readVenta} from "@/app/apiAccions/ventasAccions"
const datos = [
    {
        icon: <IoPeopleSharp />,
        titulo: "Ingresos Total",
        cantidad: "S/.1500.00",
        color: "blue"
    },
    {
        icon: <FaHeart />,
        titulo: "Cant. Ventas",
        cantidad: 150,
        color: "green"
    },{
        icon: <MdClass />,
        titulo: "Cant. Pendientes",
        cantidad: 20,
        color: "yellow"
    },
]

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
    "contenido": [],
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
        "pagina": "ventas",
        "subpagina": "Venta"
      }
    }
  }

const Ventas = async ({searchParams}) => {

    const dataParam = searchParams?.data || "";
    const dataCantidad = searchParams?.cant || 10;
    let page = searchParams?.page || 1;
    page < 1 ? page = 1 : false;
    let total;
    try{
      const {count, result} = await readVenta(dataParam, page, dataCantidad);
      const data = result.data;
      total = count;
      tablaVentas.contenido = []
      data.map((item) => {
        const fecha = new Date(item.FechaDeVenta)
        tablaVentas.contenido.push({
          "Id": item.id,
          "FechaDeVenta": fecha.toLocaleDateString('es-ES', {day: '2-digit', month: '2-digit', year: 'numeric'}),
          "NombreDeCliente": item.Cliente.Nombre,
          "Producto": item.Producto!==null?item.Producto.Nombre:item.Plan.Nombre,
          "Cantidad": item.Cantidad,
          "Estatus": item.Estatus,
          "Total": item.Total.toFixed(2)
        })
      })
  
      
    }catch(e){
      console.error("Error inesperado Cliente: ", e)
    }

    const {ingresoTotales, CantVentas, CantPendientes} = await readDatos();
    datos[0].cantidad = ingresoTotales.toFixed(2)
    datos[1].cantidad = CantVentas
    datos[2].cantidad = CantPendientes

    return (
        <div className={styles.container}>
            <div className={styles.cards}>
                <Cards datos={datos[0]}></Cards>
                <Cards datos={datos[1]}></Cards>
                <Cards datos={datos[2]}></Cards>
            </div>
            <HeadTabla pagina={tablaVentas.acciones.ruta.pagina} subpagina={tablaVentas.acciones.ruta.subpagina}></HeadTabla>
            <Tablas datos={tablaVentas}></Tablas>
            <Paginacion total={total}></Paginacion>
        </div>
    )
}

export default Ventas