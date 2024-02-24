import BarraBusqueda from "@/app/ui/components/barraBusqueda/barraBusqueda"
import styles from "../../ui/empleados/empleados.module.css"
import Link from "next/link"
import { MdPerson } from "react-icons/md";
import { BiSolidStar } from "react-icons/bi";
import { FaPhone } from "react-icons/fa6";
import { LuCalendar } from "react-icons/lu";
import { GrStatusGoodSmall } from "react-icons/gr";
import { PiAddressBookFill } from "react-icons/pi";
import Paginacion from "@/app/ui/components/paginacion/paginacion";
import Tablas from "@/app/ui/components/tablas/tablas";



const tablaEmpleados = 
  {
    "columnas": [
      {
        "icon": <BiSolidStar />,
        "titulo": "Id",
        "width": "5%"
      },
      {
        "icon": <MdPerson />,
        "titulo": "Nombre",
        "width": "18%"
      },
      {
        "icon": <FaPhone />,
        "titulo": "Celular",
        "width": "15%"
      },
      {
        "icon": <PiAddressBookFill />,
        "titulo": "Correo",
        "width": "18%"
      },
      {
        "icon": <LuCalendar />,
        "titulo": "FechaDeIngreso",
        "width": "15%"
      },
      {
        "icon": <GrStatusGoodSmall />,
        "titulo": "Rol",
        "width": "15%"
      }
    ],
    "contenido": [
      {
        "Id": 1,
        "Nombre": "Juan Pérez",
        "Celular": "555-123-4567",
        "Correo": "juan@example.com",
        "FechaDeIngreso": "2015-03-10",
        "Rol": "administrador"
      },
      {
        "Id": 2,
        "Nombre": "María Gómez",
        "Celular": "555-234-5678",
        "Correo": "maria@example.com",
        "FechaDeIngreso": "2018-07-22",
        "Rol": "entrenador"
      },
      {
        "Id": 3,
        "Nombre": "Pedro Rodríguez",
        "Celular": "555-345-6789",
        "Correo": "pedro@example.com",
        "FechaDeIngreso": "2016-09-05",
        "Rol": "entrenador"
      },
      {
        "Id": 4,
        "Nombre": "Laura Martínez",
        "Celular": "555-456-7890",
        "Correo": "laura@example.com",
        "FechaDeIngreso": "2014-11-18",
        "Rol": "administrador"
      },
      {
        "Id": 5,
        "Nombre": "Carlos Sánchez",
        "Celular": "555-567-8901",
        "Correo": "carlos@example.com",
        "FechaDeIngreso": "2017-02-08",
        "Rol": "entrenador"
      },
      {
        "Id": 6,
        "Nombre": "Ana López",
        "Celular": "555-678-9012",
        "Correo": "ana@example.com",
        "FechaDeIngreso": "2013-06-14",
        "Rol": "administrador"
      },
      {
        "Id": 7,
        "Nombre": "Luis Ramírez",
        "Celular": "555-789-0123",
        "Correo": "luis@example.com",
        "FechaDeIngreso": "2019-04-30",
        "Rol": "entrenador"
      },
      {
        "Id": 8,
        "Nombre": "Sofía Fernández",
        "Celular": "555-890-1234",
        "Correo": "sofia@example.com",
        "FechaDeIngreso": "2012-08-22",
        "Rol": "administrador"
      },
      {
        "Id": 9,
        "Nombre": "Elena Castro",
        "Celular": "555-901-2345",
        "Correo": "elena@example.com",
        "FechaDeIngreso": "2016-11-15",
        "Rol": "entrenador"
      },
      {
        "Id": 10,
        "Nombre": "Diego Herrera",
        "Celular": "555-012-3456",
        "Correo": "diego@example.com",
        "FechaDeIngreso": "2015-10-07",
        "Rol": "administrador"
      },
      {
        "Id": 11,
        "Nombre": "Ana María Pérez",
        "Celular": "555-123-4567",
        "Correo": "anamaria@example.com",
        "FechaDeIngreso": "2017-08-19",
        "Rol": "entrenador"
      },
      {
        "Id": 12,
        "Nombre": "David López",
        "Celular": "555-234-5678",
        "Correo": "david@example.com",
        "FechaDeIngreso": "2018-09-23",
        "Rol": "entrenador"
      },
      {
        "Id": 13,
        "Nombre": "Carmen Rodríguez",
        "Celular": "555-345-6789",
        "Correo": "carmen@example.com",
        "FechaDeIngreso": "2014-05-16",
        "Rol": "administrador"
      },
      {
        "Id": 14,
        "Nombre": "Javier Martínez",
        "Celular": "555-456-7890",
        "Correo": "javier@example.com",
        "FechaDeIngreso": "2019-12-10",
        "Rol": "entrenador"
      },
      {
        "Id": 15,
        "Nombre": "Raquel Sánchez",
        "Celular": "555-567-8901",
        "Correo": "raquel@example.com",
        "FechaDeIngreso": "2013-02-28",
        "Rol": "administrador"
      }
    ],
    "condicion": {
      "columna": "Rol",
      "tipo": "cadena"
    },
    "acciones": {
      "visible": true,
      "delete": true,
      "edit": true,
      "historial": false,
      "ruta": {
        "pagina": "empleados",
        "subpagina": "Empleado"
      }
    }
  }



const Empleados = async () => {
  

    return (
        <div className={styles.container}>
            <div className={styles.tablaContent}>
                <div className={styles.titulo}>
                    <div className={styles.searchContent}>
                        <h2>Todos los empleados</h2>
                        <BarraBusqueda placeholder="Buscar empleados ..."></BarraBusqueda>
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
                        <Link href={"/dashboard/empleados/agregarEmpleado"}>
                            <button>
                                Agregar Empleado
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            
            <Tablas datos={tablaEmpleados}></Tablas>
            
            <Paginacion></Paginacion>
        </div>
    )
}

export default Empleados