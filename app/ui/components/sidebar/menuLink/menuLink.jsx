"use client"

import { usePathname } from "next/navigation"
import styles from "./menuLink.module.css"
import Link from "next/link"

const MenuLink = ({item}) => {

    const pathname = usePathname();
    let isActive = pathname.startsWith(item.path);
    if(pathname !== "/dashboard" && item.path === "/dashboard"){
        isActive = false;
    }

    return(
        <Link href={item.path} className={`${styles.container} ${isActive && styles.active}`}>
            {item.icon}
            {item.title}
        </Link>


    )
}

export default MenuLink