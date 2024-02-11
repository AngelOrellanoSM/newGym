import styles from "./itemTablaCliente.module.css"
import Image from "next/image"
import { MdDelete } from "react-icons/md";
import { BiSolidPencil } from "react-icons/bi";
import { MdRemoveRedEye } from "react-icons/md";


const ItemTablaClientes = ({datos, par}) => {
    return (
        <tr className={`${styles.container} ${par === true?styles.fondoPar:styles.fondoInpar}`}>
            <td>
                <div className={styles.clienteContent}>
                    <Image src="/noavatar.png" width={20} height={20} className={styles.imageContent}></Image>
                    {datos.nombre}
                </div>
            </td>
            <td>{datos.celular}</td>
            <td>{datos.correo}</td>
            <td>{datos.fecha}</td>
            <td>
                <div className={styles.adaptador}>
                    <div className={`${styles.itemStatus} ${styles[datos.status]}`}>
                        <div className={styles.bolita}></div>
                        <p>{datos.status}</p>
                    </div>
                </div>
            </td>    
            <td>
                <div className={styles.botones}>
                    <button><MdDelete className={styles.icon}/></button>
                    <button><BiSolidPencil className={styles.icon}/></button>
                    <button><MdRemoveRedEye  /></button>
                </div>
            </td>
        </tr>
    )
}

export default ItemTablaClientes