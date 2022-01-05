import Head from "next/head";
import "../styles/global.scss";


function MyApp({ Component, pageProps }) {
  return (<div>
    {/* Page settings */}
    <Head>
      <meta property="og:title" content="Alliance Reunited" />
      <meta property="og:description" content="Game hosting done right" />
    </Head>

    {/* Render normal page components */}
    <Component {...pageProps} />
  </div>)
}

export default MyApp
