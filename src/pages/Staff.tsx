import React from 'react';

import '../../public/assets/scss/pages/staff.scss';

import DamienVesper from '../../public/assets/img/staff/damienvesper.gif';
import Alpaps from '../../public/assets/img/staff/alpaps.png';
import Zeropoint from '../../public/assets/img/staff/zeropoint.png';

import TheRandomGuy from '../../public/assets/img/staff/therandomguy98.png';
import Coelus from '../../public/assets/img/staff/coelusceer.png';
import Nong from '../../public/assets/img/staff/nong.png';

import Astrid from '../../public/assets/img/staff/astrid.jpeg';
import Arrow from '../../public/assets/img/staff/arrow.png';

import UranousRaptor from '../../public/assets/img/staff/uranousraptor75.png';
import Althea from '../../public/assets/img/staff/althea.png';
import Agent from '../../public/assets/img/staff/agent.png';

import Lion from '../../public/assets/img/staff/lion.png';
import NeonWolf from '../../public/assets/img/staff/neonwolf.png';
import WarToWin from '../../public/assets/img/staff/wartowin.png';

import ProtoLuke from '../../public/assets/img/staff/protoluke.png';

/**
 * The staff page.
 */
class Staff extends React.Component {
    render = () => (
        <main className="text-center container">
            <h1 className="staff-title mt-5">Our Staff</h1>
            <div className="w-75 mt-3 mx-auto">
                <p className="staff-desc">
                        The staff members keeping this whole operation running behind the scenes.
                        Without the help from these amazing people, we would not be able to get to where we are today!
                </p>
            </div>

            <div className="container text-start mt-5">
                <div className="staff-cards d-flex flex-wrap">
                    {/* Head Admins */}
                    <div className="card card-headadmin">
                        <img src={Zeropoint} alt="Zeropoint's profile picture" />
                        <div className="staff-card-info">
                            <h3>Zeropoint</h3>
                            <h4>Owner</h4>
                        </div>
                    </div>
                    <div className="card card-headadmin">
                        <img src={DamienVesper} alt="DamienVesper's profile picture" />
                        <div className="staff-card-info">
                            <h3>DamienVesper</h3>
                            <h4>DevOps</h4>
                        </div>
                    </div>
                    <div className="card card-headadmin">
                        <img src={Alpaps} alt="Alpaps' profile picture" />
                        <div className="staff-card-info">
                            <h3>Alpaps</h3>
                            <h4>Head Admin</h4>
                        </div>
                    </div>

                    {/* Admins */}
                    <div className="card card-admin">
                        <img src={TheRandomGuy} alt="TheRandomGuy's profile picture" />
                        <div className="staff-card-info">
                            <h3>TheRandomGuy</h3>
                            <h4>Admin</h4>
                        </div>
                    </div>
                    <div className="card card-admin">
                        <img src={Nong} alt="Nong_Ing's profile picture" />
                        <div className="staff-card-info">
                            <h3>Nong_Ing</h3>
                            <h4>Admin</h4>
                        </div>
                    </div>

                    {/* Sysadmins */}
                    <div className="card card-sysadmin">
                        <img src={Astrid} alt="Astrid's profile picture" />
                        <div className="staff-card-info">
                            <h3>Astrid</h3>
                            <h4>Sysadmin</h4>
                        </div>
                    </div>
                    <div className="card card-sysadmin">
                        <img src={Arrow} alt="Arrow's profile picture" />
                        <div className="staff-card-info">
                            <h3>Arrow</h3>
                            <h4>Sysadmin</h4>
                        </div>
                    </div>

                    {/* Developers */}
                    <div className="card card-dev">
                        <img src={Lion} alt="Lion's profile picture" />
                        <div className="staff-card-info">
                            <h3>Lion</h3>
                            <h4>Developer</h4>
                        </div>
                    </div>
                    <div className="card card-dev">
                        <img src={Agent} alt="Agent's profile picture" />
                        <div className="staff-card-info">
                            <h3>SolaceAgent</h3>
                            <h4>Developer</h4>
                        </div>
                    </div>
                    <div className="card card-dev">
                        <img src={ProtoLuke} alt="ProtoLuke's profile picture" />
                        <div className="staff-card-info">
                            <h3>ProtoLuke</h3>
                            <h4>Developer</h4>
                        </div>
                    </div>

                    {/* Senior Mods */}
                    <div className="card card-srmod">
                        <img src={UranousRaptor} alt="UranousRaptor's profile picture" />
                        <div className="staff-card-info">
                            <h3>UranousRaptor</h3>
                            <h4>Senior Mod</h4>
                        </div>
                    </div>
                    <div className="card card-srmod">
                        <img src={WarToWin} alt="WarToWin's profile picture" />
                        <div className="staff-card-info">
                            <h3>WarToWin</h3>
                            <h4>Senior Mod</h4>
                        </div>
                    </div>
                    <div className="card card-srmod">
                        <img src={Coelus} alt="Coelus' profile picture" />
                        <div className="staff-card-info">
                            <h3>Coleus</h3>
                            <h4>Senior Mod</h4>
                        </div>
                    </div>

                    {/* Moderators */}
                    <div className="card card-mod">
                        <img src={NeonWolf} alt="NeonWolf's profile picture" />
                        <div className="staff-card-info">
                            <h3>NeonWolf</h3>
                            <h4>Moderator</h4>
                        </div>
                    </div>
                    <div className="card card-mod">
                        <img src={Althea} alt="Althea's profile picture" />
                        <div className="staff-card-info">
                            <h3>Althea</h3>
                            <h4>Moderator</h4>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Staff;
