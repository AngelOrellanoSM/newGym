import BarraBusqueda from "@/app/ui/components/barraBusqueda/barraBusqueda"
import styles from "@/app/ui/productos/productos.module.css"
import Link from "next/link"
import Tablas from "@/app/ui/components/tablas/tablas"
import Paginacion from "@/app/ui/components/paginacion/paginacion";
import { BiSolidStar } from "react-icons/bi";
import { LuCalendar } from "react-icons/lu";
import { GrStatusGoodSmall } from "react-icons/gr";
import { TbReportMoney } from "react-icons/tb";
import { PiArchiveBoxThin } from "react-icons/pi";
import { TbFileDescription } from "react-icons/tb";
import {readProducto} from "@/app/apiAccions/productosAccions"
import HeadTabla from "@/app/ui/components/tablas/headTabla/headTabla";


const tablaProductos = 
{
    "columnas": [
      {
        "icon": <BiSolidStar />,
        "titulo": "Id",
        "width": "8%"
      },
      {
        "icon": <PiArchiveBoxThin  />,
        "titulo": "Nombre",
        "width": "15%"
      },
      {
        "icon": <TbFileDescription   />,
        "titulo": "Descripcion",
        "width": "15%"
      },
      {
        "icon": <TbReportMoney  />,
        "titulo": "P. de Compra",
        "width": "12%"
      },
      {
        "icon": <TbReportMoney  />,
        "titulo": "P. de Venta",
        "width": "12%"
      },
      {
        "icon": <LuCalendar />,
        "titulo": "Fecha De Ingreso",
        "width": "16%"
      },
      {
        "icon": <GrStatusGoodSmall />,
        "titulo": "Stock",
        "width": "10%"
      }
    ],
    "contenido": [ ],
    "condicion": {
      "columna": "Stock",
      "tipo": "numerico"
    },
    "acciones": {
      "visible": true,
      "delete": true,
      "edit": true,
      "historial": true,
      "ruta": {
        "pagina": "productos",
        "subpagina": "Producto"
      }
    }
  }

const Productos = async ({searchParams}) => {
    const dataParam = searchParams?.data || "";
    const dataCantidad = searchParams?.cant || 10;
    let page = searchParams?.page || 1;
    page < 1 ? page = 1 : false;
    let total;
    try{   
      const {count, result} = await readProducto(dataParam, page, dataCantidad);
      const data = result.data;
      total = count;
      tablaProductos.contenido = []
      data.map((item) => {
        const fecha = new Date(item.FechaDeIngreso)
        tablaProductos.contenido.push({
          "Id": item.id,
          "Nombre": item.Nombre,
          "Descripcion": item.Descripcion,
          "P. de Compra": item.Costo,
          "P. de Venta": item.Venta,
          "Fecha De Ingreso": fecha.toLocaleDateString('es-ES', {day: '2-digit', month: '2-digit', year: 'numeric'}),
          "Stock": item.Stock,
        })
      })
    }catch(e){
      console.error("Error inesperado: ", e)
    }
    return (
        <div className={styles.container}>
            <HeadTabla pagina={tablaProductos.acciones.ruta.pagina} subpagina={tablaProductos.acciones.ruta.subpagina}></HeadTabla>
            <Tablas datos={tablaProductos}></Tablas>
            <Paginacion total={total}></Paginacion>
        </div>
    )
}

export default Productos