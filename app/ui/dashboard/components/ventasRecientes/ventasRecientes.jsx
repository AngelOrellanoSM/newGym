import styles from "./ventasRecientes.module.css"
import { PiCalendarBlankFill } from "react-icons/pi";
import { GrStatusGood } from "react-icons/gr";
import ItemTabla from "./itemTabla/itemTabla"
const datos = [
    {
      "id": "#1234",
      "fecha": "dec30, 10.07AM",
      "status": "pagado",
      "total": 329.40
    },
    {
      "id": "#5678",
      "fecha": "jan15, 09.30AM",
      "status": "pendiente",
      "total": 412.75
    },
    {
      "id": "#9012",
      "fecha": "feb02, 11.15AM",
      "status": "pagado",
      "total": 376.21
    },
    {
      "id": "#3456",
      "fecha": "mar20, 02.45PM",
      "status": "pendiente",
      "total": 438.89
    },
    {
      "id": "#7890",
      "fecha": "apr05, 08.20AM",
      "status": "pagado",
      "total": 491.13
    },
    {
      "id": "#2345",
      "fecha": "may10, 01.55PM",
      "status": "pendiente",
      "total": 389.62
    },
  ]



const VentasRecientes = () => {
    return (
        <div className={styles.container}>
            <div className={styles.titulo}>
                <h2>Ventas Recientes</h2>
                <div className={styles.calendarContent}>
                    <PiCalendarBlankFill />
                    <p>Enero 2024</p>
                </div>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td className={styles.venta}><p>Venta</p></td>
                        <td className={styles.fecha}>
                            <div className={styles.tablaFecha}>
                                <PiCalendarBlankFill />
                                <p>Fecha</p>
                            </div>
                        </td> 
                        <td className={styles.status}>
                            <div className={styles.tablaStatus}>
                                <GrStatusGood />
                                <p>Status</p>
                            </div>
                        </td> 
                        <td  className={styles.total}><p>Total</p></td>
                    </tr>
                </thead>
                <tbody>
                    {
                        datos.map((item, index) => (
                            <ItemTabla par={index%2===0?true:false} datos={item} key={item.id}></ItemTabla>  
                        ))
                    }   
                </tbody>
            </table>
        </div>
    )
}

export default VentasRecientes;