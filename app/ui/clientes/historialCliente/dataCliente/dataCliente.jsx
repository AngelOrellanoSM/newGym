import styles from "./dataCliente.module.css"
import { IoPersonSharp } from "react-icons/io5";
import { SlEnvolopeLetter } from "react-icons/sl";
import { RiMailSendLine } from "react-icons/ri";
import { TbGenderBigender } from "react-icons/tb";
import { IoCalendar } from "react-icons/io5";


const clientes = [
    {
        "idCliente":1,
        "nombre": "Juan Perez",
        "celular": "555-123-4567",
        "correo": "juan@example.com",
        "fecha": "2024-02-10",
        "status": "activo",
        "fechaNac": "1985-03-15",
        "genero": "masculino",
        "dni": "12345678"
      },
      {
        "idCliente":2,
        "nombre": "Maria Rodriguez",
        "celular": "555-987-6543",
        "correo": "maria@example.com",
        "fecha": "2024-01-25",
        "status": "interesado",
        "fechaNac": "1990-07-20",
        "genero": "femenino",
        "dni": "23456789"
      },
      {
        "idCliente":3,
        "nombre": "Pedro Gomez",
        "celular": "555-456-7890",
        "correo": "pedro@example.com",
        "fecha": "2023-12-15",
        "status": "antiguo",
        "fechaNac": "1978-11-10",
        "genero": "masculino",
        "dni": "34567890"
      },
      {
        "idCliente":4,
        "nombre": "Laura Martinez",
        "celular": "555-789-0123",
        "correo": "laura@example.com",
        "fecha": "2024-02-05",
        "status": "activo",
        "fechaNac": "1992-05-25",
        "genero": "femenino",
        "dni": "45678901"
      },
      {
        "idCliente":5,
        "nombre": "Carlos Sanchez",
        "celular": "555-234-5678",
        "correo": "carlos@example.com",
        "fecha": "2023-11-20",
        "status": "interesado",
        "fechaNac": "1987-09-30",
        "genero": "masculino",
        "dni": "56789012"
      },
      {
        "idCliente":6,
        "nombre": "Ana Lopez",
        "celular": "555-678-9012",
        "correo": "ana@example.com",
        "fecha": "2024-01-10",
        "status": "activo",
        "fechaNac": "1980-12-12",
        "genero": "femenino",
        "dni": "67890123"
      },
      {
        "idCliente":7,
        "nombre": "Luis Ramirez",
        "celular": "555-345-6789",
        "correo": "luis@example.com",
        "fecha": "2023-10-05",
        "status": "antiguo",
        "fechaNac": "1975-08-05",
        "genero": "masculino",
        "dni": "78901234"
      },
      {
        "idCliente":8,
        "nombre": "Sofia Fernandez",
        "celular": "555-890-1234",
        "correo": "sofia@example.com",
        "fecha": "2024-02-01",
        "status": "interesado",
        "fechaNac": "1995-04-18",
        "genero": "femenino",
        "dni": "89012345"
      },
      {
        "idCliente":9,
        "nombre": "Elena Castro",
        "celular": "555-456-7890",
        "correo": "elena@example.com",
        "fecha": "2023-09-15",
        "status": "activo",
        "fechaNac": "1988-10-30",
        "genero": "femenino",
        "dni": "90123456"
      },
      {
        "idCliente":10,
        "nombre": "Diego Herrera",
        "celular": "555-012-3456",
        "correo": "diego@example.com",
        "fecha": "2023-12-20",
        "status": "interesado",
        "fechaNac": "1983-06-22",
        "genero": "masculino",
        "dni": "01234567"
      },
  ]

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