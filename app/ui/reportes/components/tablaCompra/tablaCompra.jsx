import styles from "./tablaCompra.module.css"
import BarraBusqueda from "@/app/ui/components/barraBusqueda/barraBusqueda"
import Link from "next/link"
import ItemProducto from "@/app/ui/productos/itemProducto/itemProducto"

import { LuCalendar } from "react-icons/lu";
import { MdStorage } from "react-icons/md";
import { TbGridScan } from "react-icons/tb";
import { FaBox } from "react-icons/fa";
import { GiPriceTag } from "react-icons/gi";
import { MdOutlineSell } from "react-icons/md";
import Paginacion from "@/app/ui/components/paginacion/paginacion";

const productos = [
    {
        "idProducto": 1,
        "nombre": "Camiseta deportiva",
        "costo": 15.50,
        "precioVenta": 29.99,
        "stock": 50,
        "fecha_ing": "2023-05-10"
      },
      {
        "idProducto": 2,
        "nombre": "Pantalones de yoga",
        "costo": 20.75,
        "precioVenta": 39.99,
        "stock": 30,
        "fecha_ing": "2023-06-15"
      },
      {
        "idProducto": 3,
        "nombre": "Zapatillas para correr",
        "costo": 45.00,
        "precioVenta": 89.99,
        "stock": 20,
        "fecha_ing": "2023-07-20"
      },
      {
        "idProducto": 4,
        "nombre": "Mancuernas de 5 libras",
        "costo": 10.00,
        "precioVenta": 19.99,
        "stock": 40,
        "fecha_ing": "2023-08-25"
      },
      {
        "idProducto": 5,
        "nombre": "Pelota de yoga",
        "costo": 8.50,
        "precioVenta": 16.99,
        "stock": 60,
        "fecha_ing": "2023-09-30"
      },
      {
        "idProducto": 6,
        "nombre": "Banda de resistencia",
        "costo": 5.25,
        "precioVenta": 9.99,
        "stock": 70,
        "fecha_ing": "2023-10-05"
      },
      {
        "idProducto": 7,
        "nombre": "Botella de agua deportiva",
        "costo": 3.00,
        "precioVenta": 5.99,
        "stock": 100,
        "fecha_ing": "2023-11-10"
      },
      {
        "idProducto": 8,
        "nombre": "Cuerda para saltar",
        "costo": 4.75,
        "precioVenta": 8.99,
        "stock": 80,
        "fecha_ing": "2023-12-15"
      },
      {
        "idProducto": 9,
        "nombre": "Toalla de microfibra",
        "costo": 7.50,
        "precioVenta": 14.99,
        "stock": 50,
        "fecha_ing": "2024-01-20"
      },
      {
        "idProducto": 10,
        "nombre": "Bolsa de gimnasio",
        "costo": 12.00,
        "precioVenta": 24.99,
        "stock": 40,
        "fecha_ing": "2024-02-25"
      },
]


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
                        <Link href={"/dashboard/productos/agregarProducto"}>
                            <button>
                                Agregar Producto
                            </button>
                        </Link>
                    </div>
                </div>
                <table className={styles.tabla}>
                    <thead>
                        <tr >
                            <td className={styles.idProducto}>
                                <div className={styles.tablaTitulo}>
                                    <TbGridScan  />
                                    <p>ID</p>
                                </div>
                            </td>
                            <td className={styles.nombre}>
                                <div className={styles.tablaTitulo}>
                                    <FaBox  />
                                    <p>Nombre</p>
                                </div>
                            </td>
                            <td className={styles.costo}>
                                <div className={styles.tablaTitulo}>
                                    <GiPriceTag   />
                                    <p>Costo de compra</p>
                                </div>
                            </td>
                            <td className={styles.precio}>
                                <div className={styles.tablaTitulo}>
                                    <MdOutlineSell  />
                                    <p>Precio de Venta</p>
                                </div>
                            </td>
                            <td className={styles.fecha}>
                                <div className={styles.tablaTitulo}>
                                    <LuCalendar />
                                    <p>Fecha de Ingreso</p>
                                </div>
                            </td>
                            <td className={styles.stock}>
                                <div className={styles.tablaTitulo}>
                                    <MdStorage   />
                                    <p>Stock</p>
                                </div>
                            </td>
                            <td className={styles.acciones}>Acciones</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            productos.map((item, index) => (
                                <ItemProducto par={index%2===0?true:false} datos={item} key={item.idProducto}></ItemProducto>  
                            ))
                        } 
                    </tbody>
                </table>
            </div>
            <Paginacion></Paginacion>
        </div>
    )
}

export default TablaCompra