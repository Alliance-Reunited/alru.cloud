import React from 'react';

import '../../public/assets/scss/pages/servers.scss';

class Servers extends React.Component {
    render = (): React.ReactNode => (
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
                        <td><a href="apollo.alru.xyz:65435">apollo.alru.xyz:65435</a></td>
                    </tr>
                    <tr>
                        <td>Among Us Royale</td>
                        <td><a href="steam://connect/apollo.alru.xyz:65436">apollo.alru.xyz:65436</a></td>
                    </tr>
                    <tr>
                        <td><span className="bad me-1">[SOON]</span> South Park DarkRP</td>
                        <td><a href="steam://connect/apollo.alru.xyz:65437">apollo.alru.xyz:65437</a></td>
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
                        <td><a href="#">mc.alru.xyz</a></td>
                    </tr>
                </tbody>
            </table>
            <br />
        </main>
    );
}

export default Servers;
