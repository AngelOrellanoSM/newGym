import styles from "../../ui/compras/compras.module.css"
import CardsClientes from "../../ui/clientes/components/cardsClientes/cardsClientes"
import { MdPerson } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoPeopleSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { MdClass } from "react-icons/md";

import { LuCalendar } from "react-icons/lu";
import { GrStatusCriticalSmall } from "react-icons/gr";



import ItemCompra from "@/app/ui/compras/itemCompra/itemCompra"
import Paginacion from "../../ui/components/paginacion/paginacion"
import BarraBusqueda from "../../ui/components/barraBusqueda/barraBusqueda"
import Link from "next/link";

const datos = [
    {
        icon: <IoPeopleSharp />,
        titulo: "Gastos Totales",
        cantidad: "S/.1500.00",
        color: "blue"
    },
    {
        icon: <FaHeart />,
        titulo: "Cant. Compras",
        cantidad: 150,
        color: "green"
    },{
        icon: <MdClass />,
        titulo: "Cant. Pendientes",
        cantidad: 20,
        color: "yellow"
    },
]

const compras = [
    {
        "idCompra": 1,
        "fechaCompra": "2024-02-10",
        "producto": "Camiseta deportiva",
        "costo": 15.50,
        "cantidad": 3,
        "status": "pendiente",
        "total": 46.50
      },
      {
        "idCompra": 2,
        "fechaCompra": "2024-01-25",
        "producto": "Pantalones de yoga",
        "costo": 20.75,
        "cantidad": 2,
        "status": "recibido",
        "total": 41.50
      },
      {
        "idCompra": 3,
        "fechaCompra": "2023-12-15",
        "producto": "Zapatillas para correr",
        "costo": 45.00,
        "cantidad": 1,
        "status": "pendiente",
        "total": 45.00
      },
      {
        "idCompra": 4,
        "fechaCompra": "2024-02-05",
        "producto": "Mancuernas de 5 libras",
        "costo": 10.00,
        "cantidad": 5,
        "status": "pendiente",
        "total": 50.00
      },
      {
        "idCompra": 5,
        "fechaCompra": "2023-11-20",
        "producto": "Pelota de yoga",
        "costo": 8.50,
        "cantidad": 1,
        "status": "recibido",
        "total": 8.50
      },
]


const Compras = () => {
    return (
        <div className={styles.container}>
        <div className={styles.cards}>
            <CardsClientes datos={datos[0]}></CardsClientes>
            <CardsClientes datos={datos[1]}></CardsClientes>
            <CardsClientes datos={datos[2]}></CardsClientes>
        </div>
        <div className={styles.tablaContent}>
            <div className={styles.titulo}>
                <div className={styles.searchContent}>
                    <h2>Todos las Compras</h2>
                    <BarraBusqueda placeholder="Buscar compras ..."></BarraBusqueda>
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
                    <Link href={"/dashboard/compras/agregarCompra"}>
                        <button>
                            Agregar Compra
                        </button>
                    </Link>
                </div>
            </div>
            <table className={styles.tabla}>
                <thead>
                    <tr >
                        <td className={styles.id}>
                            <div className={styles.tablaContenTitulo}>
                                <MdPerson />
                                <p>ID</p>
                            </div>
                        </td>
                        <td className={styles.fecha}>
                            <div className={styles.tablaContenTitulo}>
                                <MdPerson />
                                <p>Fecha de Compra</p>
                            </div>
                        </td>
                        <td className={styles.nombre}>
                            <div className={styles.tablaContenTitulo}>
                                <FaPhone  />
                                <p>Nombre del Producto</p>
                            </div>
                        </td>
                        <td className={styles.costo}>
                            <div className={styles.tablaContenTitulo}>
                                <p>Costo</p>
                            </div>
                        </td>
                        <td className={styles.cantidad}>
                            <div className={styles.tablaContenTitulo}>
                                <p>Cantidad</p>
                            </div>
                        </td>
                        <td className={styles.status}>
                            <div className={styles.tablaContenTitulo}>
                                <GrStatusCriticalSmall  />
                                <p>Status</p>
                            </div>
                        </td>
                        <td className={styles.total}>
                            <div className={styles.tablaContenTitulo}>
                                <GrStatusCriticalSmall  />
                                <p>Total</p>
                            </div>
                        </td>
                        <td className={styles.acciones}>
                            <div className={styles.tablaContenTitulo}>
                                <GrStatusCriticalSmall  />
                                <p>Acciones</p>
                            </div>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {
                        compras.map((item, index) => (
                            <ItemCompra par={index%2===0?true:false} datos={item} key={item.idCompra}></ItemCompra>  
                        ))
                    } 
                </tbody>
            </table>
        </div>
        <Paginacion></Paginacion>
    </div>
    )
}

export default Compras;