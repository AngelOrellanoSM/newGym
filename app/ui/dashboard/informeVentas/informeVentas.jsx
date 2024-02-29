"use client"
import styles from "./informeVentas.module.css"
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import { PiCalendarBlankFill } from "react-icons/pi";

const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];
  const COLORS = ['#03fa62', '#f5b403', '#1e07f5', '#7f1dac'];


const InformeVentas = ({dataInforme}) => {
    data[0].value = dataInforme.ventaPlan
    data[1].value = dataInforme.ventaPersonalizado
    data[2].value = dataInforme.ventaClases
    data[3].value = dataInforme.ventaProd
    return (
        <div className={styles.container}>
            <div className={styles.temporal}>
                <select>
                    <option value="mensual">Ultimo Mes</option>
                    <option value="anual">Ultimo Año</option>
                </select>
            </div>
            <div className={styles.graphic}>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart margin={{top:120}}>
                        <Pie
                            data={data}
                            startAngle={180}
                            endAngle={0}
                            innerRadius={130}
                            outerRadius={150}
                            fill="#8884d8"
                            paddingAngle={5}
                            dataKey="value"
                            >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
                <div className={styles.graphicTotal}>
                    <h4 className={styles.graphicTitle}>{dataInforme.totalVenta}</h4>
                    <p>Ventas generales</p>
                </div>
            </div>
            <div className={styles.leyenda}>
                <div className={styles.bolita1}></div>
                <p>Por venta de planes</p>
                <p >{`${parseFloat(dataInforme.ventaPlan/dataInforme.totalVenta).toFixed(2)}%`}</p>
            
                <div className={styles.bolita2}></div>
                <p>Por venta de personalizadas</p>
                <p>{`${parseFloat((dataInforme.ventaPersonalizado/dataInforme.totalVenta)*100).toFixed(2)}%`}</p>
            
                <div className={styles.bolita3}></div>
                <p>Por venta de clases</p>
                <p>{`${parseFloat((dataInforme.ventaClases/dataInforme.totalVenta)*100).toFixed(2)}%`}</p>

                <div className={styles.bolita4}></div>
                <p>Por venta de productos</p>
                <p>{`${parseFloat((dataInforme.ventaProd/dataInforme.totalVenta)*100).toFixed(2)}%`}</p>
            
                <div className={styles.bolita5}></div>
                <p>TOTAL DE VENTAS</p>
                <p >{`${parseFloat((dataInforme.totalVenta/dataInforme.totalVenta)*100).toFixed(0)}%`}</p>
            </div>
        </div>
    )
}

export default InformeVentas;