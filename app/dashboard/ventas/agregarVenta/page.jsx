import { readClientes } from "@/app/apiAccions/clientesAccions"
import styles from "../../../ui/ventas/agregarVenta/agregarVenta.module.css"
import FormVenta from "@/app/ui/ventas/agregarVenta/formVenta/formVenta"
import { readProducto } from "@/app/apiAccions/productosAccions";

const AgregarVenta = async () => {

    const resultadoCliente = await readClientes("", 1, 1000);
    const clientes = resultadoCliente.result.data

    const resultadoProducto = await readProducto("", 1, 1000);
    const productos = resultadoProducto.result.data
    


    return (
        <div className={styles.container}>
            <FormVenta clientes={clientes} productos={productos}></FormVenta>
        </div>
    )
}

export default AgregarVenta