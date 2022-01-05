// Import componenets
import NavBar from "../../components/Navbar";
import Footer from "../../components/Footer";

// Custom page-only SCSS
import styles from "../../styles/pages/servers.module.scss";

// Filesystem Library
const fs = require("fs");

function ServerPanel(props) {
    return(<div className={styles.serverPanel}>

        <div className={styles.previewImage}>
            <img src={props.image}></img>    
        </div>

        <div className={styles.info}>
            <div className={styles.innerInfo}>
                <p className={styles.servername}>{props.title}</p>
                <p className={styles.serverconn}>{props.ip}</p>
            </div>
            
            <div className={styles.buttons}>
                <a href={`/servers/${props.url}`} className={styles.rulesButton}><button>Rules</button></a>
            </div>
        </div>

    </div>)
}

export async function getServerSideProps() {
    const data = fs.readFileSync('./config/servers.json', {encoding:'utf8', flag:'r'});
    const dataArray = JSON.parse(data);

    return { props: { dataArray } }
}

function ServersIndex(props) {
    return (<div>
        <NavBar />

        <div className={styles.header}>
            <p className={styles.title}>Our Servers</p>
            <p className={styles.subtitle}>Check out our amazing GameServers</p>
        </div>

        <div className={styles.serversPanel}>
            {props.dataArray.servers.map((serverTable, ind) => {
                return (<div>
                    <ServerPanel title={serverTable.name} ip={serverTable.ip} url={ind} image={serverTable.preview}/>
                </div>
                ) 
            })}
        </div>

        {/* <Footer /> */}
    </div>)
}

export default ServersIndex;