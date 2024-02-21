"use client"
import styles from "./totalSesiones.module.css"
import { AiFillClockCircle } from "react-icons/ai";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { name: '12am', visitas: 56 },
    { name: '1am', visitas: 23 },
    { name: '2am', visitas: 89 },
    { name: '3am', visitas: 12 },
    { name: '4am', visitas: 34 },
    { name: '5am', visitas: 78 },
    { name: '6am', visitas: 45 },
    { name: '7am', visitas: 90 },
    { name: '8am', visitas: 67 },
    { name: '9am', visitas: 10 },
    { name: '10am', visitas: 55 },
    { name: '11am', visitas: 88 },
    { name: '12pm', visitas: 33 },
    { name: '1pm', visitas: 77 },
    { name: '2pm', visitas: 21 },
    { name: '3pm', visitas: 44 },
    { name: '4pm', visitas: 99 },
    { name: '5pm', visitas: 30 },
    { name: '6pm', visitas: 68 },
    { name: '7pm', visitas: 15 },
    { name: '8pm', visitas: 79 },
    { name: '9pm', visitas: 25 },
    { name: '10pm', visitas: 62 },
    { name: '11pm', visitas: 87 },
  ];



const totalSesiones = () => {
    return (
        <div className={styles.container}>
            <div className={styles.titulo}>
                <AiFillClockCircle />
                <h2>Total de Nuevos Clientes</h2>
            </div>
            <p className={styles.cantidad}>400</p>
            <div className={styles.graphic}>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
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
                        <XAxis dataKey="name" tick={{fill:"#fff", fontSize:"0.825rem", fontWeight:"300"}} axisLine={false} tickLine={false} tickSize={20} interval={2} padding={{ left: 20 }} />
                        <YAxis tick={{fill:"#fff", fontSize:"0.825rem", fontWeight:"300"}} axisLine={false} tickLine={false} interval={1} padding={{ right: 20 }} />
                        <Tooltip contentStyle={{backgroundColor:"var(--bgSoft)", border:"none", fontSize:"0.825rem"} } cursor={{fill: 'var(--bg)'}}/>
                        <Line type="monotone" dataKey="visitas" stroke="#8884d8" activeDot={{ r: 8 }} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div className={styles.foot}>
                <p>1.2K clientes</p>
                <p className={styles.year}>2023</p>
            </div>
        </div>
    )
}

export default totalSesiones;