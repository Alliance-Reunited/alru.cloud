// Component Imports
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

// Styles for home page
import styles from "../styles/pages/home.module.scss";

function HomePage() {
  return (
    <div>
      <NavBar />

      <div className={styles.hero}>
        <p className={styles.title}>Banabyte</p>
        <p className={styles.subtitle}>Really Nice Servers</p>
        <br></br>
        <Link href="/servers" className={styles.subsubtitle}>See our servers</Link>
      </div>

      {/* <Footer /> */}
    </div>
  )
}

export default HomePage;