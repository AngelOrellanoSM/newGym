import styles from "../../../ui/clientes/agregarClientes/agregarClientes.module.css"
import { IoPersonSharp } from "react-icons/io5";
import { SlEnvolopeLetter } from "react-icons/sl";
import { RiMailSendLine } from "react-icons/ri";
import { TbGenderBigender } from "react-icons/tb";
import { IoCalendar } from "react-icons/io5";
import Link from "next/link";



const AgregarClientes = () => {
    return (
        <div className={styles.container}>
            <div className={styles.addClient}>
                <div className={styles.itemContainer}>
                    <div className={styles.titulo}>
                        <h2>Informacion personal</h2>
                        <h4>Ingresar toda la información que el cliente este dispuesto a dar.</h4>
                    </div>
                    <div className={styles.inputContainer}>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <IoPersonSharp />
                                <p>Nombre Completo</p>
                            </div>
                            <input placeholder="Ingresa el nombre"></input>
                        </div>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <SlEnvolopeLetter />
                                <p>DNI</p>
                            </div>
                            <input placeholder="Ingresa el DNI"></input>
                        </div>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <TbGenderBigender  />
                                <p>Sexo</p>
                            </div>
                            <input placeholder="Ingresa el genero"></input>
                        </div> 
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <IoCalendar   />
                                <p>Fecha de Nacimiento</p>
                            </div>
                            <input placeholder="Ingresa la fecha de nacimiento"></input>
                        </div>                   
                    </div>
                </div>
                <div className={styles.itemContainer}>
                    <div className={styles.titulo}>
                        <h2>Informacion de Contacto</h2>
                        <h4>Ingresa la información de contacto del cliente, para enviar info.</h4>
                    </div>
                    <div className={styles.inputContainer}>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <RiMailSendLine  />
                                <p>Correo Electronico</p>
                            </div>
                            <input placeholder="Ingresa el correo electronico"></input>
                        </div>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <RiMailSendLine  />
                                <p>Celular</p>
                            </div>
                            <input placeholder="Ingresa el número de celular"></input>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.botones}>
                <button className={styles.add}>AGREGAR</button>
                <Link href={"/dashboard/clientes"}>
                    <button className={styles.cancel}>
                        CANCELAR
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default AgregarClientes