import DatosPlan from "../../../../ui/planes/editarPlan/datosPlan/datosPlan";
import styles from "../../../../ui/planes/editarPlan/editarPlan.module.css"

import {fetchEspecifiPlanes} from "../../../../apiAccions/planesAccions"
import Link from "next/link";

const EditarPlan = async ({params}) =>{
    const result = await fetchEspecifiPlanes(params.id);
    const {data} = JSON.parse(result);
    return (
        <div className={styles.container}>
            <DatosPlan data={data}></DatosPlan>
            <div className={styles.botones}>
                <Link href={"/dashboard/planes"}>
                    <button className={styles.cancel}>
                        CANCELAR
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default EditarPlan