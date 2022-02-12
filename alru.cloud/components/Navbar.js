import styles from "../styles/components/navbar.module.scss";
import Link from "next/link";

function NavBar() {
    return (<div className={styles.main} id="nav">
        <div className={styles.left}>
            <div className={styles.logo}>
                <h1><Link href=".">Banabyte Network</Link></h1>
            </div>
            <div className={styles.links}>
                <Link href="/servers">Servers</Link>
                <Link href="/discords">Discord Servers</Link>
                <Link href="https://panel.cronyte.com/">Game Panel</Link>
            </div>
        </div>
        <div className={styles.right}>
        </div>
    </div>)
}

export default NavBar;