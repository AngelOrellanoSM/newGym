"use server"
import { redirect } from "next/navigation";
import createSupaBaseServerClient from "../../lib/supabase/server"

export const readClientes = async (data, page, cantidad) =>{
    const rangInit = 0 + parseInt(cantidad) * (parseInt(page) - 1);
    const rangEnd = parseInt(cantidad) * parseInt(page) - 1;
    const supabase = await createSupaBaseServerClient();
    let result;
    let count;
    if(data === ""){
        result = await supabase.from("Cliente").select("*").order("id", {ascending:true}).range(rangInit, rangEnd);
        const tamaño = await supabase.from("Cliente").select("*").order("id", {ascending:true});
        count = tamaño.data.length;
    }else{
        result = await supabase.from("Cliente").select("*").ilike("Nombre", `%${data}%`).order("id", {ascending:true}).range(rangInit, rangEnd);
        const tamaño = await supabase.from("Cliente").select("*").ilike("Nombre", `%${data}%`).order("id", {ascending:true})
        count = tamaño.data.length;
    }
    return {count , result};
}

export const readDatos = async()=>{
    const supabase = await createSupaBaseServerClient();
    
    const resultTotal = await supabase.from("Cliente").select("*")
    const totalClientes = resultTotal.data.length

    const resultActivos = await supabase.from("Cliente").select("*").eq("Estado","activo")
    const activos = resultActivos.data.length

    const resultInteresados = await supabase.from("Cliente").select("*").eq("Estado","interesado")
    const interesados = resultInteresados.data.length

    const resultAntiguos = await supabase.from("Cliente").select("*").eq("Estado","antiguo")
    const antiguos = resultAntiguos.data.length

    return {totalClientes, activos, interesados, antiguos}
}

export const addCliente = async (formData) =>{
    const jsonInsert = {};

    if(formData.nombre !== "" && formData.dni !== "" && formData.genero !== "" &&formData.correo !== "" && formData.celular !== "" && formData.fechaNacimiento !== null){
        jsonInsert["Nombre"] = formData.nombre
        jsonInsert["Dni"] = formData.dni
        jsonInsert["Genero"] = formData.genero
        jsonInsert["Correo"] = formData.correo
        jsonInsert["Celular"] = formData.celular
        jsonInsert["FechaNacimiento"] = formData.fechaNacimiento
        jsonInsert["Estado"] = "interesado"
    }else{
        return "Faltan datos"
    }
   
    try{
        const supabase = await createSupaBaseServerClient()
        const {data,error} = await supabase.from("Cliente").insert(jsonInsert).select()
        if(error){
            console.error("Error al insertar servidor: ", error)
            return error
        }else{
            console.log("Se inserto correctamente")
        }
    }catch(e){
        console.error("Error inesperado al insertar: ", e)
    }
    redirect("/dashboard/clientes")
}

export const fetchEspecificCliente = async (id) =>{
    const supabase = await createSupaBaseServerClient();
    const result = await supabase.from("Cliente").select("*").eq("id",id)
    return JSON.stringify(result)
}

export const updateCliente = async (formData, id) => {
    
    const jsonInsert = {};
    if(formData.nombre !== ""){
        jsonInsert["Nombre"] = formData.nombre
    }
    if(formData.dni !== ""){
        jsonInsert["Dni"] = formData.dni
    }
    if(formData.correo !== ""){
        jsonInsert["Correo"] = formData.correo
    }
    if(formData.celular !== ""){
        jsonInsert["Celular"] = formData.celular
    }
    
    try{
        const supabase = await createSupaBaseServerClient();
        const {data, error} = await supabase.from("Cliente").update(jsonInsert).eq("id", id).select()
        if(error){
            console.error("Error al actualizar", error)
            return JSON.stringify(error)
        }else{
            console.log("Actualizacion Exitosa")
        }
    }catch(error){
        console.log("Error inesperado al actualizar: ", error)
    }
    redirect("/dashboard/clientes")
}

