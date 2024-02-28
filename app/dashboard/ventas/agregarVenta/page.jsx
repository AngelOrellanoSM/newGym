import { readClientes } from "@/app/apiAccions/clientesAccions"
import styles from "../../../ui/ventas/agregarVenta/agregarVenta.module.css"
import FormVenta from "@/app/ui/ventas/agregarVenta/formVenta/formVenta"
import { readProducto } from "@/app/apiAccions/productosAccions";
import { readPlanes } from "@/app/apiAccions/planesAccions";

const AgregarVenta = async () => {

    const resultadoCliente = await readClientes("", 1, 1000);
    const clientes = resultadoCliente.result.data

    const resultadoProducto = await readProducto("", 1, 1000);
    const productos = resultadoProducto.result.data
    
    const resultadoPlanes = await readPlanes("", 1 , 1000);
    const planes = resultadoPlanes.result.data

    return (
        <div className={styles.container}>
            <FormVenta clientes={clientes} productos={productos} planes={planes}></FormVenta>
        </div>
    )
}

export default AgregarVenta