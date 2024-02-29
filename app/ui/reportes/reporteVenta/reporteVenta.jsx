import styles from "./reporteVenta.module.css"
import CardsTop from "@/app/ui/reportes/components/cardsTop/cardsTop"
import GraficoClientes from "@/app/ui/reportes/components/graficoClientes/graficoClientes"
import TablaVenta from "@/app/ui/reportes/components/tablaVenta/tablaVenta"
import InformeVentas from "../../dashboard/informeVentas/informeVentas"
import { claseMasVendida, fetchInformeData, planMasVendido, productoMasVendido } from "@/app/apiAccions/generalAccions"

const datosCards = 
    [
        {
            "titulo": "Productos más Vendidos",
            "tiempo": "mensual",
            "contenido":
            [
                
            ]
        },
        {
            "titulo": "Clases más Vendidas",
            "tiempo": "mensual",
            "contenido":
            [
                
            ]
        },
        {
            "titulo": "Planes más Vendidos",
            "tiempo": "mensual",
            "contenido":
            [
               
            ]
        }
    ]

const ReporteVenta = async () => {
    const dataInforme = await fetchInformeData()

    const topProductos = await productoMasVendido()
    datosCards[0].contenido = []
    topProductos.map((item) => {
        datosCards[0].contenido.push({
            "nombre": item.Nombre,
            "cantidad": item.cantidad
        }) 
    })

    const topClases = await claseMasVendida()
    datosCards[1].contenido = []
    topClases.map((item) => {
        datosCards[1].contenido.push({
            "nombre": item.Nombre,
            "cantidad": item.total
        }) 
    })

    const topPlanes = await planMasVendido()
    datosCards[2].contenido = []
    topPlanes.map((item) => {
        datosCards[2].contenido.push({
            "nombre": item.Nombre,
            "cantidad": item.total
        }) 
    })
    return (
        <div className={styles.container}>
            <div className={styles.cardTopContent}>
                <CardsTop datos={datosCards[0]}></CardsTop>
                <CardsTop datos={datosCards[1]}></CardsTop>
                <CardsTop datos={datosCards[2]}></CardsTop>
            </div>

            <div className={styles.graficosContent}>
                <InformeVentas dataInforme={dataInforme}></InformeVentas>
                <GraficoClientes></GraficoClientes>
            </div>

            
            <TablaVenta></TablaVenta>
            
        </div>
    )
}

export default ReporteVenta