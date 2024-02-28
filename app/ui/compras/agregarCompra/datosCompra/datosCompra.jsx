"use client"
import styles from "./datosCompra.module.css"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { addCompra } from "@/app/apiAccions/comprasAccions";

const DatosCompra = ({productos}) => {

    const [compras, setCompras] = useState([{
        producto: "noSelect",
        precio: 0,
        cantidad: 0,
        subtotal: 0
    }]);

    const [comprasCopy, setComprasCopy] = useState([{
        producto: "noSelect",
        precio: 0,
        cantidad: 0,
        subtotal: 0
    }]);

    const [total, setTotal] = useState(0)
    const [cambioSubTotal, setCambioSubTotal] = useState(false)
    const [cambioTotal, setCambioTotal] = useState(false)

    const handleSelect = (e) => {
        const value = e.target.value
        const index = parseInt(e.target.name)
        
        if(value !== "noSelect"){
            const productoSeleccionado = productos.find(element => element.id === parseInt(value))
                    
            setCompras((prevData) => {
                const nuevoValores = [...prevData];
                nuevoValores[index] = {
                    ...nuevoValores[index],
                    ["cantidad"]: 1,
                    ["producto"]: productoSeleccionado.id,
                    ["precio"]: productoSeleccionado.Costo,
                };
                return nuevoValores;
            });
            
        }else{
            setCompras((prevData) => {
                const nuevoValores = [...prevData];
                nuevoValores[index] = {
                    ...nuevoValores[index],
                    ["cantidad"]: "",
                    ["producto"]: "noSelect",
                    ["precio"]: 0,
                };
                return nuevoValores;
            });
        }
        setCambioSubTotal(true);
    }

    const handleInput = (e) => {
        const value = e.target.value
        const index = parseInt(e.target.name)
        setCompras((prevData) => {
            const nuevoValores = [...prevData];
            nuevoValores[index] = {
                ...nuevoValores[index],
                ["cantidad"]: value!==""?parseInt(value):""
            };
            return nuevoValores;
        });
        setCambioSubTotal(true);
    }

    useEffect(() => {
        
        setCompras(prevCompras => {
            return prevCompras.map((compra, index) => {
                const nuevoValor = { ...compra };
                if (nuevoValor.cantidad !== "") {
                    nuevoValor.subtotal = (parseFloat(parseInt(nuevoValor.cantidad) * parseFloat(nuevoValor.precio))).toFixed(2);
                } else {
                    nuevoValor.subtotal = (parseFloat(0)).toFixed(2);
                }
                return nuevoValor;
            });
        });
        setComprasCopy(compras) 
        setCambioSubTotal(false)
        setCambioTotal(true)
    }, [cambioSubTotal])

    useEffect(() => {
        let nuevoTotal = 0;
        compras.forEach(compra => {
            nuevoTotal += parseFloat(compra.subtotal);
        })
        setTotal(nuevoTotal)
        setCambioTotal(false)
    }, [cambioTotal])

    const agregarCompra = () => {
        const nuevaCompra = {
            producto: "noSelect",
            precio: 0,
            cantidad: 0,
            subtotal: 0
        };
    
        setCompras((prevData) => [
            ...prevData,
            nuevaCompra   
        ]);
    }

    const handleForm = async (e) =>{
        e.preventDefault()
        const hayError = compras.some(compra => {
            if(compra.producto !== "noSelect" && compra.cantidad !== ""  && compra.cantidad !== 0){
                return false
            }else{
                return true
            }
        })
        if(hayError){
            console.error("Hay un Error:  NO SE COMPLETARON LOS CAMPOS")
        }else{
            try{
                const resultado = await addCompra(compras)
                if(resultado){
                    console.error("Error al insertar: ", resultado.error)
                }else{
                    console.log("Exito al insertar la compra")
                }
            }catch(e){
                console.error("Error inesperado en el cliente: ", e)
            }
        }
    }

    const condicional = (i) =>{
        const noMostrar = comprasCopy.some((element) => {
            if(i.id === element.producto){
                return true
            }else{
                return false
            }
        })
        return !noMostrar
    }

    return (
        <form onSubmit={handleForm} className={styles.container}>
            <div className={styles.tablaContent}>
                <div className={styles.tabla} id="tabla">
                    <div className={styles.producto}>Producto</div>
                    <div className={styles.precio}>Precio</div>
                    <div className={styles.cantidad}>Cantidad</div>
                    <div className={styles.subtotal}>Subtotal</div>
            
                    {
                        compras.map((compra, index) => (
                            <React.Fragment key={index}>
                                <div>
                                    <select name={index} className={styles.seleccion} onChange={handleSelect} value={compra.producto}>
                                    <option value="noSelect">Seleccione el Producto a Comprar</option>
                                    { compra.producto !== "noSelect" &&
                                        <option value={compras[index].producto}>{productos.find(element => element.id === compras[index].producto).Nombre}</option>
                                    }
                                    {
                                        productos.map((item, index) =>{
                                            if(condicional(item)){
                                                return (
                                                <option value={item.id} key={index}>{item.Nombre}</option>)
                                            }
                                        })
                                    }
                                    </select>
                                </div>
                                <div>{compra.precio}</div>
                                <div className={styles.inputTabla}>
                                    <input type="number" value={compra.cantidad} placeholder="Ingrese la cantidad" name={index} onChange={handleInput}></input>
                                </div>
                                <div>{compra.subtotal}</div>
                            </React.Fragment>
                        ))
                    }
                
                    <div className={styles.botonTabla}>
                        <button type="button" onClick={agregarCompra}>+</button>
                    </div>
                </div>
            </div>
            <div className={styles.infoFinal}>
                <div className={styles.infoTableContent}>
                    <div>SubTotal</div>                   
                    <div>{`S/.${total}`}</div>                   

                    <div>Total</div>                   
                    <div>{`S/.${total}`}</div>                   
                </div>
            </div>
            <div className={styles.botones}>
                <Link href={"/dashboard/compras"}>
                    <button className={styles.cancelar}>CANCELAR</button>
                </Link>
                <button type="submit" className={styles.registrar}>REGISTRAR COMPRA</button>
            </div>
        </form>
    )
}

export default DatosCompra