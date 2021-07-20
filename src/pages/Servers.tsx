// React libraries.
import React from 'react';
import { hot } from 'react-hot-loader';

import '../../public/assets/scss/pages/servers.scss';

/**
 * A list of all available servers.
 */
class Servers extends React.Component {
    render = () => {
        return (
            <main className="text-center container mt-5">
                <h1>Servers</h1>
                <h2>We have coolness</h2>

                {/* Garry's Mod Servers */}
                <br />
                <br />
                <h3 className="gmod-title">Garry's Mod</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Server</th>
                            <th scope="col">IP</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Family Guy DarkRP</td>
                            <td><a href="steam://connect/207.225.26.83:65470">207.225.26.83:65470</a></td>
                        </tr>
                        <tr>
                            <td>Among Us</td>
                            <td><a href="steam://207.225.26.83:65443">207.225.26.83:65443</a></td>
                        </tr>
                        <tr>
                            <td><span className="bad">[COMING SOON]</span> South Park DarkRP</td>
                            <td><a href="steam://connect/207.225.26.83:65448">207.225.26.83:65448</a></td>
                        </tr>
                    </tbody>
                </table>

                {/* Minecraft */}
                <br />
                <br />
                <h3 className="mc-title">Minecraft</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Server</th>
                            <th scope="col">IP</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Replace Me!</td>
                            <td><a href="steam://connect/207.225.26.83:65470">207.225.26.83:65470</a></td>
                        </tr>
                    </tbody>
                </table>

                {/* FiveM */}
                <br />
                <br />
                <h3 className="fivem-title">FiveM</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Server</th>
                            <th scope="col">IP</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Replace Me!</td>
                            <td><a href="steam://connect/207.225.26.83:65470">207.225.26.83:65470</a></td>
                        </tr>
                    </tbody>
                </table>
            </main>
        );
    }
}

export default hot(module)(Servers);
