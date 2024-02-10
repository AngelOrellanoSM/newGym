import styles from "./itemTabla.module.css"

const ItemTabla = ({datos, par}) => {
    return (
        <tr className={`${styles.container} ${par === true?styles.fondoPar:styles.fondoInpar}`}>
            <td><p>{datos.id}</p></td>
            <td><p>{datos.fecha}</p></td>
            <td>
                <div className={styles.adaptador}>
                    <div className={`${styles.itemStatus} ${datos.status === "pendiente"?styles.pendiente:styles.pagado}`}>
                        <div className={styles.bolita}></div>
                        <p>{datos.status}</p>
                    </div>
                </div>
            </td>    
            <td><p>S/.{datos.total}</p></td>
        </tr>
    )
}

export default ItemTabla