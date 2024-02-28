"use server"
import { redirect } from "next/navigation";
import createSupaBaseServerClient from "../../lib/supabase/server"

export const readCompra = async (data, page, cantidad) =>{
    const rangInit = 0 + parseInt(cantidad) * (parseInt(page) - 1);
    const rangEnd = parseInt(cantidad) * parseInt(page) - 1;
    const supabase = await createSupaBaseServerClient();
    let result;
    let count;
    try{
        if(data === ""){
            result = await supabase.from("Compra").select("id, FechaDeCompra, Producto(id, Nombre, Costo), Cantidad, Total, Estatus").order("id", {ascending:true}).range(rangInit, rangEnd);
            
            const tamaño = await supabase.from("Compra").select("*").order("id", {ascending:true});
            count = tamaño.data.length;
        }else{
            const ids = await supabase.from("Compra").select("idProducto")
            const productoCompras = await supabase.from("Producto").select("id, Nombre").in("id", ids.data.map((item) =>  {return (item.idProducto)})).ilike("Nombre", `%${data}%`)
            count = productoCompras.data.length


            result = await supabase.from("Compra").select("id, FechaDeCompra, Producto(id, Nombre, Costo), Cantidad, Total, Estatus").in("idProducto", productoCompras.data.map((item) => {return item.id})).order("id", {ascending:true}).range(rangInit, rangEnd);
        }
        return {count , result};
    }catch(e){
        console.error("error inesperado servidor: ", e)
    }
}

export const readDatos = async()=>{
    const supabase = await createSupaBaseServerClient();
    
    const resultCompras = await supabase.from("Compra").select("*")
    const CantCompras  = resultCompras.data.length

    const resultPendientes= await supabase.from("Compra").select("*").eq("Estatus","pendiente")
    const CantPendientes = resultPendientes.data.length

    let total = 0;;
    resultCompras.data.map((item) => {
        if(item.Estatus !== "pendiente"){
            total = total + parseFloat(item.Total)
        }
    })

    const gastosTotales = total

    return {gastosTotales,CantCompras, CantPendientes}
}

export const fetchEspecificCompra = async (id) =>{
    const supabase = await createSupaBaseServerClient();
    const result = await supabase.from("Compra").select("id, FechaDeCompra, Producto(id, Nombre, Costo), Cantidad, Total, Estatus").eq("id",id)
    return JSON.stringify(result)
}

export const updateCompra = async (estado, id, cantidad) => {
    
    const jsonInsert = {};
    if(estado !== "pendiente"){
        jsonInsert["Estatus"] = estado
    }else{
        return {error: "No se puede cambiar de Pagado a Pendiente"}
    }
    
    try{
        const supabase = await createSupaBaseServerClient();
        const {data, error} = await supabase.from("Compra").update(jsonInsert).eq("id", id).select()

        const resultStock = await supabase.from("Producto").select("Stock").eq("id", data[0].idProducto)

        const stockProduct = resultStock.data[0].Stock
        const nuevoStock = stockProduct + cantidad

        const resultActualizar = await supabase.from("Producto").update({"Stock": nuevoStock}).eq("id", data[0].idProducto).select()

        if(error || resultActualizar.error){
            console.error("Error al actualizar", error)
            return JSON.stringify(error)
        }else{
            console.log("Actualizacion Exitosa")
        }
    }catch(error){
        console.log("Error inesperado al actualizar: ", error)
    }
    redirect("/dashboard/compras")
}





export const addCompra = async (formData) =>{

    const jsonInsert = {};
    let errorDatos ="";
    const supabase = await createSupaBaseServerClient()
    for(const element of formData){
        
        if(element.producto !== "noSelect" && element.cantidad !== ""  && element.cantidad !== 0){
            jsonInsert["idProducto"] = element.producto
            jsonInsert["Cantidad"] = element.cantidad
            jsonInsert["Total"] = element.subtotal
            jsonInsert["Estatus"] = "pendiente"

            try{
                const {error} = await supabase.from("Compra").insert(jsonInsert).select()
                if(error){
                    errorDatos = error;
                }else{
                    console.log("Se inserto con exito")
                }
            }catch(e){
                console.error("error inesperado servidor: ", e)
            }

        }else{
            errorDatos = "Faltan Datos en el Servidor"
        }
    }
    if(errorDatos !== ""){
        return {error: errorDatos};
    }
    redirect("/dashboard/compras")   
}




