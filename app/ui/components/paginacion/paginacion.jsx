import styles from "./paginacion.module.css"
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";



const Paginacion = () => {
    return (
        <div className={styles.container}>
            <div className={styles.cantidad}>
                <p>1 - 10 de 10</p>
            </div>
            <div className={styles.botones}>
                <button><FaArrowLeft /></button>
                <button><FaArrowRight /></button>
            </div>
        </div>
    )
}

export default Paginacion