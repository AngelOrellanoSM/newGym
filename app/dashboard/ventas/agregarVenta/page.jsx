import styles from "../../../ui/ventas/agregarVenta/agregarVenta.module.css"
import { IoPersonSharp } from "react-icons/io5";
import { SlEnvolopeLetter } from "react-icons/sl";
import { RiMailSendLine } from "react-icons/ri";
import Link from "next/link";

const AgregarVenta = () => {
    return (
        <div className={styles.container}>
            <div className={styles.addClient}>
                <div className={styles.itemContainer}>
                    <div className={styles.titulo}>
                        <h2>Informacion de la Venta</h2>
                        <h4>Ingresar la información basica de la venta realizada.</h4>
                    </div>
                    <div className={styles.inputContainer}>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <IoPersonSharp />
                                <p>Nombre del Cliente</p>
                            </div>
                            <input placeholder="Ingresa el nombre del Cliente"></input>
                        </div>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <IoPersonSharp />
                                <p>Nombre del producto</p>
                            </div>
                            <input placeholder="Ingresa el nombre del producto"></input>
                        </div>
                    </div>
                </div>
                <div className={styles.itemContainer}>
                    <div className={styles.titulo}>
                        <h2>Informacion Contable</h2>
                        <h4>Ingresa la información relacionado a las finanzas de la venta</h4>
                    </div>
                    <div className={styles.inputContainer}>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <RiMailSendLine  />
                                <p>Cantidad Vendida</p>
                            </div>
                            <input type="number" placeholder="Ingresa la cantidad vendida"></input>
                        </div>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <RiMailSendLine  />
                                <p>Precio de Venta Total ( S/. )</p>
                            </div>
                            <input type="number" placeholder="Ingresa el precio Total"></input>
                        </div>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <RiMailSendLine  />
                                <p>Status</p>
                            </div>
                            <select>
                                <option value="noSelect">Seleccione el status de la venta</option>
                                <option value="pendiente">Pendiente</option>
                                <option value="pagado">Pagado</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.botones}>
                <button className={styles.add}>AGREGAR</button>
                <Link href={"/dashboard/ventas"}>
                    <button className={styles.cancel}>
                        CANCELAR
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default AgregarVenta