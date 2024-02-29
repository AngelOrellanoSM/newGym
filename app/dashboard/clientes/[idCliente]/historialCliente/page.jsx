import Paginacion from "@/app/ui/components/paginacion/paginacion"
import styles from "../../../../ui/clientes/historialCliente/historialCliente.module.css"
import Link from "next/link"
import BarraBusqueda from "@/app/ui/components/barraBusqueda/barraBusqueda";

import Tablas from "@/app/ui/components/tablas/tablas";
import { BiSolidStar } from "react-icons/bi";
import { LuCalendar } from "react-icons/lu";
import { GrStatusGoodSmall } from "react-icons/gr";
import { TbMoneybag } from "react-icons/tb";
import { MdOutlineDescription } from "react-icons/md";
import { FaSortAmountUpAlt } from "react-icons/fa";

import DataCliente from "@/app/ui/clientes/historialCliente/dataCliente/dataCliente"
import GraficoCliente from "@/app/ui/clientes/historialCliente/graficoCliente/graficoCliente";
import { fetchEspecificCliente, historialClienteData } from "@/app/apiAccions/clientesAccions";
import HeadTabla from "@/app/ui/components/tablas/headTabla/headTabla";
import { registroCompraMensual } from "@/app/apiAccions/generalAccions";


const tablaComprasDeCliente = 
{
    "columnas": [
      {
        "icon": <BiSolidStar />,
        "titulo": "Id",
        "width": "10%"
      },
      {
        "icon": <LuCalendar />,
        "titulo": "FechaDeCompra",
        "width": "20%"
      },
      {
        "icon": <MdOutlineDescription  />,
        "titulo": "Descripcion",
        "width": "20%"
      },
      {
        "icon": <FaSortAmountUpAlt  />,
        "titulo": "Cantidad",
        "width": "15%"
      },
      {
        "icon": <GrStatusGoodSmall />,
        "titulo": "Estatus",
        "width": "15%"
      },
      {
        "icon": <TbMoneybag  />,
        "titulo": "Total",
        "width": "15%"
      }
    ],
    "contenido": [
    ],
    "condicion": {
      "columna": "Estatus",
      "tipo": "cadena"
    },
    "acciones": {
      "visible": false,
      "delete": true,
      "edit": true,
      "historial": true,
      "ruta": {
        "pagina": "",
        "subpagina": ""
      }
    }
  }

const HistorialCliente = async ({params, searchParams}) => {
    
    const dataParam = searchParams?.data || "";
    const dataCantidad = searchParams?.cant || 10;
    let page = searchParams?.page || 1;
    page < 1 ? page = 1 : false;
    let total;

    try{
      const {count, result} = await historialClienteData(dataParam, page, dataCantidad, params.idCliente);
      total = count;
      tablaComprasDeCliente.contenido = []
      result.map((item) => {
        const fecha = new Date(item.FechaDeVenta)
        tablaComprasDeCliente.contenido.push({          
          "Id": item.id,
          "FechaDeCompra": fecha.toLocaleDateString('es-ES', {day: '2-digit', month: '2-digit', year: 'numeric'}),
          "Descripcion": item.Producto !== null ? item.Producto.Nombre: item.Plan.Nombre,
          "Cantidad": item.Cantidad,
          "Estatus": item.Estatus,
          "Total": parseFloat(item.Total).toFixed(2)
        })
      })
    
    }catch(e){
      console.error("Error inesperado Cliente: ", e)
    }

    const datosGrafico = await registroCompraMensual(params.idCliente)

    const resultCliente = await fetchEspecificCliente(params.idCliente)
    const {data} = JSON.parse(resultCliente)
    return (
        <div className={styles.container}>
            <DataCliente cliente={data[0]}></DataCliente>
            <GraficoCliente datos={datosGrafico}></GraficoCliente>
            

            <HeadTabla pagina={`Compras de ${data[0].Nombre}`} subpagina={""} boton={false}></HeadTabla>
          


            <Tablas datos={tablaComprasDeCliente}></Tablas>
            <Paginacion total={total}></Paginacion>
            <div className={styles.back}>
                <Link href={"/dashboard/clientes"}>
                    <button>
                        Regresar
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default HistorialCliente