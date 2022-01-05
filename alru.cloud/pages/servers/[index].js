import NavBar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Head from "next/head";

// Include FS
const fs = require("fs");

// Import special SCSS
import styles from "../../styles/pages/serverrules.module.scss";

// Markdown Handler Inports
import ReactMarkdown from 'react-markdown';

export async function getServerSideProps({req, res, resolvedUrl}) {
    // Get the index of the page
    const serverIndex = resolvedUrl.substring(9);

    const resp = await fetch("https://raw.githubusercontent.com/Alliance-Reunited/server-rules/main/server_cfg.json");
    const text = await resp.text();
    const json = await JSON.parse(text);
    const dataTable = await json.servers[serverIndex];

    const r = await fetch(dataTable.rules)
    const text2 = await r.text();
    return { props: { serverIndex, dataTable, markdown: text2 } }
}

function ServerRulesPage(props) {
    return (<div>
        <NavBar />
        <ReactMarkdown className={styles.rules}>{props.markdown}</ReactMarkdown>
    </div>)
}

export default ServerRulesPage;