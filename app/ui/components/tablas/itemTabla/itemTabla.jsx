import styles from "./itemTabla.module.css"
import { MdDelete } from "react-icons/md";
import { MdEditDocument } from "react-icons/md";
import { IoEyeSharp } from "react-icons/io5";
import Link from "next/link";

const ItemTabla = ({ fila, columnas, condicion, acciones, fondo,ruta }) => {
    const obtenerEstilo = (valor, columna) => {
        if(columna === condicion.columna){
            if (condicion.tipo === "numerico") {
                return parseInt(valor) >= 50 ? styles["green"] : parseInt(valor) >= 30 ? styles["yellow"] : styles["red"];
            } else {
                return styles[valor];
            }
        }else{
            return styles[""];
        }
    };
    return (
        <tr className={styles[fondo]}>
            {columnas.map((columna,index) => (
                <td key={index}>
                    <div className={`${styles.contentEstilo}  ${obtenerEstilo(fila[columna.titulo],columna.titulo)}`}>
                        {fila[columna.titulo]}
                    </div>
                </td>
            ))}
            {
                acciones.visible && 
                <td className={styles.botones}>
                    {acciones.delete && <button><MdDelete /></button>}
                    {
                        acciones.edit && 
                        <Link href={`/dashboard/${ruta.pagina}/${fila.Id}/editar${ruta.subpagina}`}>
                            <button><MdEditDocument /></button>
                        </Link>
                    }
                    {
                        acciones.historial && 
                        <Link href={`/dashboard/${ruta.pagina}/${fila.Id}/historial${ruta.subpagina}`}>
                            <button><IoEyeSharp /></button>
                        </Link>
                    }
                </td>
            }
        </tr>
    )
}

export default ItemTabla