"use client"

import Paginacion from "@/app/ui/components/paginacion/paginacion"
import styles from "../../../../ui/clientes/historialCliente/historialCliente.module.css"
import Link from "next/link"
import BarraBusqueda from "@/app/ui/components/barraBusqueda/barraBusqueda";
import { MdSell } from "react-icons/md";
import { MdOutlineDescription } from "react-icons/md";
import { AiOutlineNumber } from "react-icons/ai";
import { IoPersonSharp } from "react-icons/io5";
import { SlEnvolopeLetter } from "react-icons/sl";
import { RiMailSendLine } from "react-icons/ri";
import { TbGenderBigender } from "react-icons/tb";
import { IoCalendar } from "react-icons/io5";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


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


const compras = [
    {
        "fecha_com": "2024-02-10",
        "descripcion": "plan gold",
        "cantidad": 1,
        "total": 99.99,
        "status": "pendiente"
      },
      {
        "fecha_com": "2024-01-25",
        "descripcion": "mancuernas",
        "cantidad": 2,
        "total": 45.50,
        "status": "pagado"
      },
      {
        "fecha_com": "2023-12-15",
        "descripcion": "plan basico",
        "cantidad": 1,
        "total": 29.99,
        "status": "pagado"
      },
      {
        "fecha_com": "2024-02-05",
        "descripcion": "polos",
        "cantidad": 3,
        "total": 75.00,
        "status": "pagado"
      },
      {
        "fecha_com": "2023-11-20",
        "descripcion": "cintas de correr",
        "cantidad": 1,
        "total": 899.99,
        "status": "pendiente"
      },
      {
        "fecha_com": "2024-01-10",
        "descripcion": "plan black",
        "cantidad": 1,
        "total": 59.99,
        "status": "pagado"
      },
      {
        "fecha_com": "2023-10-05",
        "descripcion": "botellas de agua",
        "cantidad": 6,
        "total": 18.00,
        "status": "pendiente"
      },
      {
        "fecha_com": "2024-02-01",
        "descripcion": "pesas",
        "cantidad": 2,
        "total": 34.99,
        "status": "pagado"
      },
]

const clientes = [
    {
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


const HistorialCliente = ({params}) => {
    
    const cliente = clientes.find((item) => {return item.dni === params.idCliente})

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
                        <Link href={""}>
                            <button>
                                Agregar Compra
                            </button>
                        </Link>
                    </div>
                </div>
                <table className={styles.tabla}>
                    <thead>
                        <tr >
                            <td className={styles.fecha}>
                                <div className={styles.tablaTitulo}>
                                    <MdSell  />
                                    <p>Fecha de Compra</p>
                                </div>
                            </td>
                            <td className={styles.desc}>
                                <div className={styles.tablaTitulo}>
                                    <MdOutlineDescription   />
                                    <p>Descripcion</p>
                                </div>
                            </td>
                            <td className={styles.cant}>
                                <div className={styles.tablaTitulo}>
                                    <AiOutlineNumber  />
                                    <p>Cantidad</p>
                                </div>
                            </td>
                            <td className={styles.status}>
                                <div className={styles.tablaTitulo}>
                                    <AiOutlineNumber  />
                                    <p>Status</p>
                                </div>
                            </td>
                            <td className={styles.total}>
                                <div className={styles.tablaTitulo}>
                                    <FaMoneyCheckDollar  />
                                    <p>Total</p>
                                </div>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            compras.map((compra, index) => (
                                 <tr key={index} className={`${styles.filaTablaContent} ${index%2===0?styles.fondoPar:styles.fondoInpar}`}>
                                    <td>{compra.fecha_com}</td>
                                    <td>{compra.descripcion}</td>
                                    <td>{compra.cantidad}</td>
                                    <td>
                                        <div className={styles.adaptador}>
                                            <div className={`${styles.itemStatus} ${styles[compra.status]}`}>
                                                <div className={styles.bolita}></div>
                                                <p>{compra.status}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>S/.{compra.total}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
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