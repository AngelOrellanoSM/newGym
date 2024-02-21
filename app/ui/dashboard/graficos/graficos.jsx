import styles from "./graficos.module.css"
import BeneficioTotal from "./beneficioTotal/beneficioTotal"
import IngresosGastos from "./ingresosGastos/ingresosGastos"
import TotalSesiones from "./totalSesiones/totalSesiones"

const Graficos = () => {
    return (
        <div className={styles.container}>
            <div className={styles.graficoPrimero}>
                <IngresosGastos></IngresosGastos>
            </div>
            <div className={styles.graficoSegundo}>
                <BeneficioTotal></BeneficioTotal>
                <TotalSesiones></TotalSesiones>
            </div>
        </div>
    )
}

export default Graficos;