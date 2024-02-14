import styles from "../../../../ui/productos/editarProducto/editarProducto.module.css"
import { IoPersonSharp } from "react-icons/io5";
import { SlEnvolopeLetter } from "react-icons/sl";
import { RiMailSendLine } from "react-icons/ri";
import Link from "next/link";


const productos = [
    {
        "idProducto": 1,
        "nombre": "Camiseta deportiva",
        "descripcion": "Camiseta transpirable de secado rápido para actividades deportivas.",
        "costo": 15.50,
        "precioVenta": 29.99,
        "stock": 50,
        "fecha_ing": "2023-05-10"
      },
      {
        "idProducto": 2,
        "nombre": "Pantalones de yoga",
        "descripcion": "Pantalones elásticos y cómodos ideales para la práctica de yoga.",
        "costo": 20.75,
        "precioVenta": 39.99,
        "stock": 30,
        "fecha_ing": "2023-06-15"
      },
      {
        "idProducto": 3,
        "nombre": "Zapatillas para correr",
        "descripcion": "Zapatillas ligeras con amortiguación para corredores.",
        "costo": 45.00,
        "precioVenta": 89.99,
        "stock": 20,
        "fecha_ing": "2023-07-20"
      },
      {
        "idProducto": 4,
        "nombre": "Mancuernas de 5 libras",
        "descripcion": "Par de mancuernas recubiertas de vinilo de 5 libras cada una.",
        "costo": 10.00,
        "precioVenta": 19.99,
        "stock": 40,
        "fecha_ing": "2023-08-25"
      },
      {
        "idProducto": 5,
        "nombre": "Pelota de yoga",
        "descripcion": "Pelota de yoga resistente para ejercicios de estabilidad y equilibrio.",
        "costo": 8.50,
        "precioVenta": 16.99,
        "stock": 60,
        "fecha_ing": "2023-09-30"
      },
      {
        "idProducto": 6,
        "nombre": "Banda de resistencia",
        "descripcion": "Banda elástica de resistencia para entrenamiento de fuerza y flexibilidad.",
        "costo": 5.25,
        "precioVenta": 9.99,
        "stock": 70,
        "fecha_ing": "2023-10-05"
      },
      {
        "idProducto": 7,
        "nombre": "Botella de agua deportiva",
        "descripcion": "Botella de plástico sin BPA con boquilla de beber a prueba de fugas.",
        "costo": 3.00,
        "precioVenta": 5.99,
        "stock": 100,
        "fecha_ing": "2023-11-10"
      },
      {
        "idProducto": 8,
        "nombre": "Cuerda para saltar",
        "descripcion": "Cuerda de saltar ajustable con mangos ergonómicos de espuma.",
        "costo": 4.75,
        "precioVenta": 8.99,
        "stock": 80,
        "fecha_ing": "2023-12-15"
      },
      {
        "idProducto": 9,
        "nombre": "Toalla de microfibra",
        "descripcion": "Toalla de microfibra suave y absorbente, ideal para el gimnasio o la playa.",
        "costo": 7.50,
        "precioVenta": 14.99,
        "stock": 50,
        "fecha_ing": "2024-01-20"
      },
      {
        "idProducto": 10,
        "nombre": "Bolsa de gimnasio",
        "descripcion": "Bolsa espaciosa con múltiples compartimentos para llevar equipo de entrenamiento.",
        "costo": 12.00,
        "precioVenta": 24.99,
        "stock": 40,
        "fecha_ing": "2024-02-25"
      },
]


const EditarProducto = ({params}) => {
    const producto_id = params.idProducto;
    const producto = productos.find((item)=>{return item.idProducto.toString() === producto_id});
    return (
        <div className={styles.container}>
            <div className={styles.addClient}>
                <div className={styles.itemContainer}>
                    <div className={styles.titulo}>
                        <h2>Informacion del Producto</h2>
                        <h4>Sea cuidadoso al cambiar la información del producto</h4>
                    </div>
                    <div className={styles.inputContainer}>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <IoPersonSharp />
                                <p>Nombre del Producto</p>
                            </div>
                            <input placeholder={producto.nombre}></input>
                        </div>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <SlEnvolopeLetter />
                                <p>Stock</p>
                            </div>
                            <input placeholder={producto.stock} disabled></input>
                        </div>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <SlEnvolopeLetter />
                                <p>Descripcion</p>
                            </div>
                            <textarea placeholder={producto.descripcion}></textarea>
                        </div>     
                    </div>
                </div>
                <div className={styles.itemContainer}>
                    <div className={styles.titulo}>
                        <h2>Informacion Contable</h2>
                        <h4>Ingresa la información relacionado a las finanzas del producto</h4>
                    </div>
                    <div className={styles.inputContainer}>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <RiMailSendLine  />
                                <p>Costo de compra ( S/. )</p>
                            </div>
                            <input type="number" placeholder={producto.costo}></input>
                        </div>
                        <div className={styles.ingresoContent}>
                            <div className={styles.label}>
                                <RiMailSendLine  />
                                <p>Precio de Venta ( S/. )</p>
                            </div>
                            <input type="number" placeholder={producto.precioVenta}></input>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.botones}>
                <button className={styles.add}>AGREGAR</button>
                <Link href={"/dashboard/productos"}>
                    <button className={styles.cancel}>
                        CANCELAR
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default EditarProducto