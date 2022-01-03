import styles from "../styles/components/navbar.module.scss";

function NavBar() {
    return (<div className={styles.main}>
        <div className={styles.left}>
            <div className={styles.logo}>
                <h1>Alliance Reunited</h1>
            </div>
            <div className={styles.links}>
                <a href="#">Servers</a>
                <a href="#">Staff</a>
            </div>
        </div>

        <div className={styles.right}>
            <div className={styles.links}>
                <a href="#">Game Panel</a>
            </div>
        </div>
    </div>)
}

export default NavBar;