import styles from "./sidebar.module.css"
import MenuLink from  "./menuLink/menuLink"
import Image from "next/image";

import {
    MdDashboard,
    MdSupervisedUserCircle,
    MdShoppingBag,
    MdAttachMoney,
    MdWork,
    MdAnalytics,
    MdPeople,
    MdOutlineSettings,
    MdHelpCenter,
    MdLogout,
  } from "react-icons/md";
  import { HiPuzzle } from "react-icons/hi";

const menuItems = [
    {
      title: "Pages",
      list: [
        {
          title: "Dashboard",
          path: "/dashboard",
          icon: <MdDashboard />,
        },
        {
          title: "Usuarios",
          path: "/dashboard/users",
          icon: <MdSupervisedUserCircle />,
        },
        {
          title: "Productos",
          path: "/dashboard/products",
          icon: <MdShoppingBag />,
        },
        {
          title: "Ventas",
          path: "/dashboard/transactions",
          icon: <MdAttachMoney />,
        },
      ],
    },
    {
      title: "Analytics",
      list: [
        
        {
          title: "Membresias",
          path: "/dashboard/membresias",
          icon: <HiPuzzle />,
        },
        {
          title: "Reportes",
          path: "/dashboard/reports",
          icon: <MdAnalytics />,
        },
      ],
    },
    {
      title: "User",
      list: [
        {
          title: "Configuración",
          path: "/dashboard/settings",
          icon: <MdOutlineSettings />,
        },
      ],
    },
  ];


const Sidebar = () => {
    return (
        <div className={styles.container}>
             <div className={styles.user}>
              <Image className={styles.userImage} src="/noavatar.png" alt="" width="50" height="50"></Image>
              <div className={styles.userDetail}>
                  <span className={styles.username}>Usuario Prueba</span>
                  <span className={styles.userTitle}>Administrador</span>
              </div>
          </div>
          <ul className={styles.list}>
              {menuItems.map(cat =>(
                  <li key={cat.title}>
                      <span className={styles.cat}>{cat.title}</span>
                      {cat.list.map(item=>(
                          <MenuLink item={item} key={item.title}></MenuLink>
                      ))}
                  </li>
              ))}    
          </ul>
          <form action={async () => {
            "use server"
            await signOut();
          }}>
            <button className={styles.logout}>
                <MdLogout></MdLogout>
                Logout
            </button>    
          </form>
        </div>
    )
}

export default Sidebar;