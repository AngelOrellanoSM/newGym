import Link from "next/link"
import styles from "./itemCompra.module.css"
import { MdDelete } from "react-icons/md";
import { BiSolidPencil } from "react-icons/bi";

const ItemCompra = ({datos, par}) => {
    return (
        <tr className={`${styles.container} ${par === true?styles.fondoPar:styles.fondoInpar}`}>
            <td>{datos.idCompra}</td>
            <td>{datos.fechaCompra}</td>
            <td>{datos.producto}</td>
            <td>{datos.costo}</td>
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
                    <Link href={`/dashboard/compras/${datos.idVenta}/editarVenta`}>
                        <button><BiSolidPencil className={styles.icon}/></button>
                    </Link>
                </div>
            </td>
        </tr>
    )
}

export default ItemCompra