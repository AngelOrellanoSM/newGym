"use client"
import styles from "./navbar.module.css"
import { usePathname } from "next/navigation"

import {
    MdNotifications,
    MdOutlineChat,
    MdPublic,
    MdSearch,
  } from "react-icons/md";

const Navbar = () => {
    const pathname = usePathname();

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                {pathname.split("/").pop()}
            </div>

            <div className={styles.menu}>
                
                <div className={styles.icons}>
                    <div className={styles.alerts}>
                        <div className={1===2?styles.cantidad:styles.invisible}>0</div>
                        <MdOutlineChat size={20}></MdOutlineChat>
                    </div>
                    <div className={styles.alerts}>
                        <div className={1===2?styles.cantidad:styles.invisible}>5</div>
                        <MdNotifications size={20}></MdNotifications>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;