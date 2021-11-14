import React from 'react';

import '../../public/assets/scss/pages/staff.scss';

// Head Admins
import Zeropoint from '../../public/assets/img/staff/zeropoint.gif';
import DamienVesper from '../../public/assets/img/staff/damienvesper.gif';
import Alpaps from '../../public/assets/img/staff/alpaps.png';

// Admins
import TheRandomGuy98 from '../../public/assets/img/staff/therandomguy98.png';
import Agent from '../../public/assets/img/staff/agent.png';
import WarToWin from '../../public/assets/img/staff/wartowin.png';

// Sysadmins
import Arrow from '../../public/assets/img/staff/arrow.jpg';
import Axite from '../../public/assets/img/staff/axite.png';

// Senior Mods
import Lion from '../../public/assets/img/staff/lion.png';
import Coelus from '../../public/assets/img/staff/coelusceer.png';
import Averdime from '../../public/assets/img/staff/averdime.jpg';

// Moderators
import ProtoLuke from '../../public/assets/img/staff/protoluke.png';
import TyraTheCat from '../../public/assets/img/staff/tyrathecat.png';

// Helpers
import Darky from '../../public/assets/img/staff/darky.png';
import Zyv from '../../public/assets/img/staff/zyv.png';
import Mumbo from '../../public/assets/img/staff/mumbo.png';

class StaffCard extends React.Component<{ name: string, rank: `HEAD ADMIN` | `ADMIN` | `SYSADMIN` | `SRMOD` | `MOD` | `DEVELOPER` | `HELPER`, pfp: string, customRank?: string }> {
    render = (): React.ReactNode => (
        <div className={
            `card card-${
                this.props.rank === `HEAD ADMIN`
                    ? `headadmin`
                    : this.props.rank.toLowerCase()
            }`}>

            <img src={this.props.pfp} alt={`${this.props.name}'s profile picture`} />
            <div className="staff-card-info">
                <h3>{this.props.name}</h3>
                <h4>{
                    this.props.customRank != null
                        ? this.props.customRank
                        : this.props.rank === `HEAD ADMIN`
                            ? `Head Admin`
                            : this.props.rank === `ADMIN`
                                ? `Admin`
                                : this.props.rank === `SYSADMIN`
                                    ? `Sysadmin`
                                    : this.props.rank === `SRMOD`
                                        ? `Sr. Mod`
                                        : this.props.rank === `MOD`
                                            ? `Moderator`
                                            : this.props.rank === `DEVELOPER`
                                                ? `Developer`
                                                : `Helper`
                }</h4>
            </div>
        </div>
    );
}

class OurTeam extends React.Component {
    render = (): React.ReactNode => (
        <main className="text-center container">
            <h1 className="staff-title mt-5">Our Team</h1>
            <div className="w-75 mt-3 mx-auto">
                <p className="staff-desc">
                    The staff members keeping this whole operation running behind the scenes.
                    Without the help from these amazing people, we would not be able to get to where we are today!
                </p>

                <div className="apply-wrapper">
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSdK4c2727ufXOw3hCJTMj9NtlKjWd-SFsX755KEmn_EkfVPrA/viewform"
                        target="_blank"
                        rel="noreferrer"
                        className="btn apply">Apply For Staff</a>
                </div>
            </div>

            <div className="container text-start mt-5">
                <div className="staff-cards d-flex flex-wrap">
                    {/* Head Admins */}
                    <StaffCard
                        rank="HEAD ADMIN"
                        name="Zeropoint"
                        pfp={Zeropoint}
                        customRank="Project Manager"
                    />
                    <StaffCard
                        rank="HEAD ADMIN"
                        name="DamienVesper"
                        pfp={DamienVesper}
                        customRank="DevOps"
                    />
                    <StaffCard
                        rank="HEAD ADMIN"
                        name="Alpaps"
                        pfp={Alpaps}
                    />

                    {/* Admins */}
                    <StaffCard
                        rank="ADMIN"
                        name="TheRandomGuy98"
                        pfp={TheRandomGuy98}
                    />
                    <StaffCard
                        rank="ADMIN"
                        name="SolaceAgent"
                        pfp={Agent}
                    />
                    <StaffCard
                        rank="ADMIN"
                        name="WarToWin"
                        pfp={WarToWin}
                    />

                    {/* Sysadmins */}
                    <StaffCard
                        rank="SYSADMIN"
                        name="Arrow"
                        pfp={Arrow}
                    />
                    <StaffCard
                        rank="SYSADMIN"
                        name="Axite"
                        pfp={Axite}
                    />

                    {/* Senior Mods */}
                    <StaffCard
                        rank="SRMOD"
                        name="Lion"
                        pfp={Lion}
                    />
                    <StaffCard
                        rank="SRMOD"
                        name="Coelus"
                        pfp={Coelus}
                    />
                    <StaffCard
                        rank="SRMOD"
                        name="Averdime"
                        pfp={Averdime}
                    />

                    {/* Moderators */}
                    <StaffCard
                        rank="MOD"
                        name="ProtoLuke"
                        pfp={ProtoLuke}
                    />
                    <StaffCard
                        rank="MOD"
                        name="TyraTheCat"
                        pfp={TyraTheCat}
                    />

                    {/* Helpers */}
                    <StaffCard
                        rank="HELPER"
                        name="Darky"
                        pfp={Darky}
                    />
                    <StaffCard
                        rank="HELPER"
                        name="Zyv"
                        pfp={Zyv}
                    />
                    <StaffCard
                        rank="HELPER"
                        name="Mumbo"
                        pfp={Mumbo}
                    />
                </div>
            </div>
        </main>
    );
}

export default OurTeam;
