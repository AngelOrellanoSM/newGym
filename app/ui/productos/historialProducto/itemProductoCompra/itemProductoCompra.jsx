import styles from "./itemProductoCompra.module.css"

const ItemProductoCompra = ({datos, par}) => {

    return (
        <tr className={`${styles.container} ${par === true?styles.fondoPar:styles.fondoInpar}`}>
            <td>{datos.idCompra}</td>
            <td>{datos.fechaCompra}</td>
            <td>{datos.cantidad}</td>
            <td>
                <div className={styles.adaptador}>
                    <div className={`${styles.itemStock} ${styles[datos.status]}`}>
                        <div className={styles.bolita}></div>
                        <p>{datos.status}</p>
                    </div>
                </div>
            </td>    
            <td>{datos.total}</td>
        </tr>
    )
}

export default ItemProductoCompra