// Header and footer
import NavBar from "../../components/Navbar";

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
                    <td>Community</td>
                    <td><a href="https://discord.gg/mNv6mPdg2G">https://discord.gg/qnDwP4QY2K</a></td>
                </tr>
                <tr>
                    <td>Gmod RP</td>
                    <td><a href="https://discord.gg/BeEtNutxY7">https://discord.gg/mXG5nQWGw4</a></td>
                </tr>
            </table>
        </div>
    </div>)
}

export default DiscordInfoPage;