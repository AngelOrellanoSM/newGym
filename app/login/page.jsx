import Image from "next/image";
import styles from "../ui/login/login.module.css"
import { IoEnterOutline } from "react-icons/io5";
import Link from "next/link";


const LoginPage = () => {
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
                <div className={styles.inputs}>
                    <input placeholder="@ Ingresa tu correo"></input>
                    <input placeholder="Ingresa tu contraseña"></input>
                </div>
                <div className={styles.boton}>
                    <Link href={"/dashboard"}>                
                        <button>
                            <IoEnterOutline />
                            Ingresar
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;