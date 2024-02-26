"use client"
import { usePathname, useSearchParams } from "next/navigation";
import styles from "./paginacion.module.css"
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";



const Paginacion = ({total = 10}) => {
    const searchParams = useSearchParams();
    const {replace} = useRouter();
    const pathname =  usePathname();

    const cantidad = searchParams.get("cant") || 10;
    let page = searchParams.get("page") || 1;
    page < 1 ? page = 1 : false;

    const params = new URLSearchParams(searchParams);

    const hasPrev = cantidad * (parseInt(page) - 1) > 0;
    const hasNext = cantidad * (parseInt(page) - 1) + cantidad < total;

    const rangInit = 0 + parseInt(cantidad) * (parseInt(page) - 1);
    const rangEnd = parseInt(cantidad) * parseInt(page) - 1;

    const handleChangePage = (tipo) => {
        tipo === "prev" ? params.set("page", parseInt(page) - 1 ):params.set("page", parseInt(page) + 1);

        replace(`${pathname}?${params}`)
    } 
    

    return (
        <div className={styles.container}>
            <div className={styles.cantidad}>
                <p>{`${rangInit + 1} - ${(rangEnd + 1) < total ? rangEnd + 1 : total } de ${total}`}</p>
            </div>
            <div className={styles.botones}>
                <button disabled={!hasPrev} onClick={() => handleChangePage("prev")}><FaArrowLeft /></button>
                <button disabled={!hasNext} onClick={() => handleChangePage("next")}><FaArrowRight /></button>
            </div>
        </div>
    )
}

export default Paginacion