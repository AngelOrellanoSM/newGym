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
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


const InformeVentas = () => {
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
                    <h4 className={styles.graphicTitle}>23400</h4>
                    <p>Ventas generales</p>
                </div>
            </div>
            <div className={styles.leyenda}>
            <div className={styles.bolita1}></div>
                <p>Por suscripciones</p>
                <p >50%</p>
            
                <div className={styles.bolita2}></div>
                <p>Por sesiones personalizadas</p>
                <p>15%</p>
            
                <div className={styles.bolita3}></div>
                <p>Por clases</p>
                <p>35%</p>
            
                <div className={styles.bolita4}></div>
                <p>TOTAL DE VENTAS</p>
                <p >100%</p>
            </div>
        </div>
    )
}

export default InformeVentas;