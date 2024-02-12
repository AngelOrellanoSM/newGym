import BarraBusqueda from "@/app/ui/components/barraBusqueda/barraBusqueda"
import styles from "../../ui/empleados/empleados.module.css"
import Link from "next/link"
import { MdPerson } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { LuCalendar } from "react-icons/lu";
import { GrStatusCriticalSmall } from "react-icons/gr";
import { PiAddressBookFill } from "react-icons/pi";
import ItemEmpleado from "@/app/ui/empleados/itemEmpleado/itemEmpleado"
import Paginacion from "@/app/ui/components/paginacion/paginacion";

const empleados = [
    {
        "idEmpleado": 1,
        "dni": "12345678A",
        "nombre": "Juan Pérez",
        "genero": "masculino",
        "fecha_nac": "1980-05-15",
        "correo": "juan@example.com",
        "telefono": "555-123-4567",
        "rol": "administrador",
        "fecha_ing": "2015-03-10",
        "contraseña": "contraseñaAdmin123"
      },
      {
        "idEmpleado": 2,
        "dni": "23456789B",
        "nombre": "María Gómez",
        "genero": "femenino",
        "fecha_nac": "1985-10-20",
        "correo": "maria@example.com",
        "telefono": "555-234-5678",
        "rol": "entrenador",
        "fecha_ing": "2018-07-22"
      },
      {
        "idEmpleado": 3,
        "dni": "34567890C",
        "nombre": "Pedro Rodríguez",
        "genero": "masculino",
        "fecha_nac": "1978-08-12",
        "correo": "pedro@example.com",
        "telefono": "555-345-6789",
        "rol": "entrenador",
        "fecha_ing": "2016-09-05"
      },
      {
        "idEmpleado": 4,
        "dni": "45678901D",
        "nombre": "Laura Martínez",
        "genero": "femenino",
        "fecha_nac": "1990-04-25",
        "correo": "laura@example.com",
        "telefono": "555-456-7890",
        "rol": "administrador",
        "fecha_ing": "2014-11-18",
        "contraseña": "contraseñaAdmin456"
      },
      {
        "idEmpleado": 5,
        "dni": "56789012E",
        "nombre": "Carlos Sánchez",
        "genero": "masculino",
        "fecha_nac": "1982-12-30",
        "correo": "carlos@example.com",
        "telefono": "555-567-8901",
        "rol": "entrenador",
        "fecha_ing": "2017-02-08"
      },
      {
        "idEmpleado": 6,
        "dni": "67890123F",
        "nombre": "Ana López",
        "genero": "femenino",
        "fecha_nac": "1987-07-18",
        "correo": "ana@example.com",
        "telefono": "555-678-9012",
        "rol": "administrador",
        "fecha_ing": "2013-06-14",
        "contraseña": "contraseñaAdmin789"
      },
      {
        "idEmpleado": 7,
        "dni": "78901234G",
        "nombre": "Luis Ramírez",
        "genero": "masculino",
        "fecha_nac": "1975-09-05",
        "correo": "luis@example.com",
        "telefono": "555-789-0123",
        "rol": "entrenador",
        "fecha_ing": "2019-04-30"
      },
      {
        "idEmpleado": 8,
        "dni": "89012345H",
        "nombre": "Sofía Fernández",
        "genero": "femenino",
        "fecha_nac": "1993-01-10",
        "correo": "sofia@example.com",
        "telefono": "555-890-1234",
        "rol": "administrador",
        "fecha_ing": "2012-08-22",
        "contraseña": "contraseñaAdmin101"
      },
      {
        "idEmpleado": 9,
        "dni": "90123456I",
        "nombre": "Elena Castro",
        "genero": "femenino",
        "fecha_nac": "1988-06-22",
        "correo": "elena@example.com",
        "telefono": "555-901-2345",
        "rol": "entrenador",
        "fecha_ing": "2016-11-15"
      },
      {
        "idEmpleado": 10,
        "dni": "01234567J",
        "nombre": "Diego Herrera",
        "genero": "masculino",
        "fecha_nac": "1984-03-12",
        "correo": "diego@example.com",
        "telefono": "555-012-3456",
        "rol": "administrador",
        "fecha_ing": "2015-10-07",
        "contraseña": "contraseñaAdmin2022"
      },
      {
        "idEmpleado": 11,
        "dni": "12345678K",
        "nombre": "Ana María Pérez",
        "genero": "femenino",
        "fecha_nac": "1989-11-08",
        "correo": "anamaria@example.com",
        "telefono": "555-123-4567",
        "rol": "entrenador",
        "fecha_ing": "2017-08-19"
      },
      {
        "idEmpleado": 12,
        "dni": "23456789L",
        "nombre": "David López",
        "genero": "masculino",
        "fecha_nac": "1986-02-28",
        "correo": "david@example.com",
        "telefono": "555-234-5678",
        "rol": "entrenador",
        "fecha_ing": "2018-09-23"
      },
      {
        "idEmpleado": 13,
        "dni": "34567890M",
        "nombre": "Carmen Rodríguez",
        "genero": "femenino",
        "fecha_nac": "1992-07-15",
        "correo": "carmen@example.com",
        "telefono": "555-345-6789",
        "rol": "administrador",
        "fecha_ing": "2014-05-16",
        "contraseña": "contraseñaAdmin303"
      },
      {
        "idEmpleado": 14,
        "dni": "45678901N",
        "nombre": "Javier Martínez",
        "genero": "masculino",
        "fecha_nac": "1983-12-20",
        "correo": "javier@example.com",
        "telefono": "555-456-7890",
        "rol": "entrenador",
        "fecha_ing": "2019-12-10"
      },
      {
        "idEmpleado": 15,
        "dni": "56789012O",
        "nombre": "Raquel Sánchez",
        "genero": "femenino",
        "fecha_nac": "1990-05-18",
        "correo": "raquel@example.com",
        "telefono": "555-567-8901",
        "rol": "administrador",
        "fecha_ing": "2013-02-28",
        "contraseña": "contraseñaAdmin404"
      },
]

const Empleados = () => {
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
                <table className={styles.tabla}>
                    <thead>
                        <tr >
                            <td className={styles.nombre}>
                                <div className={styles.tablaNombre}>
                                    <MdPerson />
                                    <p>Nombre</p>
                                </div>
                            </td>
                            <td className={styles.celular}>
                                <div className={styles.tablaCelular}>
                                    <FaPhone  />
                                    <p>Celular</p>
                                </div>
                            </td>
                            <td className={styles.correo}>
                                <div className={styles.tablaCorreo}>
                                    <PiAddressBookFill  />
                                    <p>Correo</p>
                                </div>
                            </td>
                            <td className={styles.fecha}>
                                <div className={styles.tablaFecha}>
                                    <LuCalendar />
                                    <p>Fecha de Ingreso</p>
                                </div>
                            </td>
                            <td className={styles.status}>
                                <div className={styles.tablaStatus}>
                                    <GrStatusCriticalSmall  />
                                    <p>Rol</p>
                                </div>
                            </td>
                            <td className={styles.acciones}>Acciones</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            empleados.map((item, index) => (
                                <ItemEmpleado par={index%2===0?true:false} datos={item} key={item.dni}></ItemEmpleado>  
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <Paginacion></Paginacion>
        </div>
    )
}

export default Empleados