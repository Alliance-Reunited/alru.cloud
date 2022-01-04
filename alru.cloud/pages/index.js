// Component Imports
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

// Styles for home page
import styles from "../styles/pages/home.module.scss";

function HomePage() {
  return (
    <div>
      <NavBar />

      <div className={styles.hero}>
        <p className={styles.title}>Alliance Reunited</p>
        <p className={styles.subtitle}>Game Hosting Done Right</p>
        <br></br>
        <a href="/servers" className={styles.subsubtitle}>See our servers</a>
      </div>

      {/* <Footer /> */}
    </div>
  )
}

export default HomePage;