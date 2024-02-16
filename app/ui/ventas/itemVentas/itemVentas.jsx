import Link from "next/link"
import styles from "./itemVentas.module.css"
import { MdDelete } from "react-icons/md";
import { BiSolidPencil } from "react-icons/bi";

const ItemVentas = ({datos, par}) => {
    return (
        <tr className={`${styles.container} ${par === true?styles.fondoPar:styles.fondoInpar}`}>
            <td>{datos.idVenta}</td>
            <td>{datos.fechaVenta}</td>
            <td>{datos.nombreCliente}</td>
            <td>{datos.producto}</td>
            <td>{datos.cantidad}</td>
            <td>
                <div className={styles.adaptador}>
                    <div className={`${styles.itemStatus} ${styles[datos.status]}`}>
                        <div className={styles.bolita}></div>
                        <p>{datos.status}</p>
                    </div>
                </div>
            </td>    
            <td>{datos.total}</td>
            <td>
                <div className={styles.botones}>
                    <button><MdDelete className={styles.icon}/></button>
                    <Link href={`/dashboard/ventas/${datos.idVenta}/editarVenta`}>
                        <button><BiSolidPencil className={styles.icon}/></button>
                    </Link>
                </div>
            </td>
        </tr>
    )
}

export default ItemVentas