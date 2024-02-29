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
import HeadTabla from "../../ui/components/tablas/headTabla/headTabla"
import { readCompra, readDatosCompra } from "../../apiAccions/comprasAccions";

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
        "pagina": "compras",
        "subpagina": "Compra"
      }
    }
  }



const Compras = async ({searchParams}) => {
    const dataParam = searchParams?.data || "";
    const dataCantidad = searchParams?.cant || 10;
    let page = searchParams?.page || 1;
    page < 1 ? page = 1 : false;
    let total;
    try{
      const {count, result} = await readCompra(dataParam, page, dataCantidad);
      const data = result.data;
      total = count;
      tablaCompras.contenido = []
      data.map((item) => {
        const fecha = new Date(item.FechaDeCompra)
        tablaCompras.contenido.push({          
          "Id": item.id,
          "FechaDeCompra": fecha.toLocaleDateString('es-ES', {day: '2-digit', month: '2-digit', year: 'numeric'}),
          "Producto": item.Producto.Nombre,
          "Costo": item.Producto.Costo,
          "Cantidad": item.Cantidad,
          "Estatus": item.Estatus,
          "Total": item.Total
          
        })
      })
    
    }catch(e){
      console.error("Error inesperado Cliente: ", e)
    }

    const {gastosTotales, CantCompras, CantPendientes} = await readDatosCompra();
    datos[0].cantidad = gastosTotales.toFixed(2)
    datos[1].cantidad = CantCompras
    datos[2].cantidad = CantPendientes


    return (
        <div className={styles.container}>
        <div className={styles.cards}>
            <Cards datos={datos[0]}></Cards>
            <Cards datos={datos[1]}></Cards>
            <Cards datos={datos[2]}></Cards>
        </div>
        <HeadTabla pagina={tablaCompras.acciones.ruta.pagina} subpagina={tablaCompras.acciones.ruta.subpagina}></HeadTabla>
        <Tablas datos={tablaCompras}></Tablas>
        <Paginacion total={total}></Paginacion>
    </div>
    )
}

export default Compras;