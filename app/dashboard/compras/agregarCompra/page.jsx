import { readProducto } from "@/app/apiAccions/productosAccions"
import styles from "../../../ui/compras/agregarCompra/agregarCompra.module.css"
import DatosCompra from "@/app/ui/compras/agregarCompra/datosCompra/datosCompra"

const AgregarCompra = async () => {
    const {result} = await readProducto("", 1, 10000);
    const productos = result.data

    return (
        <div className={styles.container}>
            <DatosCompra productos={productos}></DatosCompra>
        </div>
    )
}

export default AgregarCompra