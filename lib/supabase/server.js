"use server"
import { createServerClient} from '@supabase/ssr'
import { cookies } from 'next/headers'

const createSupaBaseServerClient = async () =>{
    const cookieStore = cookies()
    return createServerClient(
        process.env.SUPABASE_URL_PUBLIC,
        process.env.SUPABASE_APIKEY_PUBLIC,
        {
          cookies: {
            get(name) {
              return cookieStore.get(name)?.value
            },
            set(name, value, options) {
              try {
                cookieStore.set({ name, value, ...options })
              } catch (error) {
                console.error("el error es: " , error)
              }
            },
            remove(name, options) {
              try {
                cookieStore.set({ name, value: '', ...options })
              } catch (error) {
                console.error("el error es: " , error)
              }
            },
          },
        }
      )
}

export default createSupaBaseServerClient;