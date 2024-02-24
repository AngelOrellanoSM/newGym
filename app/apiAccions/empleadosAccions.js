"use server"

import createSupaBaseServerClient from "../../lib/supabase/server"

export const readEmpleados = async () =>{
    const supabase = await createSupaBaseServerClient();
    const result = await supabase.from("Empleados").select("*");
    return JSON.stringify(result);
}

export const fetchEspecificEmpleado = async (id) =>{
    const supabase = await createSupaBaseServerClient();
    const result = await supabase.from("Empleados").select("*").eq("id",id)
    return JSON.stringify(result)
}