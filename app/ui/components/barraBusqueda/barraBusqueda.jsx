"use client"
import styles from "./barraBusqueda.module.css"
import { MdSearch } from "react-icons/md"
import { usePathname, useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"
import { useDebouncedCallback } from "use-debounce"
import { useState } from "react"

const BarraBusqueda = ({placeholder}) => {
    const searchParams = useSearchParams();
    const { replace } = useRouter();
    const pathname = usePathname();
    const handleBusqueda = useDebouncedCallback ((e) => {
        const params = new URLSearchParams(searchParams);
        params.set("page",1);

        if(e.target.value){
            e.target.value.length >=2 && params.set("data",e.target.value);
            
        }else{
            params.delete("data")
        }
        replace(`${pathname}?${params}`);
    } ,300);
    return (
        <div className={styles.container}>
            <MdSearch></MdSearch>
            <input type="text" placeholder={placeholder} className={styles.input} onChange={handleBusqueda}></input>
        </div>
    )
}

export default BarraBusqueda