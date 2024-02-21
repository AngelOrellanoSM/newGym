import styles from "./footer.module.css"

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>Titanium Gym</div>
            <div className={styles.text}>@Derechos reservados</div>
        </div>
    )
}

export default Footer;