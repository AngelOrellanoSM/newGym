import styles from "./tablas.module.css"
import { PiNutFill } from "react-icons/pi";
import ItemTabla from "@/app/ui/components/tablas/itemTabla/itemTabla";

const Tablas = ({datos}) => {
    return (
        <div className={styles.container}>
            <table className={styles.tabla}>
                <thead>
                    <tr>
                        {
                            datos.columnas.map((columna, index) => (
                                <td style={{width: columna.width}} key={index}>
                                    <div className={styles.titulo}>
                                        <span className={styles.tituloIcon}>{columna.icon}</span>
                                        {columna.titulo}
                                    </div>
                                </td>
                            ))
                        }
                        {
                            datos.acciones.visible && <td className={styles.titulo}>
                                <PiNutFill  />
                                Acciones
                            </td>
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        datos.contenido.map((fila,index) => (
                            <ItemTabla key={index} 
                            fila={fila} 
                            columnas={datos.columnas} 
                            condicion={datos.condicion} 
                            acciones={datos.acciones}
                            fondo={(index+1)%2 === 0?"inpar":"par" }
                            ruta={datos.acciones.ruta}></ItemTabla>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Tablas