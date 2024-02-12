import styles from "./itemEmpleado.module.css"
import Image from "next/image"
import { MdDelete } from "react-icons/md";
import { BiSolidPencil } from "react-icons/bi";
import Link from "next/link";


const ItemEmpleado = ({datos, par}) => {
    return (
        <tr className={`${styles.container} ${par === true?styles.fondoPar:styles.fondoInpar}`}>
            <td>
                <div className={styles.empleadoContent}>
                    <Image src="/noavatar.png" width={20} height={20} className={styles.imageContent}></Image>
                    {datos.nombre}
                </div>
            </td>
            <td>{datos.telefono}</td>
            <td>{datos.correo}</td>
            <td>{datos.fecha_ing}</td>
            <td>
                <div className={styles.adaptador}>
                    <div className={`${styles.itemStatus} ${styles[datos.rol]}`}>
                        <div className={styles.bolita}></div>
                        <p>{datos.rol}</p>
                    </div>
                </div>
            </td>    
            <td>
                <div className={styles.botones}>
                    <button><MdDelete className={styles.icon}/></button>
                    <Link href={`/dashboard/empleados/${datos.dni}/editarEmpleado`}>
                        <button><BiSolidPencil className={styles.icon}/></button>
                    </Link>
                </div>
            </td>
        </tr>
    )
}

export default ItemEmpleado