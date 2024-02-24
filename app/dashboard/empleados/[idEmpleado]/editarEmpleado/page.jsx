
import styles from "@/app/ui/empleados/editarEmpleado/editarEmpleado.module.css"
import Link from "next/link";

import { fetchEspecificEmpleado } from "@/app/apiAccions/empleadosAccions";
import DatosEmpleados from "@/app/ui/empleados/editarEmpleado/datosEmpleado/datosEmpleado"
const EditarEmpleado = async ({params}) => {
    
    const result = await fetchEspecificEmpleado(parseInt(params.idEmpleado));
    const {data} = JSON.parse(result);
    console.log(data);
    
    return (
        <div className={styles.container}>
            <DatosEmpleados data={data}></DatosEmpleados>
            <div className={styles.botones}>
                <button className={styles.add}>AGREGAR</button>
                <Link href={"/dashboard/empleados"}>
                    <button className={styles.cancel}>
                        CANCELAR
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default EditarEmpleado