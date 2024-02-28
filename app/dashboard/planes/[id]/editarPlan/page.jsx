import DatosPlan from "../../../../ui/planes/editarPlan/datosPlan/datosPlan";
import styles from "../../../../ui/planes/editarPlan/editarPlan.module.css"

import {fetchEspecifiPlanes} from "../../../../apiAccions/planesAccions"
import Link from "next/link";
import { readEmpleados } from "@/app/apiAccions/empleadosAccions";

const EditarPlan = async ({params}) =>{
    const result = await fetchEspecifiPlanes(params.id);
    const {data} = JSON.parse(result);

    const resultEmpleados = await readEmpleados("", 1 , 10000);
    const empleados = resultEmpleados.result.data
    return (
        <div className={styles.container}>
            <DatosPlan data={data} empleados={empleados}></DatosPlan>
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