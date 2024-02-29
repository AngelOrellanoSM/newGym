"use client"
import styles from "./graficoCliente.module.css"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { "name": "ene", "cantidad": 4 },
  { "name": "feb", "cantidad": 6 },
  { "name": "mar", "cantidad": 9 },
  { "name": "abr", "cantidad": 8 },
  { "name": "may", "cantidad": 2 },
  { "name": "jun", "cantidad": 7 },
  { "name": "jul", "cantidad": 5 },
  { "name": "ago", "cantidad": 3 },
  { "name": "sep", "cantidad": 10 },
  { "name": "oct", "cantidad": 1 },
  { "name": "nov", "cantidad": 4 },
  { "name": "dic", "cantidad": 8 },
  ];

const GraficoCliente = () => {
    return (
        <div className={styles.graphContent}>
            <div className={styles.tituloGrafico}>
                <h2>Registro de compras en el año de PEPITO</h2>
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
                        <Area type="monotone" dataKey="cantidad" stroke="#6afabe"  fillOpacity={1} fill="url(#colorGastos)"/>
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default GraficoCliente