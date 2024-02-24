import styles from "../ui/dashboard/dashboard.module.css"
import Footer from "../ui/components/footer/footer"
import Navbar from "../ui/components/navbar/navbar"
import Sidebar from "../ui/components/sidebar/sidebar"
import readUserSession from "@/lib/action";
import { redirect } from "next/navigation";


const Layout = async ({children}) =>{
    const {data} = await readUserSession();
    if(!data.session){
        return redirect("/login")
    }

    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                <Sidebar></Sidebar>
            </div>
            <div className={styles.contenido}>
                <Navbar></Navbar>
                {children}
                <Footer></Footer>
            </div>
        </div>
    )
}

export default Layout;