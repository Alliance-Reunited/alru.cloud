import styles from "../styles/pages/404.module.scss";

function Custom404() {
    return (<div className={styles.main}>
        <h1>You are an idot sandwich!</h1>
        <p>Try going to the right URL next time, stupid.</p>
        <a href="/">Go Home!</a>
    </div>)
}

export default Custom404;