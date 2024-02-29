import styles from "./reporteVenta.module.css"
import CardsTop from "@/app/ui/reportes/components/cardsTop/cardsTop"
import GraficoClientes from "@/app/ui/reportes/components/graficoClientes/graficoClientes"
import InformeVentas from "../../dashboard/informeVentas/informeVentas"
import { claseMasVendida, fetchInformeData, planMasVendido, productoMasVendido } from "@/app/apiAccions/generalAccions"

import Tablas from "@/app/ui/components/tablas/tablas"
import Paginacion from "@/app/ui/components/paginacion/paginacion"
import HeadTabla from "@/app/ui/components/tablas/headTabla/headTabla";
import {readVenta} from "@/app/apiAccions/ventasAccions"


import { IoMdPerson } from "react-icons/io";
import { PiArchiveBoxThin } from "react-icons/pi";
import { BiSolidStar } from "react-icons/bi";
import { LuCalendar } from "react-icons/lu";
import { GrStatusGoodSmall } from "react-icons/gr";
import { TbMoneybag } from "react-icons/tb";
import { FaSortAmountUpAlt } from "react-icons/fa";
import { useSearchParams } from "next/navigation"

const datosCards = 
    [
        {
            "titulo": "Productos más Vendidos",
            "tiempo": "mensual",
            "contenido":
            [
                
            ]
        },
        {
            "titulo": "Clases más Vendidas",
            "tiempo": "mensual",
            "contenido":
            [
                
            ]
        },
        {
            "titulo": "Planes más Vendidos",
            "tiempo": "mensual",
            "contenido":
            [
               
            ]
        }
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
    

const ReporteVenta = async ({dataParam, dataCantidad, page}) => {
    
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
    const dataInforme = await fetchInformeData()

    const topProductos = await productoMasVendido()
    datosCards[0].contenido = []
    topProductos.map((item) => {
        datosCards[0].contenido.push({
            "nombre": item.Nombre,
            "cantidad": item.cantidad
        }) 
    })

    const topClases = await claseMasVendida()
    datosCards[1].contenido = []
    topClases.map((item) => {
        datosCards[1].contenido.push({
            "nombre": item.Nombre,
            "cantidad": item.total
        }) 
    })

    const topPlanes = await planMasVendido()
    datosCards[2].contenido = []
    topPlanes.map((item) => {
        datosCards[2].contenido.push({
            "nombre": item.Nombre,
            "cantidad": item.total
        }) 
    })
    return (
        <div className={styles.container}>
            <div className={styles.cardTopContent}>
                <CardsTop datos={datosCards[0]}></CardsTop>
                <CardsTop datos={datosCards[1]}></CardsTop>
                <CardsTop datos={datosCards[2]}></CardsTop>
            </div>

            <div className={styles.graficosContent}>
                <InformeVentas dataInforme={dataInforme}></InformeVentas>
                <GraficoClientes></GraficoClientes>
            </div>

            
            <HeadTabla pagina={tablaVentas.acciones.ruta.pagina} subpagina={tablaVentas.acciones.ruta.subpagina} boton={false}></HeadTabla>
            <Tablas datos={tablaVentas}></Tablas>
            <Paginacion total={total}></Paginacion>
            
        </div>
    )
}

export default ReporteVenta