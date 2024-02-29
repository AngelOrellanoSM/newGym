import styles from "./reporteCompra.module.css"
import CardsTop from "../components/cardsTop/cardsTop"

import { productoMasVendido, productosMasReabastecidos, productosMenosStock } from "../../../apiAccions/generalAccions"

import { BiSolidStar } from "react-icons/bi";
import { LuCalendar } from "react-icons/lu";
import { GrStatusGoodSmall } from "react-icons/gr";
import { TbMoneybag } from "react-icons/tb";
import { FaSortAmountUpAlt } from "react-icons/fa";
import { PiArchiveBoxThin } from "react-icons/pi";
import { BiMoneyWithdraw } from "react-icons/bi";

import Tablas from "@/app/ui/components/tablas/tablas"
import Paginacion from "@/app/ui/components/paginacion/paginacion"
import HeadTabla from "@/app/ui/components/tablas/headTabla/headTabla"
import {readCompra} from "@/app/apiAccions/comprasAccions"

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

const datosCards = 
    [
        {
            "titulo": "Productos con Menos Stock",
            "tiempo": "",
            "contenido": [
            ]
        },
        {
            "titulo": "Productos con más reabastecimiento",
            "tiempo": "mensual",
            "contenido": [
            ]
        },
        {
            "titulo": "Productos Más Vendidos",
            "tiempo": "mensual",
            "contenido": [
            ]
        }
    ]

const ReporteCompra = async ({dataParam, dataCantidad, page}) => {
    const result1 = await productosMenosStock()
    datosCards[0].contenido = []
    result1.map((item) => {
        datosCards[0].contenido.push({
            "nombre": item.Nombre,
            "cantidad": item.Stock
        })
    })

    const result2 = await productosMasReabastecidos()
    datosCards[1].contenido = []
    result2.map((item) => {
        datosCards[1].contenido.push({
            "cantidad": item.cantidad,
            "nombre": item.Nombre
        })
    })

    const result3 = await productoMasVendido()
    datosCards[2].contenido = []
    result3.map((item) => {
        datosCards[2].contenido.push({
            "cantidad": item.cantidad,
            "nombre": item.Nombre
        })
    })


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

    return (
        <div className={`${styles.container} InformeCompraDoc`}>
            <div className={styles.mainCard}>
                <CardsTop datos={datosCards[0]}></CardsTop>
                <div className={styles.secondCards}>
                    <CardsTop datos={datosCards[1]}></CardsTop>
                    <CardsTop datos={datosCards[2]}></CardsTop>
                </div>
            </div>

        
            <HeadTabla pagina={tablaCompras.acciones.ruta.pagina} subpagina={tablaCompras.acciones.ruta.subpagina} boton={false}></HeadTabla>
            <Tablas datos={tablaCompras}></Tablas>
            <Paginacion total={total}></Paginacion>
        </div>
    )
}

export default ReporteCompra