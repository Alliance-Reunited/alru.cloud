// Import componenets
import NavBar from "../../components/Navbar";
import Footer from "../../components/Footer";

// Custom page-only SCSS
import styles from "../../styles/pages/servers.module.scss";

function ServerPanel(props) {
    return(<div className={styles.serverPanel}>
        <div className={styles.previewImage}>
            <img src={props.image}></img>    
        </div> {/* Preview image made with background on a div */}
        <div className={styles.info}>
            <p className={styles.servername}>{props.title}</p>
            <p className={styles.serverconn}>{props.ip}</p>
            <a href={`/servers/${props.url}`} className={styles.serverrules}>Rules</a>
        </div>
    </div>)
}

function ServersIndex() {
    return (<div>
        <NavBar />

        <div className={styles.header}>
            <p className={styles.title}>Our Servers</p>
            <p className={styles.subtitle}>Check out our amazing GameServers</p>
        </div>

        <div className={styles.serversPanel}>
            <ServerPanel title="PrisonRP" ip="localhost" url="prisonrp" image="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png"/>
            <ServerPanel title="DarkRP" ip="localhost" url="darkrp"/>
            <ServerPanel title="AmericanRP" ip="localhost" url="americanrp"/>
        </div>

        <Footer />
    </div>)
}

export default ServersIndex;