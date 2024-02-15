import styles from "../../ui/planes/planes.module.css"

import BarraBusqueda from "@/app/ui/components/barraBusqueda/barraBusqueda"
import Link from "next/link"
import ItemPlan from "@/app/ui/planes/itemPlan/itemPlan"

import { LuCalendar } from "react-icons/lu";
import { MdStorage } from "react-icons/md";
import { TbGridScan } from "react-icons/tb";
import { FaBox } from "react-icons/fa";
import { GiPriceTag } from "react-icons/gi";
import { MdOutlineSell } from "react-icons/md";
import Paginacion from "@/app/ui/components/paginacion/paginacion";


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
                <table className={styles.tabla}>
                    <thead>
                        <tr >
                            <td className={styles.idPlan}>
                                <div className={styles.tablaTitulo}>
                                    <TbGridScan  />
                                    <p>ID</p>
                                </div>
                            </td>
                            <td className={styles.nombre}>
                                <div className={styles.tablaTitulo}>
                                    <FaBox  />
                                    <p>Nombre</p>
                                </div>
                            </td>
                            <td className={styles.descripcion}>
                                <div className={styles.tablaTitulo}>
                                    <GiPriceTag   />
                                    <p>Descripción</p>
                                </div>
                            </td>
                            <td className={styles.tipo}>
                                <div className={styles.tablaTitulo}>
                                    <MdOutlineSell  />
                                    <p>Tipo</p>
                                </div>
                            </td>
                            <td className={styles.encargado}>
                                <div className={styles.tablaTitulo}>
                                    <LuCalendar />
                                    <p>Encargado</p>
                                </div>
                            </td>
                            <td className={styles.duracion}>
                                <div className={styles.tablaTitulo}>
                                    <MdStorage   />
                                    <p>Duración</p>
                                </div>
                            </td>
                            <td className={styles.costo}>
                                <div className={styles.tablaTitulo}>
                                    <MdStorage   />
                                    <p>Costo</p>
                                </div>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            planes.map((item, index) => (
                                <ItemPlan par={index%2===0?true:false} datos={item} key={item.idPlan}></ItemPlan>  
                            ))
                        } 
                    </tbody>
                </table>
            </div>
            <Paginacion></Paginacion>
        </div>
    )
}

export default Planes