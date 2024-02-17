"use client"
import Link from "next/link";
import styles from "../../../ui/compras/agregarCompra/agregarCompra.module.css"
import React from "react";

const AgregarCompra = () => {
    
    let idInput = 0;
    let subtotal = 0;

    const calcTotal = () => {
        
    }

    const addCompra = () => {
        const tabla = document.getElementById("tabla");
        const fragmento = document.createDocumentFragment();

        
        const nuevoDiv = document.createElement("div");
        nuevoDiv.textContent = `Mancuerda de 5lb`;
        fragmento.appendChild(nuevoDiv);

        const nuevoDiv2 = document.createElement("div");
        nuevoDiv2.textContent = `S/.1500.00`;
        fragmento.appendChild(nuevoDiv2);


        const nuevoDiv3 = document.createElement("div");
        nuevoDiv3.classList.add(styles.inputTabla);
        const nuevoInput = document.createElement("input");
        nuevoInput.type = "number";
        idInput = idInput + 1;
        nuevoInput.id = idInput;
        nuevoInput.placeholder = `Ingrese la cantidad`;
        nuevoDiv3.appendChild(nuevoInput);
        fragmento.appendChild(nuevoDiv3);


        const nuevoDiv4 = document.createElement("div");
        nuevoDiv4.textContent = `S/1500.00`;
        fragmento.appendChild(nuevoDiv4);
        

        tabla.insertBefore(fragmento, tabla.lastChild);
    }

    return (
        <div className={styles.container}>
            <div className={styles.tablaContent}>
                <div className={styles.tabla} id="tabla">
                    <div className={styles.producto}>Producto</div>
                    <div className={styles.precio}>Precio</div>
                    <div className={styles.cantidad}>Cantidad</div>
                    <div className={styles.subtotal}>Subtotal</div>
            
                    <div>Mancuerda de 5lb</div>
                    <div>S/.1500.00</div>
                    <div className={styles.inputTabla}>
                        <input type="number" placeholder="Ingrese la cantidad" onChange={calcTotal} id={idInput}></input>
                    </div>
                    <div>S/1500.00</div>
                
                    <div className={styles.botonTabla}>
                        <button onClick={addCompra}>+</button>
                    </div>
                </div>
            </div>
            <div className={styles.infoFinal}>
                <div className={styles.infoTableContent}>
                    <div>SubTotal</div>                   
                    <div>S/.1500.00</div>                   

                    <div>Total</div>                   
                    <div>S/.1500.00</div>                   
                </div>
            </div>
            <div className={styles.botones}>
                <Link href={"/dashboard/compras"}>
                    <button className={styles.cancelar}>CANCELAR</button>
                </Link>
                <button className={styles.registrar}>REGISTRAR COMPRA</button>
            </div>
        </div>
    )
}

export default AgregarCompra