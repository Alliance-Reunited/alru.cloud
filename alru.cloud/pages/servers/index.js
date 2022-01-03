// Import componenets
import NavBar from "../../components/Navbar";
import Footer from "../../components/Footer";

// Custom page-only SCSS
import styles from "../../styles/pages/servers.module.scss";

function ServersIndex() {
    return (<div>
        <NavBar />

        <div className={styles.header}>
            <p className={styles.title}>Our Servers</p>
            <p className={styles.subtitle}>Check out our amazing GameServers</p>
        </div>

        <div className={styles.serverContainer}>

        </div>

        <Footer />
    </div>)
}

export default ServersIndex;