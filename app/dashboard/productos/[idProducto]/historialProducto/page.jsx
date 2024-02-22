"use client"

import styles from "../../../../ui/productos/historialProducto/historialProducto.module.css"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { IoPersonSharp } from "react-icons/io5";
import { SlEnvolopeLetter } from "react-icons/sl";
import { RiMailSendLine } from "react-icons/ri";
import BarraBusqueda from "@/app/ui/components/barraBusqueda/barraBusqueda";
import { LuCalendar } from "react-icons/lu";
import { IoPerson } from "react-icons/io5";
import { BiSolidStar } from "react-icons/bi";
import { GrStatusGoodSmall } from "react-icons/gr";
import { TbMoneybag } from "react-icons/tb";
import { FaSortAmountUpAlt } from "react-icons/fa";

import Paginacion from "@/app/ui/components/paginacion/paginacion";
import Tablas from "@/app/ui/components/tablas/tablas";

const productos = [
    {
        "idProducto": 1,
        "nombre": "Camiseta deportiva",
        "descripcion": "Camiseta transpirable de secado rápido para actividades deportivas.",
        "costo": 15.50,
        "precioVenta": 29.99,
        "stock": 50,
        "fecha_ing": "2023-05-10"
      },
      {
        "idProducto": 2,
        "nombre": "Pantalones de yoga",
        "descripcion": "Pantalones elásticos y cómodos ideales para la práctica de yoga.",
        "costo": 20.75,
        "precioVenta": 39.99,
        "stock": 30,
        "fecha_ing": "2023-06-15"
      },
      {
        "idProducto": 3,
        "nombre": "Zapatillas para correr",
        "descripcion": "Zapatillas ligeras con amortiguación para corredores.",
        "costo": 45.00,
        "precioVenta": 89.99,
        "stock": 20,
        "fecha_ing": "2023-07-20"
      },
      {
        "idProducto": 4,
        "nombre": "Mancuernas de 5 libras",
        "descripcion": "Par de mancuernas recubiertas de vinilo de 5 libras cada una.",
        "costo": 10.00,
        "precioVenta": 19.99,
        "stock": 40,
        "fecha_ing": "2023-08-25"
      },
      {
        "idProducto": 5,
        "nombre": "Pelota de yoga",
        "descripcion": "Pelota de yoga resistente para ejercicios de estabilidad y equilibrio.",
        "costo": 8.50,
        "precioVenta": 16.99,
        "stock": 60,
        "fecha_ing": "2023-09-30"
      },
      {
        "idProducto": 6,
        "nombre": "Banda de resistencia",
        "descripcion": "Banda elástica de resistencia para entrenamiento de fuerza y flexibilidad.",
        "costo": 5.25,
        "precioVenta": 9.99,
        "stock": 70,
        "fecha_ing": "2023-10-05"
      },
      {
        "idProducto": 7,
        "nombre": "Botella de agua deportiva",
        "descripcion": "Botella de plástico sin BPA con boquilla de beber a prueba de fugas.",
        "costo": 3.00,
        "precioVenta": 5.99,
        "stock": 100,
        "fecha_ing": "2023-11-10"
      },
      {
        "idProducto": 8,
        "nombre": "Cuerda para saltar",
        "descripcion": "Cuerda de saltar ajustable con mangos ergonómicos de espuma.",
        "costo": 4.75,
        "precioVenta": 8.99,
        "stock": 80,
        "fecha_ing": "2023-12-15"
      },
      {
        "idProducto": 9,
        "nombre": "Toalla de microfibra",
        "descripcion": "Toalla de microfibra suave y absorbente, ideal para el gimnasio o la playa.",
        "costo": 7.50,
        "precioVenta": 14.99,
        "stock": 50,
        "fecha_ing": "2024-01-20"
      },
      {
        "idProducto": 10,
        "nombre": "Bolsa de gimnasio",
        "descripcion": "Bolsa espaciosa con múltiples compartimentos para llevar equipo de entrenamiento.",
        "costo": 12.00,
        "precioVenta": 24.99,
        "stock": 40,
        "fecha_ing": "2024-02-25"
      },
]


const data = [
    { name: 'ene', ventas: 0, compras: 1500 },
    { name: 'feb', ventas: 2800, compras: 800 },
    { name: 'mar', ventas: 4200, compras: 1200 },
    { name: 'abr', ventas: 1800, compras: 2500 },
    { name: 'may', ventas: 3500, compras: 1700 },
    { name: 'jun', ventas: 2000, compras: 2800 },
    { name: 'jul', ventas: 4800, compras: 600 },
    { name: 'ago', ventas: 3300, compras: 2000 },
    { name: 'sep', ventas: 2700, compras: 1000 },
    { name: 'oct', ventas: 1500, compras: 3500 },
    { name: 'nov', ventas: 4000, compras: 1800 },
    { name: 'dic', ventas: 2100, compras: 2300 },
  ];

const ventas = [
    {
        "idVenta": 1,
        "nombreCliente": "Juan Pérez",
        "fechaVenta": "2024-02-10",
        "cantidad": 3,
        "status": "pendiente",
        "total": 149.97
      },
      {
        "idVenta": 2,
        "nombreCliente": "María Gómez",
        "fechaVenta": "2024-01-25",
        "cantidad": 2,
        "status": "pagado",
        "total": 99.98
      },
      {
        "idVenta": 3,
        "nombreCliente": "Pedro Rodríguez",
        "fechaVenta": "2023-12-15",
        "cantidad": 1,
        "status": "pendiente",
        "total": 49.99
      },
      {
        "idVenta": 4,
        "nombreCliente": "Laura Martínez",
        "fechaVenta": "2024-02-05",
        "cantidad": 5,
        "status": "pendiente",
        "total": 249.95
      },
      {
        "idVenta": 5,
        "nombreCliente": "Carlos Sánchez",
        "fechaVenta": "2023-11-20",
        "cantidad": 1,
        "status": "pagado",
        "total": 59.99
      },
]

const compras =[
    {
        "idCompra": 1,
        "fechaCompra": "2024-02-10",
        "cantidad": 3,
        "status": "pendiente",
        "total": 149.97
      },
      {
        "idCompra": 2,
        "fechaCompra": "2024-01-25",
        "cantidad": 2,
        "status": "recibido",
        "total": 99.98
      },
      {
        "idCompra": 3,
        "fechaCompra": "2023-12-15",
        "cantidad": 1,
        "status": "pendiente",
        "total": 49.99
      },
      {
        "idCompra": 4,
        "fechaCompra": "2024-02-05",
        "cantidad": 5,
        "status": "pendiente",
        "total": 249.95
      },
      {
        "idCompra": 5,
        "fechaCompra": "2023-11-20",
        "cantidad": 1,
        "status": "recibido",
        "total": 59.99
      },
]

const tablaVentas =
{
    "columnas": [
      {
        "icon": <BiSolidStar />,
        "titulo": "ID",
        "width": "10%"
      },
      {
        "icon": <IoPerson  />,
        "titulo": "NombreDelCliente",
        "width": "20%"
      },
      {
        "icon": <LuCalendar />,
        "titulo": "FechaVenta",
        "width": "18%"
      },
      {
        "icon": <FaSortAmountUpAlt />,
        "titulo": "Cantidad",
        "width": "18%"
      },
      {
        "icon": <GrStatusGoodSmall />,
        "titulo": "Estatus",
        "width": "18%"
      },
      {
        "icon": <TbMoneybag />,
        "titulo": "Total",
        "width": "18%"
      }
    ],
    "contenido": [
      {
        "ID": 1,
        "NombreDelCliente": "Juan Pérez",
        "FechaVenta": "2024-02-10",
        "Cantidad": 3,
        "Estatus": "pendiente",
        "Total": 149.97
      },
      {
        "ID": 2,
        "NombreDelCliente": "María Gómez",
        "FechaVenta": "2024-01-25",
        "Cantidad": 2,
        "Estatus": "pagado",
        "Total": 99.98
      },
      {
        "ID": 3,
        "NombreDelCliente": "Pedro Rodríguez",
        "FechaVenta": "2023-12-15",
        "Cantidad": 1,
        "Estatus": "pendiente",
        "Total": 49.99
      },
      {
        "ID": 4,
        "NombreDelCliente": "Laura Martínez",
        "FechaVenta": "2024-02-05",
        "Cantidad": 5,
        "Estatus": "pendiente",
        "Total": 249.95
      },
      {
        "ID": 5,
        "NombreDelCliente": "Carlos Sánchez",
        "FechaVenta": "2023-11-20",
        "Cantidad": 1,
        "Estatus": "pagado",
        "Total": 59.99
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
      "historial": true,
      "ruta": {
        "pagina": "",
        "subpagina": ""
      }
    }
  }

const tablaCompras = 
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
        "width": "25%"
      },
      {
        "icon": <FaSortAmountUpAlt />,
        "titulo": "Cantidad",
        "width": "25%"
      },
      {
        "icon": <GrStatusGoodSmall />,
        "titulo": "Estatus",
        "width": "25%"
      },
      {
        "icon": <TbMoneybag />,
        "titulo": "Total",
        "width": "15%"
      }
    ],
    "contenido": [
      {
        "Id": 1,
        "FechaDeCompra": "2024-02-10",
        "Cantidad": 3,
        "Estatus": "pendiente",
        "Total": 149.97
      },
      {
        "Id": 2,
        "FechaDeCompra": "2024-01-25",
        "Cantidad": 2,
        "Estatus": "recibido",
        "Total": 99.98
      },
      {
        "Id": 3,
        "FechaDeCompra": "2023-12-15",
        "Cantidad": 1,
        "Estatus": "pendiente",
        "Total": 49.99
      },
      {
        "Id": 4,
        "FechaDeCompra": "2024-02-05",
        "Cantidad": 5,
        "Estatus": "pendiente",
        "Total": 249.95
      },
      {
        "Id": 5,
        "FechaDeCompra": "2023-11-20",
        "Cantidad": 1,
        "Estatus": "recibido",
        "Total": 59.99
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
      "historial": true,
      "ruta": {
        "pagina": "",
        "subpagina": ""
      }
    }
  }

const HistorialProducto = ({params}) => {
    const producto_id = params.idProducto;
    const producto = productos.find((item)=>{return item.idProducto.toString() === producto_id});

    return (
        <div className={styles.container}>
            
            <div className={styles.addClient}>
                <div className={styles.itemContainer}>
                    <div className={styles.titulo}>
                        <h2>Informacion del Producto</h2>
                    </div>
                    <div className={styles.inputContainer}>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <IoPersonSharp />
                                <p>Nombre del Producto</p>
                            </div>
                            <input placeholder={producto.nombre} disabled></input>
                        </div>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <SlEnvolopeLetter />
                                <p>Stock</p>
                            </div>
                            <input placeholder={producto.stock} disabled></input>
                        </div>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <SlEnvolopeLetter />
                                <p>Descripcion</p>
                            </div>
                            <textarea placeholder={producto.descripcion} disabled></textarea>
                        </div>     
                    </div>
                </div>
                <div className={styles.itemContainer}>
                    <div className={styles.titulo}>
                        <h2>Informacion Contable</h2>
                    </div>
                    <div className={styles.inputContainer}>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <RiMailSendLine  />
                                <p>Costo de compra ( S/. )</p>
                            </div>
                            <input type="number" placeholder={producto.costo} disabled></input>
                        </div>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <RiMailSendLine  />
                                <p>Precio de Venta ( S/. )</p>
                            </div>
                            <input type="number" placeholder={producto.precioVenta}disabled></input>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className={styles.containerGraph}>
                <h2>Grafico compras VS ventas del producto {producto.nombre}</h2>
                <div className={styles.subTitulo}>
                    <p className={styles.cantidad}>Utilidades S/.140.00</p>
                    <div className={styles.leyenda}>
                        <div className={styles.contLeyenda}>
                            <div className={styles.bolita1}></div>
                            <p>Ventas</p>
                        </div>    
                        <div className={styles.contLeyenda}>
                            <div className={styles.bolita2}></div>
                            <p>Compras</p>
                        </div>
                        <div className={styles.temporal}>
                            <select>
                                <option value="mensual">Ultimo Mes</option>
                                <option value="anual">Ultimo Año</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className={styles.graph}>
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                        width={500}
                        height={400}
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                        >
                            <defs>
                                <linearGradient id="colorIngreso" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#2c375cb0" stopOpacity={0.5}/>
                                <stop offset="95%" stopColor="#2c375cb0" stopOpacity={0}/>
                                </linearGradient>
                                <linearGradient id="colorGastos" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#073ef079" stopOpacity={0.5}/>
                                <stop offset="95%" stopColor="#073ef079" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="name" axisLine={false} tickLine={false} padding={{ left: 20 }} tick={{fill:"#fff", fontSize:"0.825rem", fontWeight:"300"}}/>
                            <YAxis tick={{fill:"#fff", fontSize:"0.825rem", fontWeight:"300"}} axisLine={false} tickLine={false}/>
                            <Tooltip contentStyle={{backgroundColor:"var(--bgSoft)", border:"none"}}/>
                            <Area type="monotone" dataKey="ventas" stroke="#6afabe"  fillOpacity={1} fill="url(#colorGastos)"/>
                            <Area type="monotone" dataKey="compras" stroke="#54fcf3" fillOpacity={1} fill="url(#colorIngreso)"/>
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className={styles.tablaContent}>
                <div className={styles.tituloT}>
                    <div className={styles.searchContent}>
                        <h2>Todas las ventas del producto {producto.nombre}</h2>
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
            <div className={styles.tablaContent}>
                <div className={styles.tituloT}>
                    <div className={styles.searchContent}>
                        <h2>Todas las compras del producto {producto.nombre}</h2>
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
                    </div>
                </div>
            </div>
            <Tablas datos={tablaCompras}></Tablas>
            <Paginacion></Paginacion>
        </div>
    )
}

export default HistorialProducto