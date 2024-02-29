"use client"
import styles from "./tablasHistorial.module.css"
import { LuCalendar } from "react-icons/lu";
import { IoPerson } from "react-icons/io5";
import { BiSolidStar } from "react-icons/bi";
import { GrStatusGoodSmall } from "react-icons/gr";
import { TbMoneybag } from "react-icons/tb";
import { FaSortAmountUpAlt } from "react-icons/fa";

import Paginacion from "@/app/ui/components/paginacion/paginacion";
import Tablas from "@/app/ui/components/tablas/tablas";
import HeadTabla from "@/app/ui/components/tablas/headTabla/headTabla";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const tablaVentas =
{
    "columnas": [
      {
        "icon": <BiSolidStar />,
        "titulo": "ID",
        "width": "10%"
      },
      {
        "icon": <IoPerson  />,
        "titulo": "NombreDelCliente",
        "width": "20%"
      },
      {
        "icon": <LuCalendar />,
        "titulo": "FechaVenta",
        "width": "18%"
      },
      {
        "icon": <FaSortAmountUpAlt />,
        "titulo": "Cantidad",
        "width": "18%"
      },
      {
        "icon": <GrStatusGoodSmall />,
        "titulo": "Estatus",
        "width": "18%"
      },
      {
        "icon": <TbMoneybag />,
        "titulo": "Total",
        "width": "18%"
      }
    ],
    "contenido": [
      {
        "ID": 1,
        "NombreDelCliente": "Juan Pérez",
        "FechaVenta": "2024-02-10",
        "Cantidad": 3,
        "Estatus": "pendiente",
        "Total": 149.97
      },
      {
        "ID": 2,
        "NombreDelCliente": "María Gómez",
        "FechaVenta": "2024-01-25",
        "Cantidad": 2,
        "Estatus": "pagado",
        "Total": 99.98
      },
      {
        "ID": 3,
        "NombreDelCliente": "Pedro Rodríguez",
        "FechaVenta": "2023-12-15",
        "Cantidad": 1,
        "Estatus": "pendiente",
        "Total": 49.99
      },
      {
        "ID": 4,
        "NombreDelCliente": "Laura Martínez",
        "FechaVenta": "2024-02-05",
        "Cantidad": 5,
        "Estatus": "pendiente",
        "Total": 249.95
      },
      {
        "ID": 5,
        "NombreDelCliente": "Carlos Sánchez",
        "FechaVenta": "2023-11-20",
        "Cantidad": 1,
        "Estatus": "pagado",
        "Total": 59.99
      }
    ],
    "condicion": {
      "columna": "Estatus",
      "tipo": "cadena"
    },
    "acciones": {
      "visible": false,
      "delete": true,
      "edit": true,
      "historial": true,
      "ruta": {
        "pagina": "",
        "subpagina": ""
      }
    }
  }

const tablaCompras = 
{
    "columnas": [
      {
        "icon": <BiSolidStar />,
        "titulo": "Id",
        "width": "10%"
      },
      {
        "icon": <LuCalendar />,
        "titulo": "FechaDeCompra",
        "width": "25%"
      },
      {
        "icon": <FaSortAmountUpAlt />,
        "titulo": "Cantidad",
        "width": "25%"
      },
      {
        "icon": <GrStatusGoodSmall />,
        "titulo": "Estatus",
        "width": "25%"
      },
      {
        "icon": <TbMoneybag />,
        "titulo": "Total",
        "width": "15%"
      }
    ],
    "contenido": [
      {
        "Id": 1,
        "FechaDeCompra": "2024-02-10",
        "Cantidad": 3,
        "Estatus": "pendiente",
        "Total": 149.97
      },
      {
        "Id": 2,
        "FechaDeCompra": "2024-01-25",
        "Cantidad": 2,
        "Estatus": "recibido",
        "Total": 99.98
      },
      {
        "Id": 3,
        "FechaDeCompra": "2023-12-15",
        "Cantidad": 1,
        "Estatus": "pendiente",
        "Total": 49.99
      },
      {
        "Id": 4,
        "FechaDeCompra": "2024-02-05",
        "Cantidad": 5,
        "Estatus": "pendiente",
        "Total": 249.95
      },
      {
        "Id": 5,
        "FechaDeCompra": "2023-11-20",
        "Cantidad": 1,
        "Estatus": "recibido",
        "Total": 59.99
      }
    ],
    "condicion": {
      "columna": "Estatus",
      "tipo": "cadena"
    },
    "acciones": {
      "visible": false,
      "delete": true,
      "edit": true,
      "historial": true,
      "ruta": {
        "pagina": "",
        "subpagina": ""
      }
    }
  }

const TablasHistorial = ({ventas, compras}) =>{

    const searchParams = useSearchParams();
    const { replace } = useRouter();
    const pathname = usePathname();

    tablaVentas.contenido = []
    ventas.map((item) => {
        const fecha = new Date(item.FechaDeVenta)
        tablaVentas.contenido.push({
            "ID": item.id,
            "NombreDelCliente": item.Cliente !== null ? item.Cliente.Nombre : "",
            "FechaVenta": fecha.toLocaleDateString('es-ES', {day: '2-digit', month: '2-digit', year: 'numeric'}),
            "Cantidad": item.Cantidad,
            "Estatus": item.Estatus,
            "Total": parseFloat(item.Total).toFixed(2)
        })
    })

    tablaCompras.contenido = []
    compras.map((item) => {
        const fecha = new Date(item.FechaDeCompra)
        tablaCompras.contenido.push({
            "Id": item.id,
            "FechaDeCompra": fecha.toLocaleDateString('es-ES', {day: '2-digit', month: '2-digit', year: 'numeric'}),
            "Cantidad": item.Cantidad,
            "Estatus": item.Estatus,
            "Total": parseFloat(item.Total).toFixed(2)
        })
    })


   
    const [selected, setSelected] = useState("ventas")
    
    
    const handleSelect = (e) =>{
        e.preventDefault()
        setSelected(e.target.value)
        const params = new URLSearchParams(searchParams);
        params.set("page", 1)
        params.delete("data")
        replace(`${pathname}?${params}`);
    }

    return (
        <div className={styles.container}>

            <select className={styles.selectTipo} onChange={handleSelect} name="selectTipo" value={selected}>
                <option value="ventas">Mostrar las ventas</option>
                <option value="compras">Mostrar las compras</option>
            </select>

            {selected === "ventas" && 
                <HeadTabla pagina={`Ventas`} subpagina={""} boton={false}></HeadTabla>
            }
            {selected === "ventas" && 
                <Tablas datos={tablaVentas}></Tablas>
            }
            {selected === "ventas" && 
                <Paginacion></Paginacion>
            }
            
                           
            {selected === "compras" && 
                <HeadTabla pagina={`Compras`} subpagina={""} boton={false} busqueda={false}></HeadTabla>
            }
            {selected === "compras" && 
                <Tablas datos={tablaCompras}></Tablas>
            }
            {selected === "compras" && 
                <Paginacion></Paginacion>
            }
        </div>
    )
}

export default TablasHistorial