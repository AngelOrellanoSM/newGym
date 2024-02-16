import styles from "../../ui/perfil/perfil.module.css"
import { IoPersonSharp } from "react-icons/io5";
import { SlEnvolopeLetter } from "react-icons/sl";
import { RiMailSendLine } from "react-icons/ri";
import { TbGenderBigender } from "react-icons/tb";
import { IoCalendar } from "react-icons/io5";
import { RiLockPasswordLine } from "react-icons/ri";
import Link from "next/link";


const empleado = 
    {
        "idEmpleado": 15,
        "dni": "56789012O",
        "nombre": "Raquel Sánchez",
        "genero": "femenino",
        "fecha_nac": "1990-05-18",
        "correo": "raquel@example.com",
        "telefono": "555-567-8901",
        "rol": "administrador",
        "fecha_ing": "2013-02-28",
        "contraseña": "contraseñaAdmin404"
      }
const perfil = () => {
    return (
        <div className={styles.container}>
            <div className={styles.addClient}>
                <div className={styles.itemContainer}>
                    <div className={styles.titulo}>
                        <h2>Informacion personal</h2>
                        <h4>Ingresar la informacion del Personal Nuevo</h4>
                    </div>
                    <div className={styles.inputContainer}>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <IoPersonSharp />
                                <p>Nombre Completo</p>
                            </div>
                            <input placeholder={empleado.nombre}></input>
                        </div>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <SlEnvolopeLetter />
                                <p>DNI</p>
                            </div>
                            <input placeholder={empleado.dni}></input>
                        </div>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <TbGenderBigender  />
                                <p>Genero</p>
                            </div>
                            <input placeholder={empleado.genero} disabled></input>
                        </div> 
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <IoCalendar   />
                                <p>Fecha de Nacimiento</p>
                            </div>
                            <input disabled placeholder={empleado.fecha_nac}></input>
                        </div>                   
                    </div>
                </div>
                <div className={styles.itemContainer}>
                    <div className={styles.titulo}>
                        <h2>Informacion Relevante</h2>
                        <h4>Información de gran interes para el gimnasio</h4>
                    </div>
                    <div className={styles.inputContainer}>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <RiMailSendLine  />
                                <p>Correo Electronico</p>
                            </div>
                            <input placeholder={empleado.correo}></input>
                        </div>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <RiMailSendLine  />
                                <p>Celular</p>
                            </div>
                            <input placeholder={empleado.telefono}></input>
                        </div>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <RiMailSendLine  />
                                <p>Rol</p>
                            </div>
                            <input placeholder={empleado.rol} disabled></input>
                        </div>
                        
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <RiLockPasswordLine   />
                                <p>Contraseña</p>
                            </div>
                            <input placeholder={empleado.contraseña}></input>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.botones}>
                <button className={styles.add}>GUARDAR CAMBIOS</button>
            </div>
        </div>
    )
}

export default perfil