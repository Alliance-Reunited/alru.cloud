import styles from "../styles/components/navbar.module.scss";
import Link from "next/link";

function NavBar() {
    return (<div className={styles.main} id="nav">
        <div className={styles.left}>
            <div className={styles.logo}>
                <h1><Link href=".">Alliance Reunited</Link></h1>
            </div>
            <div className={styles.links}>
                <Link href="/servers">Servers</Link>
                <Link href="/discords">Discord Servers</Link>
            </div>
        </div>

        <div className={styles.right}>
            <div className={styles.links}>
                <Link href="https://panel.alru.cloud">Game Panel</Link>
            </div>
        </div>
    </div>)
}

export default NavBar;