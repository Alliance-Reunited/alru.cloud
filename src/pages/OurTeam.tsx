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

// System Administrators
import Arrow from '../../public/assets/img/staff/arrow.png';
import lleyton from '../../public/assets/img/staff/lleyton.png';

// Senior Mods
import Lion from '../../public/assets/img/staff/lion.png';
import Coelus from '../../public/assets/img/staff/coelusceer.png';
import Averdime from '../../public/assets/img/staff/averdime.jpg';

// Moderators
import UranousRaptor from '../../public/assets/img/staff/uranousraptor75.png';
import Mumbo from '../../public/assets/img/staff/mumbo.png';

// Developers
import R0zemary from '../../public/assets/img/staff/r0zemary.png';

class OurTeam extends React.Component {
    render = (): React.ReactNode => (
        <main className="text-center container">
            <h1 className="staff-title mt-5">Our Team</h1>
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
                            <h4>Project Manager</h4>
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
                        <img src={TheRandomGuy98} alt="TheRandomGuy98's profile picture" />
                        <div className="staff-card-info">
                            <h3>TheRandomGuy98</h3>
                            <h4>Admin</h4>
                        </div>
                    </div>
                    <div className="card card-admin">
                        <img src={Agent} alt="Agent's profile picture" />
                        <div className="staff-card-info">
                            <h3>Agent</h3>
                            <h4>Admin</h4>
                        </div>
                    </div>
                    <div className="card card-admin">
                        <img src={WarToWin} alt="WarToWin's profile picture" />
                        <div className="staff-card-info">
                            <h3>WarToWin</h3>
                            <h4>Admin</h4>
                        </div>
                    </div>

                    {/* Sysadmins */}
                    <div className="card card-sysadmin">
                        <img src={Arrow} alt="Arrow's profile picture" />
                        <div className="staff-card-info">
                            <h3>Arrow</h3>
                            <h4>Sysadmin</h4>
                        </div>
                    </div>
                    <div className="card card-sysadmin">
                        <img src={lleyton} alt="lleyton's profile picture" />
                        <div className="staff-card-info">
                            <h3>lleyton</h3>
                            <h4>Network Engineer</h4>
                        </div>
                    </div>

                    {/* Senior Mods */}
                    <div className="card card-srmod">
                        <img src={Lion} alt="Lion's profile picture" />
                        <div className="staff-card-info">
                            <h3>Lion</h3>
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
                    <div className="card card-srmod">
                        <img src={Averdime} alt="Averdime's profile picture" />
                        <div className="staff-card-info">
                            <h3>Averdime</h3>
                            <h4>Senior Mod</h4>
                        </div>
                    </div>

                    {/* Moderators */}
                    <div className="card card-mod">
                        <img src={UranousRaptor} alt="UranousRaptor's profile picture" />
                        <div className="staff-card-info">
                            <h3>UranousRaptor</h3>
                            <h4>Moderator</h4>
                        </div>
                    </div>
                    <div className="card card-mod">
                        <img src={Mumbo} alt="Mumbo's profile picture" />
                        <div className="staff-card-info">
                            <h3>Mumbo</h3>
                            <h4>Moderator</h4>
                        </div>
                    </div>

                    {/* Developers */}
                    <div className="card card-dev">
                        <img src={R0zemary} alt="R0zemary's profile picture" />
                        <div className="staff-card-info">
                            <h3>R0zemary</h3>
                            <h4>Developer</h4>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default OurTeam;
