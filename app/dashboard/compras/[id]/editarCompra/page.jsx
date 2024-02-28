import { fetchEspecificCompra } from "@/app/apiAccions/comprasAccions";
import styles from "../../../../ui/compras/editarCompra/editarCompra.module.css"
import FormCompra from "@/app/ui/compras/editarCompra/formCompra/formCompra"


const EditarCompra = async ({params}) => {
    const resultCompra = await fetchEspecificCompra(params.id)
    const {data} = JSON.parse(resultCompra)
    return (
        <div className={styles.container}>
            <FormCompra compra={data[0]}></FormCompra>
        </div>
    )
}

export default EditarCompra;