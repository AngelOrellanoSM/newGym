"use client"
import { useEffect, useState } from "react";
import styles from "./graficoProducto.module.css"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const GraficoProducto = ({datos}) => {
    const [total, setTotal] = useState(0)
    const data = []
    let temporalTotal = 0;
    datos.map((item) => {
        const ingresos = item.ingresos || 0
        const egresos = item.gastos || 0
        data.push({
            "name": item.mes,
            "ventas": item.ingresos,
            "compras": item.gastos
        })
        temporalTotal = parseFloat(temporalTotal) + parseFloat(ingresos) - parseFloat(egresos)
    })
    data.reverse()
    useEffect(() => {
        setTotal(temporalTotal)
    }, [datos])
    return (
        <div className={styles.containerGraph}>
            <h2>Grafico compras VS ventas del producto</h2>
            <div className={styles.subTitulo}>
                <p className={styles.cantidad}>{`Utilidades S/.${parseFloat(total).toFixed(2)}`}</p>
                <div className={styles.leyenda}>
                    <div className={styles.contLeyenda}>
                        <div className={styles.bolita1}></div>
                        <p>Ventas</p>
                    </div>    
                    <div className={styles.contLeyenda}>
                        <div className={styles.bolita2}></div>
                        <p>Compras</p>
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