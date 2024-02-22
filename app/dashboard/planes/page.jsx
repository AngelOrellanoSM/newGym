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


const planes = [
    {
        "idPlan": 1,
        "nombre": "Plan A",
        "descripcion": "Plan básico de entrenamiento",
        "tipo": "plan",
        "encargado": "",
        "duracion": "1 mes",
        "costo": 50
    },
    {
        "idPlan": 2,
        "nombre": "Clase de Yoga",
        "descripcion": "Clase de yoga para principiantes",
        "tipo": "clase",
        "encargado": "Instructor de Yoga",
        "duracion": "1 hora",
        "costo": 10
    },
    {
        "idPlan": 3,
        "nombre": "Plan B",
        "descripcion": "Plan intermedio de entrenamiento",
        "tipo": "plan",
        "encargado": "",
        "duracion": "2 meses",
        "costo": 80
    },
    {
        "idPlan": 4,
        "nombre": "Clase de Pilates",
        "descripcion": "Clase de pilates enfocada en fortalecimiento",
        "tipo": "clase",
        "encargado": "Instructor de Pilates",
        "duracion": "1 hora",
        "costo": 15
    },
    {
        "idPlan": 5,
        "nombre": "Plan C",
        "descripcion": "Plan avanzado de entrenamiento",
        "tipo": "plan",
        "encargado": "",
        "duracion": "3 meses",
        "costo": 120
    },
    {
        "idPlan": 6,
        "nombre": "Clase de Zumba",
        "descripcion": "Clase de zumba para quemar calorías bailando",
        "tipo": "clase",
        "encargado": "Instructor de Zumba",
        "duracion": "1 hora",
        "costo": 12
    },
    {
        "idPlan": 7,
        "nombre": "Plan D",
        "descripcion": "Plan de entrenamiento personalizado",
        "tipo": "personalizado",
        "encargado": "",
        "duracion": "6 semanas",
        "costo": 200
    },
    {
        "idPlan": 8,
        "nombre": "Clase de Spinning",
        "descripcion": "Clase de spinning para mejorar resistencia",
        "tipo": "clase",
        "encargado": "Instructor de Spinning",
        "duracion": "1 hora",
        "costo": 13
    },
    {
        "idPlan": 9,
        "nombre": "Plan E",
        "descripcion": "Plan de entrenamiento especializado en pesas",
        "tipo": "plan",
        "encargado": "",
        "duracion": "2 meses",
        "costo": 90
    },
    {
        "idPlan": 10,
        "nombre": "Clase de CrossFit",
        "descripcion": "Clase de CrossFit para entrenamiento funcional",
        "tipo": "clase",
        "encargado": "Instructor de CrossFit",
        "duracion": "1 hora",
        "costo": 20
    },
    {
        "idPlan": 11,
        "nombre": "Plan F",
        "descripcion": "Plan de entrenamiento para maratón",
        "tipo": "plan",
        "encargado": "",
        "duracion": "4 meses",
        "costo": 150
    },
    {
        "idPlan": 12,
        "nombre": "Clase de Ballet",
        "descripcion": "Clase de ballet para mejorar la flexibilidad",
        "tipo": "clase",
        "encargado": "Instructor de Ballet",
        "duracion": "1 hora",
        "costo": 18
    },
    {
        "idPlan": 13,
        "nombre": "Plan G",
        "descripcion": "Plan de entrenamiento para competencia de levantamiento de pesas",
        "tipo": "plan",
        "encargado": "",
        "duracion": "5 meses",
        "costo": 180
    },
    {
        "idPlan": 14,
        "nombre": "Clase de Boxeo",
        "descripcion": "Clase de boxeo para mejorar la resistencia y agilidad",
        "tipo": "clase",
        "encargado": "Instructor de Boxeo",
        "duracion": "1 hora",
        "costo": 16
    },
    {
        "idPlan": 15,
        "nombre": "Plan H",
        "descripcion": "Plan de entrenamiento para pérdida de peso",
        "tipo": "plan",
        "encargado": "",
        "duracion": "3 meses",
        "costo": 100
    },
]

const tablaPlanes =
{
    "columnas": [
      {
        "icon": <BiSolidStar />,
        "titulo": "Id",
        "width": "10%"
      },
      {
        "icon": <CiBoxList  />,
        "titulo": "Nombre",
        "width": "15%"
      },
      {
        "icon": <MdDescription />,
        "titulo": "Descripcion",
        "width": "20%"
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
    "contenido": [
      {
        "Id": 1,
        "Nombre": "Plan A",
        "Descripcion": "Plan básico de entrenamiento",
        "Tipo": "plan",
        "Encargado": "",
        "Duración": "1 mes",
        "Costo": 50
      },
      {
        "Id": 2,
        "Nombre": "Clase de Yoga",
        "Descripcion": "Clase de yoga para principiantes",
        "Tipo": "clase",
        "Encargado": "Instructor de Yoga",
        "Duración": "1 hora",
        "Costo": 10
      },
      {
        "Id": 3,
        "Nombre": "Plan B",
        "Descripcion": "Plan intermedio de entrenamiento",
        "Tipo": "plan",
        "Encargado": "",
        "Duración": "2 meses",
        "Costo": 80
      },
      {
        "Id": 4,
        "Nombre": "Clase de Pilates",
        "Descripcion": "Clase de pilates enfocada en fortalecimiento",
        "Tipo": "clase",
        "Encargado": "Instructor de Pilates",
        "Duración": "1 hora",
        "Costo": 15
      },
      {
        "Id": 5,
        "Nombre": "Plan C",
        "Descripcion": "Plan avanzado de entrenamiento",
        "Tipo": "plan",
        "Encargado": "",
        "Duración": "3 meses",
        "Costo": 120
      },
      {
        "Id": 6,
        "Nombre": "Clase de Zumba",
        "Descripcion": "Clase de zumba para quemar calorías bailando",
        "Tipo": "clase",
        "Encargado": "Instructor de Zumba",
        "Duración": "1 hora",
        "Costo": 12
      },
      {
        "Id": 7,
        "Nombre": "Plan D",
        "Descripcion": "Plan de entrenamiento personalizado",
        "Tipo": "personalizado",
        "Encargado": "",
        "Duración": "6 semanas",
        "Costo": 200
      },
      {
        "Id": 8,
        "Nombre": "Clase de Spinning",
        "Descripcion": "Clase de spinning para mejorar resistencia",
        "Tipo": "clase",
        "Encargado": "Instructor de Spinning",
        "Duración": "1 hora",
        "Costo": 13
      },
      {
        "Id": 9,
        "Nombre": "Plan E",
        "Descripcion": "Plan de entrenamiento especializado en pesas",
        "Tipo": "plan",
        "Encargado": "",
        "Duración": "2 meses",
        "Costo": 90
      },
      {
        "Id": 10,
        "Nombre": "Clase de CrossFit",
        "Descripcion": "Clase de CrossFit para entrenamiento funcional",
        "Tipo": "clase",
        "Encargado": "Instructor de CrossFit",
        "Duración": "1 hora",
        "Costo": 20
      },
      {
        "Id": 11,
        "Nombre": "Plan F",
        "Descripcion": "Plan de entrenamiento para maratón",
        "Tipo": "plan",
        "Encargado": "",
        "Duración": "4 meses",
        "Costo": 150
      },
      {
        "Id": 12,
        "Nombre": "Clase de Ballet",
        "Descripcion": "Clase de ballet para mejorar la flexibilidad",
        "Tipo": "clase",
        "Encargado": "Instructor de Ballet",
        "Duración": "1 hora",
        "Costo": 18
      },
      {
        "Id": 13,
        "Nombre": "Plan G",
        "Descripcion": "Plan de entrenamiento para competencia de levantamiento de pesas",
        "Tipo": "plan",
        "Encargado": "",
        "Duración": "5 meses",
        "Costo": 180
      },
      {
        "Id": 14,
        "Nombre": "Clase de Boxeo",
        "Descripcion": "Clase de boxeo para mejorar la resistencia y agilidad",
        "Tipo": "clase",
        "Encargado": "Instructor de Boxeo",
        "Duración": "1 hora",
        "Costo": 16
      },
      {
        "Id": 15,
        "Nombre": "Plan H",
        "Descripcion": "Plan de entrenamiento para pérdida de peso",
        "Tipo": "plan",
        "Encargado": "",
        "Duración": "3 meses",
        "Costo": 100
      }
    ],
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

const Planes = () => {
    return (
        <div className={styles.container}>
            <div className={styles.tablaContent}>
                <div className={styles.titulo}>
                    <div className={styles.searchContent}>
                        <h2>Todos los Planes y Cursos</h2>
                        <BarraBusqueda placeholder="Buscar planes / cursos ..."></BarraBusqueda>
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
                        <Link href={"/dashboard/planes/agregarPlan"}>
                            <button>
                                Agregar nuevo Item
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <Tablas datos={tablaPlanes}></Tablas>
            <Paginacion></Paginacion>
        </div>
    )
}

export default Planes