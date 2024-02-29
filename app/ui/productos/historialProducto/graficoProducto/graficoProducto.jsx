"use client"
import styles from "./graficoProducto.module.css"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'ene', ventas: 0, compras: 1500 },
    { name: 'feb', ventas: 2800, compras: 800 },
    { name: 'mar', ventas: 4200, compras: 1200 },
    { name: 'abr', ventas: 1800, compras: 2500 },
    { name: 'may', ventas: 3500, compras: 1700 },
    { name: 'jun', ventas: 2000, compras: 2800 },
    { name: 'jul', ventas: 4800, compras: 600 },
    { name: 'ago', ventas: 3300, compras: 2000 },
    { name: 'sep', ventas: 2700, compras: 1000 },
    { name: 'oct', ventas: 1500, compras: 3500 },
    { name: 'nov', ventas: 4000, compras: 1800 },
    { name: 'dic', ventas: 2100, compras: 2300 },
  ];

const GraficoProducto = () => {
    return (
        <div className={styles.containerGraph}>
            <h2>Grafico compras VS ventas del producto PEPITO</h2>
            <div className={styles.subTitulo}>
                <p className={styles.cantidad}>Utilidades S/.140.00</p>
                <div className={styles.leyenda}>
                    <div className={styles.contLeyenda}>
                        <div className={styles.bolita1}></div>
                        <p>Ventas</p>
                    </div>    
                    <div className={styles.contLeyenda}>
                        <div className={styles.bolita2}></div>
                        <p>Compras</p>
                    </div>
                    <div className={styles.temporal}>
                        <select>
                            <option value="mensual">Ultimo Mes</option>
                            <option value="anual">Ultimo Año</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className={styles.graph}>
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                    >
                        <defs>
                            <linearGradient id="colorIngreso" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#2c375cb0" stopOpacity={0.5}/>
                            <stop offset="95%" stopColor="#2c375cb0" stopOpacity={0}/>
                            </linearGradient>
                            <linearGradient id="colorGastos" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#073ef079" stopOpacity={0.5}/>
                            <stop offset="95%" stopColor="#073ef079" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="name" axisLine={false} tickLine={false} padding={{ left: 20 }} tick={{fill:"#fff", fontSize:"0.825rem", fontWeight:"300"}}/>
                        <YAxis tick={{fill:"#fff", fontSize:"0.825rem", fontWeight:"300"}} axisLine={false} tickLine={false}/>
                        <Tooltip contentStyle={{backgroundColor:"var(--bgSoft)", border:"none"}}/>
                        <Area type="monotone" dataKey="ventas" stroke="#6afabe"  fillOpacity={1} fill="url(#colorGastos)"/>
                        <Area type="monotone" dataKey="compras" stroke="#54fcf3" fillOpacity={1} fill="url(#colorIngreso)"/>
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default GraficoProducto