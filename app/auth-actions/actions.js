"use server"

import { redirect } from "next/navigation";
import createSupaBaseServerClient from "../../lib/supabase/server"

export const registrarConEmail = async (email, password) =>{

    const supabase = await createSupaBaseServerClient();
    const result = await supabase.auth.signUp({email:email, password:password})
    return JSON.stringify(result)
}

export const logInConEmail = async (email, password) => {
    const supabase = await createSupaBaseServerClient();
    const result = await supabase.auth.signInWithPassword({email:email, password:password})
    return JSON.stringify(result)
}

export const cerrarSesion = async () => {
    
    const supabase = await createSupaBaseServerClient();
    await supabase.auth.signOut();
    redirect("/login");
   
}