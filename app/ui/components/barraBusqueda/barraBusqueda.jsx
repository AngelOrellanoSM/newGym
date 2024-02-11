import styles from "./barraBusqueda.module.css"
import { MdSearch } from "react-icons/md"

const BarraBusqueda = ({placeholder}) => {
    return (
        <div className={styles.container}>
            <MdSearch></MdSearch>
            <input type="text" placeholder={placeholder} className={styles.input}></input>
        </div>
    )
}

export default BarraBusqueda