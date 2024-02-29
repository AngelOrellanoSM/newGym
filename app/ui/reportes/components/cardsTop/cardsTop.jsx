import styles from "./cardsTop.module.css"


const CardsTop  = ({datos}) => {
    return (
        <div className={styles.container}>
            <div className={styles.titulo}>
                <h2>{datos.titulo}</h2>
                
            </div>
            <div className={styles.tabla}>
                {
                    datos.contenido.map((item,index)=>(
                        <div className={styles.tablaContent} key={index}>
                            <div>{item.nombre}</div>
                            <div>{item.cantidad}</div>
                        </div>
                    ))
                }
            </div>    
        </div>
    )
}

export default CardsTop