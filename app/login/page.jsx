import Image from "next/image";
import styles from "../ui/login/login.module.css"
import LoginForm from "../ui/login/loginForm/loginForm"
import readUserSession from "@/lib/action/index"
import { redirect } from "next/navigation";

const LoginPage = async () => {

    const {data} = await readUserSession();
    console.log(data)
    if(data.session){
        return redirect("/dashboard")
    }

    return (
        <div className={styles.container}>
            <div className={styles.loginContent}>
                <div className={styles.titulo}>
                    <Image src="/noavatar.png" width={60} height={60} alt="imagenUsuario"></Image>
                    <p>Titanium Gym</p>
                </div>
                <div className={styles.subtitulo}>
                    <h2>Bienvenido de vuelta</h2>
                    <p>Solo para administradores</p>
                </div>
                <LoginForm></LoginForm>
            </div>
        </div>
    )
}

export default LoginPage;