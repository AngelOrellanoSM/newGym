import styles from "../../../ui/clientes/agregarClientes/agregarClientes.module.css"
import { IoPersonSharp } from "react-icons/io5";
import { SlEnvolopeLetter } from "react-icons/sl";
import { RiMailSendLine } from "react-icons/ri";
import { TbGenderBigender } from "react-icons/tb";
import { IoCalendar } from "react-icons/io5";



const AgregarClientes = () => {
    return (
        <div className={styles.container}>
            <div className={styles.itemContainer}>
                <div className={styles.personalTitulo}>
                    <h2>Informacion personal</h2>
                    <h4>Ingresar toda la información que el cliente este dispuesto a dar.</h4>
                </div>
                <div className={styles.personalContainer}>
                    <div className={styles.nombre}>
                        <div className={styles.label}>
                            <IoPersonSharp />
                            <p>Nombre Completo</p>
                        </div>
                        <input placeholder="NombrePrueba"></input>
                    </div>
                    <div className={styles.dni}>
                        <div className={styles.label}>
                            <SlEnvolopeLetter />
                            <p>DNI</p>
                        </div>
                        <input placeholder="DNIPrueba"></input>
                    </div>
                    <div className={styles.sexo}>
                        <div className={styles.label}>
                            <TbGenderBigender  />
                            <p>Sexo</p>
                        </div>
                        <input placeholder="Masculino"></input>
                    </div> 
                    <div className={styles.fecha}>
                        <div className={styles.label}>
                            <IoCalendar   />
                            <p>Fecha de Nacimiento</p>
                        </div>
                        <input placeholder="01.04.2002"></input>
                    </div>                   
                </div>
            </div>
            <div className={styles.itemContainer}>
                <div className={styles.contactoTitulo}>
                    <h2>Informacion de Contacto</h2>
                    <h4>Ingresa la información de contacto del cliente, para enviar info.</h4>
                </div>
                <div className={styles.contactoContainer}>
                    <div className={styles.correo}>
                        <div className={styles.label}>
                            <RiMailSendLine  />
                            <p>Correo Electronico</p>
                        </div>
                        <input placeholder="DNIPrueba"></input>
                    </div>
                    <div className={styles.celular}>
                        <div className={styles.label}>
                            <RiMailSendLine  />
                            <p>Celular</p>
                        </div>
                        <input placeholder="+51 912345678"></input>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AgregarClientes