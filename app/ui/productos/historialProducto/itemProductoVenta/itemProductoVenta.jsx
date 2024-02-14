import styles from "./itemProductoVenta.module.css"

const ItemProductoVenta = ({datos, par}) => {

    return (
        <tr className={`${styles.container} ${par === true?styles.fondoPar:styles.fondoInpar}`}>
            <td>{datos.idVenta}</td>
            <td>{datos.nombreCliente}</td>
            <td>{datos.fechaVenta}</td>
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

export default ItemProductoVenta