import styles from "./cards.module.css"
import { MdOutlineArrowOutward } from "react-icons/md";
import { FiArrowDownRight } from "react-icons/fi";


const Cards = ({informacion}) => {
    return (
        <div className={styles.container}>
            <div className={styles.titulo}>
                {informacion.icon}
                <p>{informacion.title}</p>
            </div>    
            <div className={styles.contenido}>
                <p className={styles.cant}>{informacion.cant}</p>
                <div className={styles.adaptador}>
                    <div className={`${styles.contenedorBeneficio} ${informacion.estado === "positivo" ? styles.positivo : styles.negativo}`}>
                        <p>{informacion.ben}</p>
                        {informacion.estado === "positivo" ? <MdOutlineArrowOutward /> : <FiArrowDownRight />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards;