import styles from "./itemTablaCliente.module.css"
import Image from "next/image"
import { MdDelete } from "react-icons/md";
import { BiSolidPencil } from "react-icons/bi";
import { MdRemoveRedEye } from "react-icons/md";
import Link from "next/link";


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
                    <Link href={`/dashboard/clientes/${datos.dni}/editarCliente`}>
                        <button><BiSolidPencil className={styles.icon}/></button>
                    </Link>
                    <Link href={`/dashboard/clientes/${datos.dni}/historialCliente`}>
                        <button><MdRemoveRedEye className={styles.icon} /></button>
                    </Link>
                </div>
            </td>
        </tr>
    )
}

export default ItemTablaClientes