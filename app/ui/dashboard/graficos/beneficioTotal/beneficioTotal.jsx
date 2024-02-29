"use client"
import styles from "./beneficioTotal.module.css"
import { FaArrowUpWideShort } from "react-icons/fa6";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const BeneficioTotal = ({totalBeneficio, datos}) => {
    
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
            <div className={styles.titulo}>
                <FaArrowUpWideShort />
                <h2>Beneficio Total</h2>
            </div>
            <div className={styles.cantidad}>
                <p>{`S/.${totalBeneficio}`}</p>
            </div>
            <div className={styles.graphic}>
            <ResponsiveContainer>
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
                    <XAxis 
                        dataKey="name" 
                        tick={{fill:"#fff", fontSize:"0.825rem", fontWeight:"300"}} 
                        axisLine={false} 
                        tickLine={false} 
                        interval={2}/>
                    <YAxis 
                        tick={{fill:"#fff", fontSize:"0.825rem", fontWeight:"300"}} 
                        axisLine={false} 
                        tickLine={false} 
                        interval={1}/>
                    <Tooltip 
                        contentStyle={{backgroundColor:"var(--bgSoft)", border:"none", fontSize:"0.825rem"} } 
                        cursor={{fill: 'var(--bg)'}}/>
                    <Bar dataKey="ingresos" fill="#6afabe" />
                    <Bar dataKey="gastos" fill="#54fcf3" />
                </BarChart>
            </ResponsiveContainer>
            </div>
            <div className={styles.foot}>
            <p>Los últimos 12 meses</p>
            <p className={styles.year}>2024</p>
            </div>
        </div>
    )
}

export default BeneficioTotal;