"use client"
import styles from "./beneficioTotal.module.css"
import { FaArrowUpWideShort } from "react-icons/fa6";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'ene', ingresos: 0, gastos: 1500 },
    { name: 'feb', ingresos: 2800, gastos: 800 },
    { name: 'mar', ingresos: 4200, gastos: 1200 },
    { name: 'abr', ingresos: 1800, gastos: 2500 },
    { name: 'may', ingresos: 3500, gastos: 1700 },
    { name: 'jun', ingresos: 2000, gastos: 2800 },
    { name: 'jul', ingresos: 4800, gastos: 600 },
    { name: 'ago', ingresos: 3300, gastos: 2000 },
    { name: 'sep', ingresos: 2700, gastos: 1000 },
    { name: 'oct', ingresos: 1500, gastos: 3500 },
    { name: 'nov', ingresos: 4000, gastos: 1800 },
    { name: 'dic', ingresos: 2100, gastos: 2300 },
  ];


const BeneficioTotal = () => {
    return (
        <div className={styles.container}>
            <div className={styles.titulo}>
                <FaArrowUpWideShort />
                <h2>Beneficio Total</h2>
            </div>
            <div className={styles.cantidad}>
                <p>S/.144.600.00</p>
            </div>
            <div className={styles.graphic}>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                    <XAxis dataKey="name" tick={{fill:"#fff", fontSize:"0.825rem", fontWeight:"300"}} axisLine={false} tickLine={false} tickSize={20} interval={2}/>
                    <YAxis tick={{fill:"#fff", fontSize:"0.825rem", fontWeight:"300"}} axisLine={false} tickLine={false} interval={1}/>
                    <Tooltip contentStyle={{backgroundColor:"var(--bgSoft)", border:"none", fontSize:"0.825rem"} } cursor={{fill: 'var(--bg)'}}/>
                    <Bar dataKey="ingresos" fill="#6afabe" />
                    <Bar dataKey="gastos" fill="#54fcf3" />
                </BarChart>
            </ResponsiveContainer>
            </div>
            <div className={styles.foot}>
            <p>Los últimos 12 meses</p>
            <p className={styles.year}>2023</p>
            </div>
        </div>
    )
}

export default BeneficioTotal;