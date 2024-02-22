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
        "width": "20%"
      },
      {
        "icon": <TbReportMoney  />,
        "titulo": "CostoDeCompra",
        "width": "16%"
      },
      {
        "icon": <TbReportMoney  />,
        "titulo": "PrecioDeVenta",
        "width": "16%"
      },
      {
        "icon": <LuCalendar />,
        "titulo": "FechaDeIngreso",
        "width": "16%"
      },
      {
        "icon": <GrStatusGoodSmall />,
        "titulo": "Stock",
        "width": "10%"
      }
    ],
    "contenido": [
      {
        "Id": 1,
        "Nombre": "Camiseta deportiva",
        "CostoDeCompra": 15.50,
        "PrecioDeVenta": 29.99,
        "FechaDeIngreso": "2023-05-10",
        "Stock": 50
      },
      {
        "Id": 2,
        "Nombre": "Pantalones de yoga",
        "CostoDeCompra": 20.75,
        "PrecioDeVenta": 39.99,
        "FechaDeIngreso": "2023-06-15",
        "Stock": 30
      },
      {
        "Id": 3,
        "Nombre": "Zapatillas para correr",
        "CostoDeCompra": 45.00,
        "PrecioDeVenta": 89.99,
        "FechaDeIngreso": "2023-07-20",
        "Stock": 20
      },
      {
        "Id": 4,
        "Nombre": "Mancuernas de 5 libras",
        "CostoDeCompra": 10.00,
        "PrecioDeVenta": 19.99,
        "FechaDeIngreso": "2023-08-25",
        "Stock": 40
      },
      {
        "Id": 5,
        "Nombre": "Pelota de yoga",
        "CostoDeCompra": 8.50,
        "PrecioDeVenta": 16.99,
        "FechaDeIngreso": "2023-09-30",
        "Stock": 60
      },
      {
        "Id": 6,
        "Nombre": "Banda de resistencia",
        "CostoDeCompra": 5.25,
        "PrecioDeVenta": 9.99,
        "FechaDeIngreso": "2023-10-05",
        "Stock": 70
      },
      {
        "Id": 7,
        "Nombre": "Botella de agua deportiva",
        "CostoDeCompra": 3.00,
        "PrecioDeVenta": 5.99,
        "FechaDeIngreso": "2023-11-10",
        "Stock": 100
      },
      {
        "Id": 8,
        "Nombre": "Cuerda para saltar",
        "CostoDeCompra": 4.75,
        "PrecioDeVenta": 8.99,
        "FechaDeIngreso": "2023-12-15",
        "Stock": 80
      },
      {
        "Id": 9,
        "Nombre": "Toalla de microfibra",
        "CostoDeCompra": 7.50,
        "PrecioDeVenta": 14.99,
        "FechaDeIngreso": "2024-01-20",
        "Stock": 50
      },
      {
        "Id": 10,
        "Nombre": "Bolsa de gimnasio",
        "CostoDeCompra": 12.00,
        "PrecioDeVenta": 24.99,
        "FechaDeIngreso": "2024-02-25",
        "Stock": 40
      }
    ],
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

const Productos = () => {
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
                        <Link href={"/dashboard/productos/agregarProducto"}>
                            <button>
                                Agregar Producto
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <Tablas datos={tablaProductos}></Tablas>
            <Paginacion></Paginacion>
        </div>
    )
}

export default Productos