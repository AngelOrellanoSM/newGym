
import styles from "../../../../ui/productos/historialProducto/historialProducto.module.css"

import TablasHistorial from "@/app/ui/productos/historialProducto/tablasHistorial/tablasHistorial"

import DataProducto from "@/app/ui/productos/historialProducto/dataProducto/dataProducto"
import GraficoProducto from "@/app/ui/productos/historialProducto/graficoProducto/graficoProducto"
import { fetchEspecifiProducto, historialProductoDataCompra, historialProductoDataVenta } from "@/app/apiAccions/productosAccions";
import Link from "next/link";
import { datosUtilidadesProducto } from "@/app/apiAccions/generalAccions";



const HistorialProducto = async ({params, searchParams}) => {

    const dataParam = searchParams?.data || "";
    const dataCantidad = searchParams?.cant || 10;
    let page = searchParams?.page || 1;
    page < 1 ? page = 1 : false;
    let totalCompra;
    let totalVenta;
    let ventas;
    let compras

    try{
      const {count, result} = await historialProductoDataVenta(dataParam, page, dataCantidad, params.idProducto);
      totalVenta = count;
      ventas = result
    }catch(e){
      console.error("Error inesperado Cliente: ", e)
    }

    try{
      const {count, result} = await historialProductoDataCompra(dataParam, page, dataCantidad, params.idProducto);
      totalCompra = count;
      compras = result
    }catch(e){
      console.error("Error inesperado Cliente: ", e)
    }

     
    const resultProducto = await fetchEspecifiProducto(params.idProducto)
    const {data} = JSON.parse(resultProducto)

    const datosGrafico = await datosUtilidadesProducto(params.idProducto)
    return (
        <div className={styles.container}>
            
            <DataProducto producto = {data[0]}></DataProducto>
            
            <GraficoProducto datos={datosGrafico}></GraficoProducto>

            <TablasHistorial ventas={ventas} compras={compras}></TablasHistorial>

            <div className={styles.back}>
                <Link href={"/dashboard/productos"}>
                    <button>
                        Regresar
                    </button>
                </Link>
            </div>

        </div>
    )
}

export default HistorialProducto