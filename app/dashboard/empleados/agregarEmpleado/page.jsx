import styles from "@/app/ui/empleados/agregarEmpleado/agregarEmpleado.module.css"
import Link from "next/link";
import FormAgregarEmpleado from "@/app/ui/empleados/agregarEmpleado/formAgregarEmpleado/formAgregarEmpleado"

const AgregarEmpleado = () => {
    
    return (
        <div className={styles.container}>
            <FormAgregarEmpleado></FormAgregarEmpleado>
            <div className={styles.botones}>
                <Link href={"/dashboard/empleados"}>
                    <button className={styles.cancel}>
                        CANCELAR
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default AgregarEmpleado