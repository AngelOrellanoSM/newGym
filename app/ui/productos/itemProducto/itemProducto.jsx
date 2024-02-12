import styles from "./itemProducto.module.css"
import { MdDelete } from "react-icons/md";
import { BiSolidPencil } from "react-icons/bi";
import { MdRemoveRedEye } from "react-icons/md";
import Link from "next/link";


const ItemProducto = ({datos, par}) => {

    const existencias = ["sobrante", "medio" , "pocos"];
    let claseExist;
    if(datos.stock > 40) claseExist = styles[existencias[0]];
    else if(datos.stock > 20) claseExist = styles[existencias[1]];
    else claseExist = styles[existencias[2]];

    return (
        <tr className={`${styles.container} ${par === true?styles.fondoPar:styles.fondoInpar}`}>
            <td>{datos.idProducto}</td>
            <td>{datos.nombre}</td>
            <td>{datos.costo}</td>
            <td>{datos.precioVenta}</td>
            <td>{datos.fecha_ing}</td>
            <td>
                <div className={styles.adaptador}>
                    <div className={`${styles.itemStock} ${claseExist}`}>
                        <div className={styles.bolita}></div>
                        <p>{datos.stock}</p>
                    </div>
                </div>
            </td>    
            <td>
                <div className={styles.botones}>
                    <button><MdDelete className={styles.icon}/></button>
                    <Link href={""}>
                        <button><BiSolidPencil className={styles.icon}/></button>
                    </Link>
                    <Link href={""}>
                        <button><MdRemoveRedEye className={styles.icon} /></button>
                    </Link>
                </div>
            </td>
        </tr>
    )
}

export default ItemProducto