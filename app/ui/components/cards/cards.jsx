import styles from "./cards.module.css"


const Cards = ({datos}) => {
    return (
        <div className={styles.container}>
            <div className={`${styles.iconContent} ${styles[datos.color]}`}>
                {datos.icon}
            </div>
            <div className={styles.tituloContent}>
                <p className={styles.titulo}>{datos.titulo}</p>
                <p className={styles.cantidad}>{datos.cantidad}</p>
            </div>
        </div>
    )
}

export default Cards