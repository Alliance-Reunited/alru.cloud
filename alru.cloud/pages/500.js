import styles from "../styles/pages/404.module.scss";
import Link from "next/link";

function Custom404() {
    return (<div className={styles.main}>
        <h1>Ruh Roh</h1>
        <p>Looks like a <strong>500 internal server error</strong>!<br></br>If you report this to use, we may or may not fix it!<br></br>our coder monkey slaves aren't paied enough.</p>
        <Link href="/">Go Home!</Link>
    </div>)
}

export default Custom404;