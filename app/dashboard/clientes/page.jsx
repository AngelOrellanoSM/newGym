import styles from "../../ui/clientes/clientes.module.css"
import { IoPeopleSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { MdClass } from "react-icons/md";
import { FaBed } from "react-icons/fa";
import Tablas from "@/app/ui/components/tablas/tablas";
import Cards from "@/app/ui/components/cards/cards";
import Paginacion from "../../ui/components/paginacion/paginacion"
import BarraBusqueda from "../../ui/components/barraBusqueda/barraBusqueda"
import Link from "next/link";
import {readClientes, readDatos} from "@/app/apiAccions/clientesAccions"
import HeadTabla from "@/app/ui/components/tablas/headTabla/headTabla";



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
    "contenido": [],
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

const Clientes = async ({searchParams}) => {
  const dataParam = searchParams?.data || "";
  const dataCantidad = searchParams?.cant || 10;
  let page = searchParams?.page || 1;
  page < 1 ? page = 1 : false;
  let total;
  try{
    
    const {count, result} = await readClientes(dataParam, page, dataCantidad);
    const data = result.data;
    total = count;
    tablaClientes.contenido = []
    data.map((item) => {
      const fecha = new Date(item.FechaDeIngreso)
      tablaClientes.contenido.push({
        "Id": item.id,
        "Nombre": item.Nombre,
        "Celular": item.Celular,
        "Correo": item.Correo,
        "FechaDeIngreso": fecha.toLocaleDateString('es-ES', {day: '2-digit', month: '2-digit', year: 'numeric'}),
        "Estatus": item.Estado
      })
    })

    const {totalClientes, activos, interesados, antiguos} = await readDatos();
    datos[0].cantidad = totalClientes;
    datos[1].cantidad = activos;
    datos[2].cantidad = interesados;
    datos[3].cantidad = antiguos;
  }catch(e){
    console.error("Error inesperado: ", e)
  }



    return (
        <div className={styles.container}>
            <div className={styles.cards}>
                <Cards datos={datos[0]}></Cards>
                <Cards datos={datos[1]}></Cards>
                <Cards datos={datos[2]}></Cards>
                <Cards datos={datos[3]}></Cards>
            </div>
            <HeadTabla pagina={tablaClientes.acciones.ruta.pagina} subpagina={tablaClientes.acciones.ruta.subpagina}></HeadTabla>
            <Tablas datos={tablaClientes}></Tablas>
            <Paginacion total={total}></Paginacion>
        </div>
    )
}

export default Clientes