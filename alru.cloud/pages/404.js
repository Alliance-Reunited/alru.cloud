import styles from "../styles/pages/404.module.scss";
import Link from "next/link";

function Custom404() {
    return (<div className={styles.main}>
        <h1>You are an idot sandwich!</h1>
        <p>Try going to the right URL next time, stupid.</p>
        <Link href="/">Go Home!</Link>
    </div>)
}

export default Custom404;