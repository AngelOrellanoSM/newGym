"use server"
import { redirect } from "next/navigation";
import createSupaBaseServerClient from "../../lib/supabase/server"

export const readVenta = async (data, page, cantidad) =>{
    const rangInit = 0 + parseInt(cantidad) * (parseInt(page) - 1);
    const rangEnd = parseInt(cantidad) * parseInt(page) - 1;
    const supabase = await createSupaBaseServerClient();
    let result;
    let count;
    if(data === ""){
        result = await supabase.from("Venta").select("id, FechaDeVenta, Cliente(id, Nombre), Producto(id, Nombre), Cantidad, Estatus, Total, Plan(id, Nombre)").order("id", {ascending:true}).range(rangInit, rangEnd);
        
        const tamaño = await supabase.from("Venta").select("*").order("id", {ascending:true});
        count = tamaño.data.length;
    }else{
        const ids = await supabase.from("Venta").select("idCliente")
        const clientesVentas = await supabase.from("Cliente").select("id, Nombre").in("id", ids.data.map((item) =>  {return (item.idCliente)})).ilike("Nombre", `%${data}%`)
        count = clientesVentas.data.length


        result = await supabase.from("Venta").select("id, FechaDeVenta, Cliente(id, Nombre), Producto(id, Nombre), Cantidad, Estatus, Total, Plan(id, Nombre)").in("idCliente", clientesVentas.data.map((item) => {return item.id})).order("id", {ascending:true}).range(rangInit, rangEnd);
    }
    return {count , result};
}

export const readDatos = async()=>{
    const supabase = await createSupaBaseServerClient();
    
    const resultVentas = await supabase.from("Venta").select("*")
    const CantVentas  = resultVentas.data.length

    const resultPendientes= await supabase.from("Venta").select("*").eq("Estatus","pendiente")
    const CantPendientes = resultPendientes.data.length

    const resultTotales = await supabase.from("Venta").select("*").eq("Estatus","pagado")
    let total = 0;;
    resultTotales.data.map((item) => (
        total = total + parseFloat(item.Total)
    ))

    const ingresoTotales = total

    return {ingresoTotales,CantVentas, CantPendientes}
}

export const fetchEspecificVenta = async (id) =>{
    const supabase = await createSupaBaseServerClient();
    const result = await supabase.from("Venta").select("id, FechaDeVenta, Cliente(id, Nombre), Producto(id, Nombre), Cantidad, Estatus, Total, Plan(id, Nombre)").eq("id",id)
    return JSON.stringify(result)
}

export const updateVenta = async (formData, id) => {
    
    const jsonInsert = {};
    if(formData !== "pendiente"){
        jsonInsert["Estatus"] = formData
    }else{
        return {Error: "No se puede cambiar de Pagado a Pendiente"}
    }
    
    try{
        const supabase = await createSupaBaseServerClient();
        const {data, error} = await supabase.from("Venta").update(jsonInsert).eq("id", id).select()
        if(error){
            console.error("Error al actualizar", error)
            return JSON.stringify(error)
        }else{
            console.log("Actualizacion Exitosa")
        }
    }catch(error){
        console.log("Error inesperado al actualizar: ", error)
    }
    redirect("/dashboard/ventas")
}




export const addVenta = async (formData) =>{
    const jsonInsert = {};

    if(formData.idCliente !== "" && formData.idProducto !== "" && formData.cantidad !== "" &&formData.total !== "" && formData.status !== ""){
        jsonInsert["idCliente"] = formData.idCliente
        jsonInsert["idProducto"] = formData.idProducto
        jsonInsert["Cantidad"] = formData.cantidad
        jsonInsert["Total"] = formData.total
        jsonInsert["Estatus"] = formData.status
    }else{
        return "Faltan datos"
    }
   
    try{
        const supabase = await createSupaBaseServerClient()
        const {data,error} = await supabase.from("Venta").insert(jsonInsert).select()
        if(error){
            console.error("Error al insertar servidor: ", error)
            return error
        }else{
            console.log("Se inserto correctamente")
        }
    }catch(e){
        console.error("Error inesperado al insertar: ", e)
    }
    redirect("/dashboard/ventas")
}




