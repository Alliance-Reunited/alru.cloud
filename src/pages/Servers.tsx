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
                <h1 className="server-title mt-5">Servers</h1>
                <br />
                <br />

                {/* Garry's Mod */}
                <h2 className="gmod-title" id="gmod">Garry&apos;s Mod</h2>
                <table className="server-table table table-borderless mt-4" id="gmod-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>IP</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Family Guy DarkRP</td>
                            <td><a href="steam://connect/207.225.26.215:65446">207.225.26.215:65446</a></td>
                        </tr>
                        <tr>
                            <td>Among Us Royale</td>
                            <td><a href="steam://connect/207.225.26.215:65443">207.225.26.215:65443</a></td>
                        </tr>
                        <tr>
                            <td><span className="bad me-1">[SOON]</span> South Park DarkRP</td>
                            <td><a href="steam://connect/207.225.26.215:65448">207.225.26.215:65448</a></td>
                        </tr>
                    </tbody>
                </table>
                <br />

                {/* Minecraft */}
                <h3 className="mc-title" id="minecraft">Minecraft</h3>
                <table className="server-table table table-borderless mt-4" id="minecraft-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>IP</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><span className="bad me-1">[SOON]</span> AlruMC Network</td>
                            <td><a href="#">mc.alru.ga</a></td>
                        </tr>
                    </tbody>
                </table>
                <br />

                {/* FiveM */}
                <h3 className="fivem-title" id="fivem">FiveM</h3>
                <table className="server-table table table-borderless mt-4" id="fivem-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>IP</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><span className="bad me-1">[NEVER<sup>TM</sup>]</span> Drift</td>
                            <td><a href="#">TBD</a></td>
                        </tr>
                    </tbody>
                </table>
            </main>
        );
    }
}

export default hot(module)(Servers);
