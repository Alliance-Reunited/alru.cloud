import React from 'react';
import alertify from 'alertifyjs';

import 'alertifyjs/build/css/alertify.css';
import '../../public/assets/scss/pages/servers.scss';

class ServerEntry extends React.Component<{ name: string, node: `VOYAGER` | `APOLLO` | `EXCELSIOR` | `MERCURY` | `ARTEMIS` | `GEMINI`, port?: string, customIP?: string }> {
    ip: string;

    render = (): React.ReactNode => {
        this.ip = this.props.customIP != null
            ? this.props.customIP
            : `${this.props.node.toLowerCase()}.alru.xyz${this.props.port != null ? `:${this.props.port}` : ``}`;

        return (
            <tr>
                <td>{this.props.name}</td>
                <td><a href="#" onClick={() => this.copyToClipboard()}>{this.ip == null ? `` : this.ip}</a></td>
            </tr>
        );
    };

    copyToClipboard = (): undefined => {
        void navigator.clipboard.writeText(this.ip);
        alertify.success(`Copied to clipboard!`, `success`);
        return undefined;
    };
}

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
                    <ServerEntry name="Family Guy DarkRP" node="EXCELSIOR" port="9000" />
                    <ServerEntry name="Among Us Royale" node="EXCELSIOR" port="9001" />
                    <ServerEntry name="Family Guy Fat Kid" node="EXCELSIOR" port="9002" />
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
                    <ServerEntry name="AlruMC Network" node="APOLLO" customIP="mc.alru.xyz" />
                </tbody>
            </table>
            <br />
        </main>
    );
}

export default Servers;
