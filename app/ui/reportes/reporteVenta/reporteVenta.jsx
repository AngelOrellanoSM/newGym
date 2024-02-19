import styles from "./reporteVenta.module.css"
import CardsTop from "@/app/ui/reportes/components/cardsTop/cardsTop"
import GraficoVentas from "@/app/ui/reportes/components/graficoVentas/graficoVentas"
import GraficoClientes from "@/app/ui/reportes/components/graficoClientes/graficoClientes"

const datosCards = 
    [
        {
            "titulo": "Productos más Vendidos",
            "tiempo": "mensual",
            "contenido":
            [
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
        },
        {
            "titulo": "Clases más Vendidas",
            "tiempo": "mensual",
            "contenido":
            [
                {
                "nombre": "Yoga",
                "cantidad": 100
                },
                {
                "nombre": "Pilates",
                "cantidad": 90
                },
                {
                "nombre": "Zumba",
                "cantidad": 80
                },
                {
                "nombre": "Spinning",
                "cantidad": 70
                },
                {
                "nombre": "Crossfit",
                "cantidad": 60
                }
            ]
        },
        {
            "titulo": "Planes más Vendidos",
            "tiempo": "mensual",
            "contenido":
            [
                {
                "nombre": "Plan Básico",
                "cantidad": 200
                },
                {
                "nombre": "Plan Premium",
                "cantidad": 150
                },
                {
                "nombre": "Plan Familiar",
                "cantidad": 120
                },
                {
                "nombre": "Plan Estudiante",
                "cantidad": 80
                },
                {
                "nombre": "Plan Empresarial",
                "cantidad": 50
                }
            ]
        }
    ]


const ReporteVenta = () => {
    return (
        <div className={styles.container}>
            <div className={styles.cardTopContent}>
                <CardsTop datos={datosCards[0]}></CardsTop>
                <CardsTop datos={datosCards[1]}></CardsTop>
                <CardsTop datos={datosCards[2]}></CardsTop>
            </div>

            <div className={styles.graficosContent}>
                <GraficoVentas></GraficoVentas>
                <GraficoClientes></GraficoClientes>
            </div>

            <div className={styles.tablaContent}>

            </div>
        </div>
    )
}

export default ReporteVenta