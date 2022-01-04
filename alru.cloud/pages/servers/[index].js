import NavBar from "../../components/Navbar";
import Footer from "../../components/Footer";

// Include FS
const fs = require("fs");

// Import special SCSS
import styles from "../../styles/pages/serverrules.module.scss";

// Markdown Handler Inports
import ReactMarkdown from 'react-markdown';

export async function getServerSideProps({req, res, resolvedUrl}) {
    // Get the index of the page
    const serverIndex = resolvedUrl.substring(9);

    const data = fs.readFileSync('./config/servers.json', {encoding:'utf8', flag:'r'});
    const json = JSON.parse(data);
    const dataTable = json.servers[serverIndex];

    const r = await fetch(dataTable.rules)
    const text = await r.text();
    return { props: { serverIndex, dataTable, markdown: text } }
}

function ServerRulesPage(props) {
    return (<div>
        <NavBar />
        <p>ID: {props.serverIndex}</p>
        <ReactMarkdown
            children={props.markdown}
            className={styles.rules}
        />
        {/* <Footer /> */}
    </div>)
}

export default ServerRulesPage;