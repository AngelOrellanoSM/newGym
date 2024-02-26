import styles from "../../../../ui/clientes/editarCliente/editarCliente.module.css"
import DatosCliente from "@/app/ui/clientes/editarCliente/datosCliente/datosCliente"
import Link from "next/link";
import { fetchEspecificCliente } from "@/app/apiAccions/clientesAccions";

const EditarCliente = async ({params}) => {
    const result = await fetchEspecificCliente(params.idCliente);
    const {data} = JSON.parse(result);
    return (
        <div className={styles.container}>
            <DatosCliente data={data}></DatosCliente>
            <div className={styles.botones}>
                <Link href={"/dashboard/clientes"}>
                    <button className={styles.cancel}>
                        CANCELAR
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default EditarCliente