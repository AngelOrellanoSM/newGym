import styles from "./dataCliente.module.css"
import { IoPersonSharp } from "react-icons/io5";
import { SlEnvolopeLetter } from "react-icons/sl";
import { RiMailSendLine } from "react-icons/ri";
import { TbGenderBigender } from "react-icons/tb";
import { IoCalendar } from "react-icons/io5";

const DataCliente = ({cliente}) => {

    return (
        <div className={styles.addClient}>
            <div className={styles.itemContainer}>
                <div className={styles.tituloInfo}>
                    <h2>Informacion personal</h2>
                </div>
                <div className={styles.inputContainer}>
                    <div className={styles.ingresoContent}>
                        <div className={styles.label}>
                            <IoPersonSharp />
                            <p>Nombre Completo</p>
                        </div>
                        <input placeholder={cliente.Nombre} disabled></input>
                    </div>
                    <div className={styles.ingresoContent}>
                        <div className={styles.label}>
                            <SlEnvolopeLetter />
                            <p>DNI</p>
                        </div>
                        <input placeholder={cliente.Dni} disabled></input>
                    </div>
                    <div className={styles.ingresoContent}>
                        <div className={styles.label}>
                            <TbGenderBigender  />
                            <p>Sexo</p>
                        </div>
                        <input placeholder={cliente.Genero} disabled></input>
                    </div> 
                    <div className={styles.ingresoContent}>
                        <div className={styles.label}>
                            <IoCalendar   />
                            <p>Fecha de Nacimiento</p>
                        </div>
                        <input placeholder={cliente.FechaNacimiento} disabled></input>
                    </div>                   
                </div>
            </div>
            <div className={styles.itemContainer}>
                <div className={styles.tituloInfo}>
                    <h2>Informacion de Contacto</h2>
                </div>
                <div className={styles.inputContainer}>
                    <div className={styles.ingresoContent}>
                        <div className={styles.label}>
                            <RiMailSendLine  />
                            <p>Correo Electronico</p>
                        </div>
                        <input placeholder={cliente.Correo} disabled></input>
                    </div>
                    <div className={styles.ingresoContent}>
                        <div className={styles.label}>
                            <RiMailSendLine  />
                            <p>Celular</p>
                        </div>
                        <input placeholder={cliente.Celular} disabled></input>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DataCliente