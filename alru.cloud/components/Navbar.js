import styles from "../styles/components/navbar.module.scss";

function NavBar() {
    return (<div className={styles.main} id="nav">
        <div className={styles.left}>
            <div className={styles.logo}>
                <h1><a href=".">Alliance Reunited</a></h1>
            </div>
            <div className={styles.links}>
                <a href="/servers">Servers</a>
                <a href="/discords">Discord Servers</a>
            </div>
        </div>

        <div className={styles.right}>
            <div className={styles.links}>
                <a href="https://panel.alru.cloud">Game Panel</a>
            </div>
        </div>
    </div>)
}

export default NavBar;