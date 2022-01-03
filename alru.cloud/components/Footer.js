import styles from "../styles/components/footer.module.scss";

function Footer() {
    return (
        <div className={styles.main}>
            <div className={styles.left}>
                <a href="#nav">To the top of the page</a>
            </div>

            <div className={styles.alru}>
                <a href="/staff">Staff</a>
                <p>-</p>
                <a href="/servers">Our Servers</a>
                <p>-</p>
                <a href="/servers">Game Panel</a>
            </div>

            <div className={styles.right}>
                <p>// (not) made by DamienVesper</p>
            </div>
    </div>)   
}

export default Footer;