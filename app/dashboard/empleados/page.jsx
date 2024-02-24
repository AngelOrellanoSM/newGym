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

import {readEmpleados} from "@/app/apiAccions/empleadosAccions"

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

    const result = await readEmpleados();
    const {data} = JSON.parse(result);
    data.map((item) => {
      const fecha = new Date(item.FechaDeIngreso)
      tablaEmpleados.contenido.push({
        "Id": item.id,
        "Nombre": item.Nombre,
        "Celular": item.Celular,
        "Correo": item.Correo,
        "FechaDeIngreso": fecha.toLocaleDateString('es-ES', {day: '2-digit', month: '2-digit', year: 'numeric'}),
        "Rol": item.Rol
      })
    })


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