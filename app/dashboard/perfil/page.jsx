import styles from "../../ui/perfil/perfil.module.css"
import readUserSession from "@/lib/action";
import { fetchPerfil } from "@/app/apiAccions/empleadosAccions";
import FormPerfil from "@/app/ui/perfil/formPerfil/formPerfil"


const perfil = async () => {
   
    const session = await readUserSession()
    const correo = session.data.session.user.email
    const resultPerfil = await fetchPerfil(correo);
    const perfil = JSON.parse(resultPerfil).data[0]
    

    return (
        <div className={styles.container}>
            <FormPerfil perfil={perfil}></FormPerfil>
        </div>
    )
}

export default perfil