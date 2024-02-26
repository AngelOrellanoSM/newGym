"use server"
import { redirect } from "next/navigation";
import createSupaBaseServerClient from "../../lib/supabase/server"

export const readPlanes = async (data, page, cantidad) =>{
    const rangInit = 0 + parseInt(cantidad) * (parseInt(page) - 1);
    const rangEnd = parseInt(cantidad) * parseInt(page) - 1;
    const supabase = await createSupaBaseServerClient();
    let result;
    let count;
    if(data === ""){
        result = await supabase.from("Plan").select("*").order("id", {ascending:true}).range(rangInit, rangEnd);
        const tamaño = await supabase.from("Plan").select("*").order("id", {ascending:true});
        count = tamaño.data.length;
    }else{
        result = await supabase.from("Plan").select("*").ilike("Nombre", `%${data}%`).order("id", {ascending:true}).range(rangInit, rangEnd);
        const tamaño = await supabase.from("Plan").select("*").ilike("Nombre", `%${data}%`).order("id", {ascending:true})
        count = tamaño.data.length;
    }
    return {count , result};
}

export const addPlanes = async (formData) =>{
    const jsonInsert = {};

    if(formData.nombre !== "" && formData.descripcion !== "" && formData.costo !== "" &&formData.tipo !== "noSelect" && formData.duracion !== ""){
        jsonInsert["Nombre"] = formData.nombre
        jsonInsert["Descripcion"] = formData.descripcion
        jsonInsert["Costo"] = formData.costo
        jsonInsert["Tipo"] = formData.tipo
        jsonInsert["Duracion"] = formData.duracion
    }else{
        return "Faltan datos generales"
    }
    console.log(formData.tipo)
    if(formData.tipo === "clase" && formData.encargado === ""){
        return "Faltan datos particulares"
    }else if(formData.tipo === "clase" && formData.encargado !== "")
    {
        jsonInsert["Encargado"] = formData.encargado
    }

    try{
        const supabase = await createSupaBaseServerClient()
        const {data,error} = await supabase.from("Plan").insert(jsonInsert).select()
        if(error){
            console.error("Error al insertar servidor: ", error)
            return error
        }else{
            console.log("Se inserto correctamente")
        }
    }catch(e){
        console.error("Error inesperado al insertar: ", e)
    }
    redirect("/dashboard/planes")
}


export const fetchEspecifiPlanes = async (id) =>{
    const supabase = await createSupaBaseServerClient();
    const result = await supabase.from("Plan").select("*").eq("id",id)
    return JSON.stringify(result)
}

export const updatePlanes = async (formData, id) => {
    
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
    if(formData.duracion !== ""){
        jsonInsert["Venta"] = formData.venta
    }
    if(formData.encargado !== ""){
        jsonInsert["Encargado"] = formData.encargado
    }
    
    try{
        const supabase = await createSupaBaseServerClient();
        const {data, error} = await supabase.from("Plan").update(jsonInsert).eq("id", id).select()
        if(error){
            console.error("Error al actualizar", error)
            return JSON.stringify(error)
        }else{
            console.log("Actualizacion Exitosa")
        }
    }catch(error){
        console.log("Error inesperado al actualizar: ", error)
    }
    redirect("/dashboard/planes")
}
