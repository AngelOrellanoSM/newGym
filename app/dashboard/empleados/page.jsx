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

import HeadTabla from "@/app/ui/components/tablas/headTabla/headTabla"

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

const Empleados = async ({searchParams}) => {

    const dataParam = searchParams?.data || "";
    const dataCantidad = searchParams?.cant || 10;
    let page = searchParams?.page || 1;
    page < 1 ? page = 1 : false;
    let total;
    try{
          
      const {count, result} = await readEmpleados(dataParam, page, dataCantidad);
      const data = result.data;
      total = count;
      tablaEmpleados.contenido = []
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
    }catch(e){
      console.error("Error inesperado: ", e)
    }
    return (
        <div className={styles.container}>
            <HeadTabla pagina={tablaEmpleados.acciones.ruta.pagina} subpagina={tablaEmpleados.acciones.ruta.subpagina}></HeadTabla>
            
            <Tablas datos={tablaEmpleados}></Tablas>
            
            <Paginacion total={total}></Paginacion>
        </div>
    )
}

export default Empleados