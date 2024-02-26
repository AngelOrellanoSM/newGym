import styles from "../../../../ui/productos/editarProducto/editarProducto.module.css"
import Link from "next/link";
import { fetchEspecifiProducto } from "@/app/apiAccions/productosAccions";
import DatosProducto from "@/app/ui/productos/editarProducto/datosProducto/datosProducto"


const EditarProducto = async ({params}) => {
    const result = await fetchEspecifiProducto(params.idProducto);
    const {data} = JSON.parse(result)
    return (
        <div className={styles.container}>
            <DatosProducto data={data}></DatosProducto>
            <div className={styles.botones}>
                <Link href={"/dashboard/productos"}>
                    <button className={styles.cancel}>
                        CANCELAR
                    </button>
                </Link>
            </div>
        </div>
    )
}
export default EditarProducto