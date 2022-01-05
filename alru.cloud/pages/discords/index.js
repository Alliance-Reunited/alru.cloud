// Header and footer
import NavBar from "../../components/Navbar";
import Footer from "../../components/Footer";

import styles from "../../styles/pages/discord.module.scss";

function DiscordInfoPage() {
    return (<div>
        <NavBar />
        <div className={styles.contain}>
            <table className={styles.discord}>
                <tr>
                    <th>Name</th>
                    <th>Invite Link</th>
                </tr>
                <tr>
                    <td>Main Discord</td>
                    <td><a href="https://discord.gg/mNv6mPdg2G">https://discord.gg/mNv6mPdg2G</a></td>
                </tr>
                <tr>
                    <td>AmericanRP</td>
                    <td><a href="https://discord.gg/BeEtNutxY7">https://discord.gg/BeEtNutxY7</a></td>
                </tr>
                <tr>
                    <td>Family Guy DarkRP</td>
                    <td><a href="https://discord.gg/pbSd4Auaca">https://discord.gg/pbSd4Auaca</a></td>
                </tr>
            </table>
        </div>
    </div>)
}

export default DiscordInfoPage;