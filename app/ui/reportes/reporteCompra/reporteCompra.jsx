import styles from "./reporteCompra.module.css"
import CardsTop from "../components/cardsTop/cardsTop"
import TablaCompra from "../components/tablaCompra/tablaCompra"

const datosCards = 
    [
        {
            "titulo": "Productos con Menos Stock",
            "tiempo": "",
            "contenido": [
                {
                    "nombre": "Botella de Agua",
                    "cantidad": 5
                },
                {
                    "nombre": "Toalla Deportiva",
                    "cantidad": 7
                },
                {
                    "nombre": "Guantes de Entrenamiento",
                    "cantidad": 8
                },
                {
                    "nombre": "Cuerda para Saltar",
                    "cantidad": 10
                },
                {
                    "nombre": "Pelota de Ejercicio",
                    "cantidad": 12
                },
                {
                    "nombre": "Botella de Agua",
                    "cantidad": 5
                },
                {
                    "nombre": "Toalla Deportiva",
                    "cantidad": 7
                },
                {
                    "nombre": "Guantes de Entrenamiento",
                    "cantidad": 8
                },
                {
                    "nombre": "Cuerda para Saltar",
                    "cantidad": 10
                },
                {
                    "nombre": "Pelota de Ejercicio",
                    "cantidad": 12
                }
            ]
        },
        {
            "titulo": "Productos con más reabastecimiento",
            "tiempo": "mensual",
            "contenido": [
                {
                    "nombre": "Proteína en Polvo",
                    "cantidad": 300
                },
                {
                    "nombre": "Barras Energéticas",
                    "cantidad": 250
                },
                {
                    "nombre": "Suplemento de Creatina",
                    "cantidad": 200
                },
                {
                    "nombre": "Auriculares Deportivos",
                    "cantidad": 180
                },
                {
                    "nombre": "Mochila Deportiva",
                    "cantidad": 150
                }
            ]
        },
        {
            "titulo": "Productos Más Vendidos",
            "tiempo": "mensual",
            "contenido": [
                {
                    "nombre": "Colchoneta de Yoga",
                    "cantidad": 25
                },
                {
                    "nombre": "Banda elástica",
                    "cantidad": 20
                },
                {
                    "nombre": "Pesas de 10kg",
                    "cantidad": 15
                },
                {
                    "nombre": "Mancuernas de 5kg",
                    "cantidad": 12
                },
                {
                    "nombre": "Barra de dominadas",
                    "cantidad": 8
                }
            ]
        }
    ]

const ReporteCompra = () => {
    return (
        <div className={styles.container}>
            <div className={styles.mainCard}>
                <CardsTop datos={datosCards[0]}></CardsTop>
                <div className={styles.secondCards}>
                    <CardsTop datos={datosCards[1]}></CardsTop>
                    <CardsTop datos={datosCards[2]}></CardsTop>
                </div>
            </div>

            <div className={styles.tabla}>
                    <TablaCompra></TablaCompra>
            </div>
        </div>
    )
}

export default ReporteCompra