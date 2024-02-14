import styles from "./sidebar.module.css"
import MenuLink from  "./menuLink/menuLink"
import Image from "next/image";
import { GiBuyCard } from "react-icons/gi";


import {
    MdDashboard,
    MdAttachMoney,
    MdPeople,
    MdOutlineSettings,
    MdLogout,
  } from "react-icons/md";
  import { FaPeopleGroup } from "react-icons/fa6";
  import { BsBoxes } from "react-icons/bs";
  import { MdNewspaper } from "react-icons/md";
  import { FaMoneyBillTrendUp } from "react-icons/fa6";
  import { HiOutlineDocumentReport } from "react-icons/hi";




const menuItems = [
    {
      title: "Paginas",
      list: [
        {
          title: "Dashboard",
          path: "/dashboard",
          icon: <MdDashboard />,
        },
        {
          title: "Empleados",
          path: "/dashboard/empleados",
          icon: <FaPeopleGroup />,
        },
        {
          title: "Clientes",
          path: "/dashboard/clientes",
          icon: <MdPeople  />,
        },
        {
          title: "Productos",
          path: "/dashboard/productos",
          icon: <BsBoxes  />,
        },
        {
            title: "Planes / Subscripciones / Membresias",
            path: "/dashboard/planes",
            icon: <MdNewspaper />,
        },
      ],
    },
    {
      title: "Contabilidad",
      list: [
        
        {
          title: "Ventas",
          path: "/dashboard/ventas",
          icon: <FaMoneyBillTrendUp   />,
        },
        {
          title: "Transaccion",
          path: "/dashboard/transaccion",
          icon: <MdAttachMoney  />,
        },
        {
          title: "Compras",
          path: "/dashboard/compras",
          icon: <GiBuyCard   />,
        },
      ],
    },{
        title: "Analytics",
        list: [
          
          {
            title: "Reportes",
            path: "/dashboard/reportes",
            icon: <HiOutlineDocumentReport  />,
          },
        ], 
    },
    {
      title: "User",
      list: [
        {
          title: "Perfil",
          path: "/dashboard/perfil",
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
          <button className={styles.logout}>
                <MdLogout></MdLogout>
                Logout
          </button>    
        </div>
    )
}

export default Sidebar;