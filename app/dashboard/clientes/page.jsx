import styles from "../../ui/clientes/clientes.module.css"
import CardsClientes from "../../ui/clientes/components/cardsClientes/cardsClientes"
import { MdPerson } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoPeopleSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { MdClass } from "react-icons/md";
import { FaBed } from "react-icons/fa";
import ItemTablaClientes from "../../ui/clientes/components/itemTablaCliente/itemTablaCliente"
import Paginacion from "../../ui/components/paginacion/paginacion"
import BarraBusqueda from "../../ui/components/barraBusqueda/barraBusqueda"
import Link from "next/link";

const datos = [
    {
        icon: <IoPeopleSharp />,
        titulo: "Total",
        cantidad: 750,
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


const clientes = [
    {
        "id": "1",
        "nombre": "Juan Perez",
        "celular": "555-123-4567",
        "correo": "juan@example.com",
        "fecha": "2024-02-10",
        "status": "activo"
      },
      {
        "id": "2",
        "nombre": "Maria Rodriguez",
        "celular": "555-987-6543",
        "correo": "maria@example.com",
        "fecha": "2024-01-25",
        "status": "interesado"
      },
      {
        "id": "3",
        "nombre": "Pedro Gomez",
        "celular": "555-456-7890",
        "correo": "pedro@example.com",
        "fecha": "2023-12-15",
        "status": "antiguo"
      },
      {
        "id": "4",
        "nombre": "Laura Martinez",
        "celular": "555-789-0123",
        "correo": "laura@example.com",
        "fecha": "2024-02-05",
        "status": "activo"
      },
      {
        "id": "5",
        "nombre": "Carlos Sanchez",
        "celular": "555-234-5678",
        "correo": "carlos@example.com",
        "fecha": "2023-11-20",
        "status": "interesado"
      },
      {
        "id": "6",
        "nombre": "Ana Lopez",
        "celular": "555-678-9012",
        "correo": "ana@example.com",
        "fecha": "2024-01-10",
        "status": "activo"
      },
      {
        "id": "7",
        "nombre": "Luis Ramirez",
        "celular": "555-345-6789",
        "correo": "luis@example.com",
        "fecha": "2023-10-05",
        "status": "antiguo"
      },
      {
        "id": "8",
        "nombre": "Sofia Fernandez",
        "celular": "555-890-1234",
        "correo": "sofia@example.com",
        "fecha": "2024-02-01",
        "status": "interesado"
      },
      {
        "id": "9",
        "nombre": "Elena Castro",
        "celular": "555-456-7890",
        "correo": "elena@example.com",
        "fecha": "2023-09-15",
        "status": "activo"
      },
      {
        "id": "10",
        "nombre": "Diego Herrera",
        "celular": "555-012-3456",
        "correo": "diego@example.com",
        "fecha": "2023-12-20",
        "status": "interesado"
      },
  ]

const Clientes = () => {
    return (
        <div className={styles.container}>
            <div className={styles.cards}>
                <CardsClientes datos={datos[0]}></CardsClientes>
                <CardsClientes datos={datos[1]}></CardsClientes>
                <CardsClientes datos={datos[2]}></CardsClientes>
                <CardsClientes datos={datos[3]}></CardsClientes>
            </div>
            <div className={styles.tablaContent}>
                <div className={styles.titulo}>
                    <div className={styles.searchContent}>
                        <h2>Todos los clientes</h2>
                        <BarraBusqueda placeholder="Buscar clientes ..."></BarraBusqueda>
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
                        <Link href={"/dashboard/clientes/agregarClientes"}>
                            <button>
                                Agregar Cliente
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
                                    <MdPerson />
                                    <p>Correo</p>
                                </div>
                            </td>
                            <td className={styles.fecha}>
                                <div className={styles.tablaFecha}>
                                    <MdPerson />
                                    <p>Fecha de Ingreso</p>
                                </div>
                            </td>
                            <td className={styles.status}>
                                <div className={styles.tablaStatus}>
                                    <MdPerson />
                                    <p>Status</p>
                                </div>
                            </td>
                            <td className={styles.acciones}>Acciones</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            clientes.map((item, index) => (
                                <ItemTablaClientes par={index%2===0?true:false} datos={item} key={item.id}></ItemTablaClientes>  
                            ))
                        } 
                    </tbody>
                </table>
            </div>
            <Paginacion></Paginacion>
        </div>
    )
}

export default Clientes