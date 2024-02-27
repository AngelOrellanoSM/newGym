import styles from "../../../../ui/ventas/editarVenta/editarVenta.module.css"
import Link from "next/link";
import DatosVenta from "@/app/ui/ventas/editarVenta/datosVenta/datosVenta"
import { fetchEspecificVenta } from "@/app/apiAccions/ventasAccions";

const EditarVenta = async ({params}) => {
    const result = await fetchEspecificVenta(params.idVenta);
    const {data} = JSON.parse(result);

    return (
        <div className={styles.container}>
            <DatosVenta venta={data[0]}></DatosVenta>
            <div className={styles.botones}>
                <Link href={"/dashboard/ventas"}>
                    <button className={styles.cancel}>
                        CANCELAR
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default EditarVenta