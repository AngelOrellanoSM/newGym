import styles from "../../ui/ventas/ventas.module.css"
import CardsClientes from "../../ui/clientes/components/cardsClientes/cardsClientes"
import { MdPerson } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoPeopleSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { MdClass } from "react-icons/md";

import { LuCalendar } from "react-icons/lu";
import { GrStatusCriticalSmall } from "react-icons/gr";
import { PiAddressBookLight } from "react-icons/pi";



import ItemVentas from "@/app/ui/ventas/itemVentas/itemVentas"
import Paginacion from "../../ui/components/paginacion/paginacion"
import BarraBusqueda from "../../ui/components/barraBusqueda/barraBusqueda"
import Link from "next/link";

const datos = [
    {
        icon: <IoPeopleSharp />,
        titulo: "Ingresos Totales",
        cantidad: "S/.1500.00",
        color: "blue"
    },
    {
        icon: <FaHeart />,
        titulo: "Cant. Ventas",
        cantidad: 150,
        color: "green"
    },{
        icon: <MdClass />,
        titulo: "Cant. Pendientes",
        cantidad: 20,
        color: "yellow"
    },
]


const ventas = [
    {
        "idVenta": 1,
        "fechaVenta": "2024-02-15",
        "nombreCliente": "Juan Pérez",
        "producto": "Plan A",
        "cantidad": 1,
        "status": "pagado",
        "total": 50
    },
    {
        "idVenta": 2,
        "fechaVenta": "2024-02-14",
        "nombreCliente": "María López",
        "producto": "Clase de Yoga",
        "cantidad": 1,
        "status": "pagado",
        "total": 10
    },
    {
        "idVenta": 3,
        "fechaVenta": "2024-02-13",
        "nombreCliente": "Carlos García",
        "producto": "Mancuernas de 5kg",
        "cantidad": 2,
        "status": "pendiente",
        "total": 30
    },
    {
        "idVenta": 4,
        "fechaVenta": "2024-02-12",
        "nombreCliente": "Ana Martínez",
        "producto": "Clase de Pilates",
        "cantidad": 1,
        "status": "pagado",
        "total": 15
    },
    {
        "idVenta": 5,
        "fechaVenta": "2024-02-11",
        "nombreCliente": "Pedro Rodríguez",
        "producto": "Plan C",
        "cantidad": 1,
        "status": "pagado",
        "total": 120
    },
    {
        "idVenta": 6,
        "fechaVenta": "2024-02-10",
        "nombreCliente": "Laura Sánchez",
        "producto": "Clase de Zumba",
        "cantidad": 1,
        "status": "pendiente",
        "total": 12
    },
    {
        "idVenta": 7,
        "fechaVenta": "2024-02-09",
        "nombreCliente": "Sofía Fernández",
        "producto": "Plan D",
        "cantidad": 1,
        "status": "pagado",
        "total": 200
    },
    {
        "idVenta": 8,
        "fechaVenta": "2024-02-08",
        "nombreCliente": "Diego Ruiz",
        "producto": "Bicicleta estática",
        "cantidad": 1,
        "status": "pagado",
        "total": 200
    },
    {
        "idVenta": 9,
        "fechaVenta": "2024-02-07",
        "nombreCliente": "Isabel Gómez",
        "producto": "Plan E",
        "cantidad": 1,
        "status": "pendiente",
        "total": 90
    },
    {
        "idVenta": 10,
        "fechaVenta": "2024-02-06",
        "nombreCliente": "Elena Castro",
        "producto": "Cinta de correr",
        "cantidad": 1,
        "status": "pagado",
        "total": 300
    },
    {
        "idVenta": 11,
        "fechaVenta": "2024-02-05",
        "nombreCliente": "Javier Hernández",
        "producto": "Plan F",
        "cantidad": 1,
        "status": "pagado",
        "total": 150
    },
    {
        "idVenta": 12,
        "fechaVenta": "2024-02-04",
        "nombreCliente": "Carmen Pérez",
        "producto": "Bandas elásticas",
        "cantidad": 1,
        "status": "pendiente",
        "total": 10
    },
    {
        "idVenta": 13,
        "fechaVenta": "2024-02-03",
        "nombreCliente": "Andrés Díaz",
        "producto": "Plan G",
        "cantidad": 1,
        "status": "pagado",
        "total": 180
    },
    {
        "idVenta": 14,
        "fechaVenta": "2024-02-02",
        "nombreCliente": "Marta Martínez",
        "producto": "Guantes de Boxeo",
        "cantidad": 1,
        "status": "pendiente",
        "total": 20
    },
    {
        "idVenta": 15,
        "fechaVenta": "2024-02-01",
        "nombreCliente": "Raúl López",
        "producto": "Plan H",
        "cantidad": 1,
        "status": "pagado",
        "total": 100
    },
]

const Ventas = () => {
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
                        <h2>Todos las ventas</h2>
                        <BarraBusqueda placeholder="Buscar ventas ..."></BarraBusqueda>
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
                        <Link href={"/dashboard/ventas/agregarVenta"}>
                            <button>
                                Agregar Venta
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
                                    <p>Fecha de Venta</p>
                                </div>
                            </td>
                            <td className={styles.nombre}>
                                <div className={styles.tablaContenTitulo}>
                                    <FaPhone  />
                                    <p>Nombre del cliente</p>
                                </div>
                            </td>
                            <td className={styles.producto}>
                                <div className={styles.tablaContenTitulo}>
                                    <PiAddressBookLight />
                                    <p>Producto o plan</p>
                                </div>
                            </td>
                            <td className={styles.cantidad}>
                                <div className={styles.tablaContenTitulo}>
                                    <LuCalendar />
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
                            ventas.map((item, index) => (
                                <ItemVentas par={index%2===0?true:false} datos={item} key={item.idVenta}></ItemVentas>  
                            ))
                        } 
                    </tbody>
                </table>
            </div>
            <Paginacion></Paginacion>
        </div>
    )
}

export default Ventas