import styles from "../../ui/clientes/clientes.module.css"
import { MdPerson } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoPeopleSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { MdClass } from "react-icons/md";
import { FaBed } from "react-icons/fa";
import { LuCalendar } from "react-icons/lu";
import { GrStatusCriticalSmall } from "react-icons/gr";
import { PiAddressBookLight } from "react-icons/pi";

import Tablas from "@/app/ui/components/tablas/tablas";
import Cards from "@/app/ui/components/cards/cards";

import ItemTablaClientes from "../../ui/clientes/components/itemTablaCliente/itemTablaCliente"
import Paginacion from "../../ui/components/paginacion/paginacion"
import BarraBusqueda from "../../ui/components/barraBusqueda/barraBusqueda"
import Link from "next/link";

const datos = [
    {
        icon: <IoPeopleSharp />,
        titulo: "Total de Clientes",
        cantidad: 150,
        color: "blue"
    },
    {
        icon: <FaHeart />,
        titulo: "Activos",
        cantidad: 450,
        color: "green"
    },{
        icon: <MdClass />,
        titulo: "Interesados",
        cantidad: 180,
        color: "yellow"
    },{
        icon: <FaBed  />,
        titulo: "Antiguos",
        cantidad: 120,
        color: "black"
    },
]

const tablaClientes = 
{
    "columnas": [
      {
        "icon": <MdClass />,
        "titulo": "Id",
        "width": "8%"
      },
      {
        "icon": <MdClass />,
        "titulo": "Nombre",
        "width": "17%"
      },
      {
        "icon": <MdClass />,
        "titulo": "Celular",
        "width": "17%"
      },
      {
        "icon": <MdClass />,
        "titulo": "Correo",
        "width": "17%"
      },
      {
        "icon": <MdClass />,
        "titulo": "FechaDeIngreso",
        "width": "15%"
      },
      {
        "icon": <MdClass />,
        "titulo": "Estatus",
        "width": "12%"
      }
    ],
    "contenido": [
      {
        "Id": 1,
        "Nombre": "Juan Perez",
        "Celular": "555-123-4567",
        "Correo": "juan@example.com",
        "FechaDeIngreso": "2024-02-10",
        "Estatus": "activo"
      },
      {
        "Id": 2,
        "Nombre": "Maria Rodriguez",
        "Celular": "555-987-6543",
        "Correo": "maria@example.com",
        "FechaDeIngreso": "2024-01-25",
        "Estatus": "interesado"
      },
      {
        "Id": 3,
        "Nombre": "Pedro Gomez",
        "Celular": "555-456-7890",
        "Correo": "pedro@example.com",
        "FechaDeIngreso": "2023-12-15",
        "Estatus": "antiguo"
      },
      {
        "Id": 4,
        "Nombre": "Laura Martinez",
        "Celular": "555-789-0123",
        "Correo": "laura@example.com",
        "FechaDeIngreso": "2024-02-05",
        "Estatus": "activo"
      },
      {
        "Id": 5,
        "Nombre": "Carlos Sanchez",
        "Celular": "555-234-5678",
        "Correo": "carlos@example.com",
        "FechaDeIngreso": "2023-11-20",
        "Estatus": "interesado"
      },
      {
        "Id": 6,
        "Nombre": "Ana Lopez",
        "Celular": "555-678-9012",
        "Correo": "ana@example.com",
        "FechaDeIngreso": "2024-01-10",
        "Estatus": "activo"
      },
      {
        "Id": 7,
        "Nombre": "Luis Ramirez",
        "Celular": "555-345-6789",
        "Correo": "luis@example.com",
        "FechaDeIngreso": "2023-10-05",
        "Estatus": "antiguo"
      },
      {
        "Id": 8,
        "Nombre": "Sofia Fernandez",
        "Celular": "555-890-1234",
        "Correo": "sofia@example.com",
        "FechaDeIngreso": "2024-02-01",
        "Estatus": "interesado"
      },
      {
        "Id": 9,
        "Nombre": "Elena Castro",
        "Celular": "555-456-7890",
        "Correo": "elena@example.com",
        "FechaDeIngreso": "2023-09-15",
        "Estatus": "activo"
      },
      {
        "Id": 10,
        "Nombre": "Diego Herrera",
        "Celular": "555-012-3456",
        "Correo": "diego@example.com",
        "FechaDeIngreso": "2023-12-20",
        "Estatus": "interesado"
      }
    ],
    "condicion": {
      "columna": "Estatus",
      "tipo": "cadena"
    },
    "acciones": {
      "visible": true,
      "delete": true,
      "edit": true,
      "historial": true,
      "ruta": {
        "pagina": "clientes",
        "subpagina": "Cliente"
      }
    }
  }

const Clientes = () => {
    return (
        <div className={styles.container}>
            <div className={styles.cards}>
                <Cards datos={datos[0]}></Cards>
                <Cards datos={datos[1]}></Cards>
                <Cards datos={datos[2]}></Cards>
                <Cards datos={datos[3]}></Cards>
            </div>
            <div className={styles.tablaContent}>
                <div className={styles.titulo}>
                    <div className={styles.searchContent}>
                        <h2>Todos los clientes</h2>
                        <BarraBusqueda placeholder="Buscar clientes ..."></BarraBusqueda>
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
                        <Link href={"/dashboard/clientes/agregarClientes"}>
                            <button>
                                Agregar Cliente
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <Tablas datos={tablaClientes}></Tablas>
            <Paginacion></Paginacion>
        </div>
    )
}

export default Clientes