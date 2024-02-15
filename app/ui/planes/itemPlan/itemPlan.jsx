import styles from "./itemPlan.module.css"


const ItemPlan = ({datos, par}) => {

    return (
        <tr className={`${styles.container} ${par === true?styles.fondoPar:styles.fondoInpar}`}>
            <td>{datos.idPlan}</td>
            <td>{datos.nombre}</td>
            <td>{datos.descripcion}</td>
            <td>
                <div className={styles.adaptador}>
                    <div className={`${styles.itemStock} ${styles[datos.tipo]}`}>
                        <div className={styles.bolita}></div>
                        <p>{datos.tipo}</p>
                    </div>
                </div>
            </td>    
            <td>{datos.encargado}</td>
            <td>{datos.duracion}</td>
            <td>{datos.costo}</td>
        </tr>
    )
}

export default ItemPlan