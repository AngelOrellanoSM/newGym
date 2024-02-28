"use client"
import Link from "next/link"
import BarraBusqueda from "../../barraBusqueda/barraBusqueda"
import styles from "./headTabla.module.css"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

const HeadTabla = ({pagina, subpagina}) => {
    const searchParams = useSearchParams();
    const {replace} = useRouter();
    const pathname = usePathname();
    const cant= searchParams.get("cant") || 10;
    const params = new URLSearchParams(searchParams)
    const handleSelect = (e) => {
        params.set("page", 1)
        params.set("cant",parseInt(e.target.value))
        replace(`${pathname}?${params}`)
    }

    return (
        <div className={styles.tablaContent}>
                <div className={styles.titulo}>
                    <div className={styles.searchContent}>
                        <h2>{`Todos los ${pagina}`}</h2>
                        <BarraBusqueda placeholder={`Buscar todos los ${pagina}`} ></BarraBusqueda>
                    </div>
                    <div className={styles.funcionalidades}>
                        <div className={styles.cantPaginas}>
                            <p>Filas por página</p>
                            <select onChange={handleSelect}>
                                <option value="10">10</option>
                                <option value="20">20</option>
                                <option value="30">30</option>
                            </select>
                        </div>
                        <Link href={`/dashboard/${pagina}/agregar${subpagina}`}>
                            <button>
                                {`Agregar ${subpagina}`}
                            </button>
                        </Link>
                    </div>
                </div>
        </div>
    )
}

export default HeadTabla