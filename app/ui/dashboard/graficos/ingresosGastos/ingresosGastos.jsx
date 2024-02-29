"use client"

import styles from "./ingresosGastos.module.css"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { PiCalendarBlankFill } from "react-icons/pi";


const IngresosGastos = ({totalBeneficio, datos}) => {
    const data = []
    datos.map((item) => {
        data.push({
            "name": item.mes,
            "ingresos": item.ingresos,
            "gastos": item.gastos
        })
    })
    data.reverse()
    return (
        <div className={styles.container}>
            <h2>Total de ingreso</h2>
            <div className={styles.subTitulo}>
                <p className={styles.cantidad}>{`S/.${totalBeneficio}`}</p>
                <div className={styles.leyenda}>
                    <div className={styles.contLeyenda}>
                        <div className={styles.bolita1}></div>
                        <p>Ingresos</p>
                    </div>    
                    <div className={styles.contLeyenda}>
                        <div className={styles.bolita2}></div>
                        <p>Gastos</p>
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
                        <Area type="monotone" dataKey="ingresos" stroke="#6afabe"  fillOpacity={1} fill="url(#colorGastos)"/>
                        <Area type="monotone" dataKey="gastos" stroke="#54fcf3" fillOpacity={1} fill="url(#colorIngreso)"/>
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default IngresosGastos;