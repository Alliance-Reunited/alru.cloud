import Head from "next/head";
import "../styles/global.scss";


function MyApp({ Component, pageProps }) {
  return (<div>
    {/* Page settings */}
    <Head>

    </Head>

    {/* Render normal page components */}
    <Component {...pageProps} />
  </div>)
}

export default MyApp
