"use server"
import createSupaBaseServerClient from "@/lib/supabase/server"
import { redirect } from "next/navigation";


export const deleteItem = async (id, tabla, pagina) => {
    const supabase = await createSupaBaseServerClient();
    const result = await supabase.from(tabla).delete().eq("id", id)
    redirect(`/dashboard/${pagina}`)
}