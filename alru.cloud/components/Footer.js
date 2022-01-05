import styles from "../styles/components/footer.module.scss";

const insults = [
    "Vesper smells",
    "Vesper is bad at chess",
    "(not) made by Lord DamienVesper",
    "Vesper's code looks like a toddler shit itself on a keyboard lol",
    "Vesper can't hear correctly",
    "@author not DamienVesper",
    "Vesper legitimately thinks white buttons on black background looks good",
]

function Footer(props) {
    const rN = Math.floor(Math.random()*insults.length);
    const insultText = insults[rN];

    return (
        <div className={styles.main}>
            <div className={styles.left}>
                <a href="#nav">To the top of the page</a>
            </div>

            <div className={styles.alru}>
                <Link href="/staff">Staff</Link>
                <p>-</p>
                <Link href="/servers">Our Servers</Link>
                <p>-</p>
                <Link href="/servers">Game Panel</Link>
            </div>

            <div className={styles.right}>
                <p>// {insultText || "Vesper insult failed to load"}</p>
            </div>
    </div>)   
}

export default Footer;