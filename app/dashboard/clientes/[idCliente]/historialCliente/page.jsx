"use client"

import Paginacion from "@/app/ui/components/paginacion/paginacion"
import styles from "../../../../ui/clientes/historialCliente/historialCliente.module.css"
import Link from "next/link"
import BarraBusqueda from "@/app/ui/components/barraBusqueda/barraBusqueda";
import { IoPersonSharp } from "react-icons/io5";
import { SlEnvolopeLetter } from "react-icons/sl";
import { RiMailSendLine } from "react-icons/ri";
import { TbGenderBigender } from "react-icons/tb";
import { IoCalendar } from "react-icons/io5";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Tablas from "@/app/ui/components/tablas/tablas";
import { BiSolidStar } from "react-icons/bi";
import { LuCalendar } from "react-icons/lu";
import { GrStatusGoodSmall } from "react-icons/gr";
import { TbMoneybag } from "react-icons/tb";
import { MdOutlineDescription } from "react-icons/md";
import { FaSortAmountUpAlt } from "react-icons/fa";


const data = [
    { "name": "ene", "cantidad": 4 },
  { "name": "feb", "cantidad": 6 },
  { "name": "mar", "cantidad": 9 },
  { "name": "abr", "cantidad": 8 },
  { "name": "may", "cantidad": 2 },
  { "name": "jun", "cantidad": 7 },
  { "name": "jul", "cantidad": 5 },
  { "name": "ago", "cantidad": 3 },
  { "name": "sep", "cantidad": 10 },
  { "name": "oct", "cantidad": 1 },
  { "name": "nov", "cantidad": 4 },
  { "name": "dic", "cantidad": 8 },
  ];


const clientes = [
    {
        "idCliente":1,
        "nombre": "Juan Perez",
        "celular": "555-123-4567",
        "correo": "juan@example.com",
        "fecha": "2024-02-10",
        "status": "activo",
        "fechaNac": "1985-03-15",
        "genero": "masculino",
        "dni": "12345678"
      },
      {
        "idCliente":2,
        "nombre": "Maria Rodriguez",
        "celular": "555-987-6543",
        "correo": "maria@example.com",
        "fecha": "2024-01-25",
        "status": "interesado",
        "fechaNac": "1990-07-20",
        "genero": "femenino",
        "dni": "23456789"
      },
      {
        "idCliente":3,
        "nombre": "Pedro Gomez",
        "celular": "555-456-7890",
        "correo": "pedro@example.com",
        "fecha": "2023-12-15",
        "status": "antiguo",
        "fechaNac": "1978-11-10",
        "genero": "masculino",
        "dni": "34567890"
      },
      {
        "idCliente":4,
        "nombre": "Laura Martinez",
        "celular": "555-789-0123",
        "correo": "laura@example.com",
        "fecha": "2024-02-05",
        "status": "activo",
        "fechaNac": "1992-05-25",
        "genero": "femenino",
        "dni": "45678901"
      },
      {
        "idCliente":5,
        "nombre": "Carlos Sanchez",
        "celular": "555-234-5678",
        "correo": "carlos@example.com",
        "fecha": "2023-11-20",
        "status": "interesado",
        "fechaNac": "1987-09-30",
        "genero": "masculino",
        "dni": "56789012"
      },
      {
        "idCliente":6,
        "nombre": "Ana Lopez",
        "celular": "555-678-9012",
        "correo": "ana@example.com",
        "fecha": "2024-01-10",
        "status": "activo",
        "fechaNac": "1980-12-12",
        "genero": "femenino",
        "dni": "67890123"
      },
      {
        "idCliente":7,
        "nombre": "Luis Ramirez",
        "celular": "555-345-6789",
        "correo": "luis@example.com",
        "fecha": "2023-10-05",
        "status": "antiguo",
        "fechaNac": "1975-08-05",
        "genero": "masculino",
        "dni": "78901234"
      },
      {
        "idCliente":8,
        "nombre": "Sofia Fernandez",
        "celular": "555-890-1234",
        "correo": "sofia@example.com",
        "fecha": "2024-02-01",
        "status": "interesado",
        "fechaNac": "1995-04-18",
        "genero": "femenino",
        "dni": "89012345"
      },
      {
        "idCliente":9,
        "nombre": "Elena Castro",
        "celular": "555-456-7890",
        "correo": "elena@example.com",
        "fecha": "2023-09-15",
        "status": "activo",
        "fechaNac": "1988-10-30",
        "genero": "femenino",
        "dni": "90123456"
      },
      {
        "idCliente":10,
        "nombre": "Diego Herrera",
        "celular": "555-012-3456",
        "correo": "diego@example.com",
        "fecha": "2023-12-20",
        "status": "interesado",
        "fechaNac": "1983-06-22",
        "genero": "masculino",
        "dni": "01234567"
      },
  ]

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
      {
        "Id": 1,
        "FechaDeCompra": "2024-02-10",
        "Descripcion": "plan gold",
        "Cantidad": 1,
        "Estatus": "pendiente",
        "Total": "S/99.99"
      },
      {
        "Id": 2,
        "FechaDeCompra": "2024-01-25",
        "Descripcion": "mancuernas",
        "Cantidad": 2,
        "Estatus": "pagado",
        "Total": "S/45.5"
      },
      {
        "Id": 3,
        "FechaDeCompra": "2023-12-15",
        "Descripcion": "plan basico",
        "Cantidad": 1,
        "Estatus": "pagado",
        "Total": "S/.29.99"
      },
      {
        "Id": 4,
        "FechaDeCompra": "2024-02-05",
        "Descripcion": "polos",
        "Cantidad": 3,
        "Estatus": "pagado",
        "Total": "S/.75.00"
      },
      {
        "Id": 5,
        "FechaDeCompra": "2023-11-20",
        "Descripcion": "cintas de correr",
        "Cantidad": 1,
        "Estatus": "pendiente",
        "Total": "S/.899.99"
      },
      {
        "Id": 6,
        "FechaDeCompra": "2024-01-10",
        "Descripcion": "plan black",
        "Cantidad": 1,
        "Estatus": "pagado",
        "Total": "S/.59.99"
      },
      {
        "Id": 7,
        "FechaDeCompra": "2023-10-05",
        "Descripcion": "botellas de agua",
        "Cantidad": 6,
        "Estatus": "pendiente",
        "Total": "S/.18.00"
      },
      {
        "Id": 8,
        "FechaDeCompra": "2024-02-01",
        "Descripcion": "pesas",
        "Cantidad": 2,
        "Estatus": "pagado",
        "Total": "S/.34.99"
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

const HistorialCliente = ({params}) => {
    
    const cliente = clientes.find((item) => {return item.idCliente.toString() === params.idCliente})

    return (
        <div className={styles.container}>
            <div className={styles.addClient}>
                <div className={styles.itemContainer}>
                    <div className={styles.tituloInfo}>
                        <h2>Informacion personal</h2>
                    </div>
                    <div className={styles.inputContainer}>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <IoPersonSharp />
                                <p>Nombre Completo</p>
                            </div>
                            <input placeholder={cliente.nombre} disabled></input>
                        </div>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <SlEnvolopeLetter />
                                <p>DNI</p>
                            </div>
                            <input placeholder={cliente.dni} disabled></input>
                        </div>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <TbGenderBigender  />
                                <p>Sexo</p>
                            </div>
                            <input placeholder={cliente.genero} disabled></input>
                        </div> 
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <IoCalendar   />
                                <p>Fecha de Nacimiento</p>
                            </div>
                            <input placeholder={cliente.fechaNac} disabled></input>
                        </div>                   
                    </div>
                </div>
                <div className={styles.itemContainer}>
                    <div className={styles.tituloInfo}>
                        <h2>Informacion de Contacto</h2>
                    </div>
                    <div className={styles.inputContainer}>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <RiMailSendLine  />
                                <p>Correo Electronico</p>
                            </div>
                            <input placeholder={cliente.correo} disabled></input>
                        </div>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <RiMailSendLine  />
                                <p>Celular</p>
                            </div>
                            <input placeholder={cliente.celular} disabled></input>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.graphContent}>
                <div className={styles.tituloGrafico}>
                    <h2>Registro de compras en el año de {cliente.nombre}</h2>
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
                            <Area type="monotone" dataKey="cantidad" stroke="#6afabe"  fillOpacity={1} fill="url(#colorGastos)"/>
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div className={styles.tablaContent}>
                <div className={styles.titulo}>
                    <div className={styles.searchContent}>
                        <h2>Todas las compras de {cliente.nombre}</h2>
                        <BarraBusqueda placeholder="Buscar compra ..."></BarraBusqueda>
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
            <Tablas datos={tablaComprasDeCliente}></Tablas>
            <Paginacion></Paginacion>
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