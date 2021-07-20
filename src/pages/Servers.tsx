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
            <main className="text-center container">
                <h1 className="mt-5">Servers</h1>
                <br />
                <br />

                {/* Garry's Mod */}
                <h2 className="gmod-title mb-4">Garry&apos;s Mod</h2>
                <table className="server-table table table-borderless">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
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
                            <td><span className="bad me-1">[COMING SOON]</span> South Park DarkRP</td>
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
