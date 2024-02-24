"use server"

import createSupaBaseServerClient from "../supabase/server"

const readUserSession = async () => {
    const supabase = await createSupaBaseServerClient();
    return supabase.auth.getSession();
}

export default readUserSession