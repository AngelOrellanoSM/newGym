"use server"
import { redirect } from "next/navigation";
import createSupaBaseServerClient from "../../lib/supabase/server"

export const readProducto = async (data, page, cantidad) =>{
    const rangInit = 0 + parseInt(cantidad) * (parseInt(page) - 1);
    const rangEnd = parseInt(cantidad) * parseInt(page) - 1;
    const supabase = await createSupaBaseServerClient();
    let result;
    let count;
    if(data === ""){
        result = await supabase.from("Producto").select("*").order("id", {ascending:true}).range(rangInit, rangEnd);
        const tamaño = await supabase.from("Producto").select("*").order("id", {ascending:true});
        count = tamaño.data.length;
    }else{
        result = await supabase.from("Producto").select("*").ilike("Nombre", `%${data}%`).order("id", {ascending:true}).range(rangInit, rangEnd);
        const tamaño = await supabase.from("Producto").select("*").ilike("Nombre", `%${data}%`).order("id", {ascending:true})
        count = tamaño.data.length;
    }
    return {count , result};
}

export const fetchEspecifiProducto = async (id) =>{
    const supabase = await createSupaBaseServerClient();
    const result = await supabase.from("Producto").select("*").eq("id",id)
    return JSON.stringify(result)
}

export const updateProducto = async (formData, id) => {
    
    const jsonInsert = {};
    if(formData.nombre !== ""){
        jsonInsert["Nombre"] = formData.nombre
    }
    if(formData.descripcion !== ""){
        jsonInsert["Descripcion"] = formData.descripcion
    }
    if(formData.costo !== ""){
        jsonInsert["Costo"] = parseFloat(formData.costo)
    }
    if(formData.venta !== ""){
        jsonInsert["Venta"] = parseFloat(formData.venta)
    }
    
    try{
        const supabase = await createSupaBaseServerClient();
        const {data, error} = await supabase.from("Producto").update(jsonInsert).eq("id", id).select()
        if(error){
            console.error("Error al actualizar", error)
            return JSON.stringify(error)
        }else{
            console.log("Actualizacion Exitosa")
        }
    }catch(error){
        console.log("Error inesperado al actualizar: ", error)
    }
    redirect("/dashboard/productos")
}

export const addProducto = async (formData) =>{
    const jsonInsert = {};

    if(formData.nombre !== "" && formData.descripcion !== "" && formData.costo !== "" &&formData.venta !== "" && formData.stock !== ""){
        jsonInsert["Nombre"] = formData.nombre
        jsonInsert["Descripcion"] = formData.descripcion
        jsonInsert["Costo"] = formData.costo
        jsonInsert["Venta"] = formData.venta
        jsonInsert["Stock"] = formData.stock
    }else{
        return "Faltan datos"
    }
    try{
        const supabase = await createSupaBaseServerClient()
        const {data,error} = await supabase.from("Producto").insert(jsonInsert).select()
        if(error){
            console.error("Error al insertar servidor: ", error)
            return error
        }else{
            console.log("Se inserto correctamente")
        }
    }catch(e){
        console.error("Error inesperado al insertar: ", e)
    }
    redirect("/dashboard/productos")
}

export const historialProductoDataVenta = async (dataParam, page, dataCantidad, idProducto) => {
    const rangInit = 0 + parseInt(dataCantidad) * (parseInt(page) - 1);
    const rangEnd = parseInt(dataCantidad) * parseInt(page) - 1;
    const supabase = await createSupaBaseServerClient();
    let result;
    let count;
    if(dataParam === ""){

        const resultProductoVentas = await supabase.from("Venta").select("id, FechaDeVenta, Cantidad, Estatus, Total, Cliente(id, Nombre)").eq("idProducto", idProducto).order("id", {ascending:true})


        result = resultProductoVentas.data.slice(rangInit, rangEnd)
        count = resultProductoVentas.data.length;

    }else{
        const resultProductoVentas = await supabase.from("Venta").select("id, FechaDeVenta, Cantidad, Estatus, Total, Cliente(id, Nombre)").eq("idProducto", idProducto).ilike("Cliente.Nombre", `%${dataParam}%`).order("id", {ascending:true}).not("Cliente", "is", null)
       


        result = resultProductoVentas.data.slice(rangInit, rangEnd)
        count = resultProductoVentas.data.length;
    }
    return {count , result};
}

export const historialProductoDataCompra = async (dataParam, page, dataCantidad, idProducto) => {
    const rangInit = 0 + parseInt(dataCantidad) * (parseInt(page) - 1);
    const rangEnd = parseInt(dataCantidad) * parseInt(page) - 1;
    const supabase = await createSupaBaseServerClient();
    let result = [];
    let count = 0;
    if(dataParam === ""){

        const resultProductoVentas = await supabase.from("Compra").select("id, FechaDeCompra, Cantidad, Estatus, Total").eq("idProducto", idProducto).order("id", {ascending:true})


        result = resultProductoVentas.data.slice(rangInit, rangEnd)
        count = resultProductoVentas.data.length;

    }
    return {count , result};
}