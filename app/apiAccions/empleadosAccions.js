"use server"
import { redirect } from "next/navigation";
import createSupaBaseServerClient from "../../lib/supabase/server"

export const readEmpleados = async (data, page, cantidad) =>{
    const rangInit = 0 + parseInt(cantidad) * (parseInt(page) - 1);
    const rangEnd = parseInt(cantidad) * parseInt(page) - 1;
    const supabase = await createSupaBaseServerClient();
    let result;
    let count;
    if(data === ""){
        result = await supabase.from("Empleado").select("*").order("id", {ascending:true}).range(rangInit, rangEnd);
        const tamaño = await supabase.from("Empleado").select("*").order("id", {ascending:true});
        count = tamaño.data.length;
    }else{
        result = await supabase.from("Empleado").select("*").ilike("Nombre", `%${data}%`).order("id", {ascending:true}).range(rangInit, rangEnd);
        const tamaño = await supabase.from("Empleado").select("*").ilike("Nombre", `%${data}%`).order("id", {ascending:true})
        count = tamaño.data.length;
    }
    const resultado = JSON.stringify(result);
    return {count , result};
}

export const fetchEspecificEmpleado = async (id) =>{
    const supabase = await createSupaBaseServerClient();
    const result = await supabase.from("Empleado").select("*").eq("id",id)
    return JSON.stringify(result)
}

export const updateEmpleado = async (formData, rol, id) => {
    
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
    if(formData.rol !== rol){
        jsonInsert["Rol"] =  formData.rol
    }
    if(formData.rol === "entrenador"){
        jsonInsert["Contraseña"] = null
    }
    if(formData.rol === "administrador" && formData.contraseña !== ""){
        jsonInsert["Contraseña"] = formData.contraseña
    }
    
    try{
        const supabase = await createSupaBaseServerClient();
        const {data, error} = await supabase.from("Empleado").update(jsonInsert).eq("id", id).select()
        if(error){
            console.error("Error al actualizar", error)
            return JSON.stringify(error)
        }else{
            console.log("Actualizacion Exitosa")
        }
    }catch(error){
        console.log("Error inesperado al actualizar: ", error)
    }
    redirect("/dashboard/empleados")
}

export const addEmpleado = async (formData) =>{
    const jsonInsert = {};

    if(formData.nombre !== "" && formData.dni !== "" && formData.genero !== "" &&formData.correo !== "" && formData.celular !== "" && formData.rol !== "noSelect" && formData.fechaNacimiento !== null){
        jsonInsert["Nombre"] = formData.nombre
        jsonInsert["Dni"] = formData.dni
        jsonInsert["Genero"] = formData.genero
        jsonInsert["Correo"] = formData.correo
        jsonInsert["Celular"] = formData.celular
        jsonInsert["Rol"] =  formData.rol
        jsonInsert["FechaDeNacimiento"] = formData.fechaNacimiento
    }else{
        return "Faltan datos"
    }
    if(formData.rol === "administrador" && formData.contraseña !== ""){
        jsonInsert["Contraseña"] = formData.contraseña
    }else{
        return "Faltan datos"
    }
    try{
        const supabase = await createSupaBaseServerClient()
        const {data,error} = await supabase.from("Empleado").insert(jsonInsert).select()
        if(error){
            console.error("Error al insertar servidor: ", error)
            return error
        }else{
            console.log("Se inserto correctamente")
        }
    }catch(e){
        console.error("Error inesperado al insertar: ", e)
    }
    redirect("/dashboard/empleados")
}