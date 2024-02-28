import { readEmpleados } from "@/app/apiAccions/empleadosAccions"
import styles from "@/app/ui/planes/agregarPlan/agregarPlan.module.css"
import FormPlan from "@/app/ui/planes/agregarPlan/formPlan/formPlan"

const AgregarPlan = async () => {

    const resultEmpleados = await readEmpleados("", 1, 10000);
    const empleados = resultEmpleados.result.data

    return (
        <div className={styles.container}>
            <FormPlan empleados={empleados}></FormPlan>        
        </div>
    )
}

export default AgregarPlan