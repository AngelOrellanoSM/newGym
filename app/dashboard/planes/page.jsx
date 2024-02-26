import styles from "../../ui/planes/planes.module.css"

import BarraBusqueda from "@/app/ui/components/barraBusqueda/barraBusqueda"
import Link from "next/link"
import Tablas from "@/app/ui/components/tablas/tablas"

import { CiBoxList } from "react-icons/ci";
import Paginacion from "@/app/ui/components/paginacion/paginacion";
import { BiSolidStar } from "react-icons/bi";
import { IoMdPerson } from "react-icons/io";
import { GrStatusGoodSmall } from "react-icons/gr";
import { GiDuration } from "react-icons/gi";
import { MdDescription } from "react-icons/md";
import { TbMoneybag } from "react-icons/tb";
import {readPlanes} from "@/app/apiAccions/planesAccions"
import HeadTabla from "@/app/ui/components/tablas/headTabla/headTabla";

const tablaPlanes =
{
    "columnas": [
      {
        "icon": <BiSolidStar />,
        "titulo": "Id",
        "width": "5%"
      },
      {
        "icon": <CiBoxList  />,
        "titulo": "Nombre",
        "width": "15%"
      },
      {
        "icon": <MdDescription />,
        "titulo": "Descripcion",
        "width": "25%"
      },
      {
        "icon": <GrStatusGoodSmall />,
        "titulo": "Tipo",
        "width": "10%"
      },
      {
        "icon": <IoMdPerson  />,
        "titulo": "Encargado",
        "width": "15%"
      },
      {
        "icon": <GiDuration  />,
        "titulo": "Duración",
        "width": "10%"
      },
      {
        "icon": <TbMoneybag />,
        "titulo": "Costo",
        "width": "10%"
      }
    ],
    "contenido": [ ],
    "condicion": {
      "columna": "Tipo",
      "tipo": "cadena"
    },
    "acciones": {
      "visible": true,
      "delete": true,
      "edit": true,
      "historial": false,
      "ruta": {
        "pagina": "planes",
        "subpagina": "Plan"
      }
    }
  }

const Planes = async ({searchParams}) => {
    const dataParam = searchParams?.data || "";
    const dataCantidad = searchParams?.cant || 10;
    let page = searchParams?.page || 1;
    page < 1 ? page = 1 : false;
    let total;
    try{   
      const {count, result} = await readPlanes(dataParam, page, dataCantidad);
      const data = result.data;
      total = count;
      tablaPlanes.contenido = []
      data.map((item) => {
        tablaPlanes.contenido.push({
          "Id": item.id,
          "Nombre": item.Nombre,
          "Descripcion": item.Descripcion,
          "Tipo": item.Tipo,
          "Encargado": item.Encargado,
          "Duración": item.Duracion,
          "Costo": item.Costo
        })
      })
    }catch(e){
      console.error("Error inesperado: ", e)
    }


    return (
        <div className={styles.container}>
            <HeadTabla pagina={tablaPlanes.acciones.ruta.pagina} subpagina={tablaPlanes.acciones.ruta.subpagina}></HeadTabla>
            <Tablas datos={tablaPlanes}></Tablas>
            <Paginacion total={total}></Paginacion>
        </div>
    )
}

export default Planes