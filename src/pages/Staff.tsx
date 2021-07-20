// React libraries.
import React from 'react';
import { hot } from 'react-hot-loader';

import '../../public/assets/scss/pages/staff.scss';

import DamienVesper from '../../public/assets/img/staff/damienvesper.gif';
import Alpaps from '../../public/assets/img/staff/alpaps.png';
import WarToWin from '../../public/assets/img/staff/wartowin.png';

import Zeropoint from '../../public/assets/img/staff/zeropoint.png';
import TheRandomGuy from '../../public/assets/img/staff/therandomguy98.png';
import Coelus from '../../public/assets/img/staff/coelusceer.png';

// import Tokiwa from '../../public/assets/img/staff/tokiwa.png';
// import UranousRaptor from '../../public/assets/img/staff/uranousraptor75.png';

// import NeonWolf from '../../public/assets/img/staff/neonwolf.png';
// import ReddevilG from '../../public/assets/img/staff/reddevilG.png';

// import YaLocalFurryGuy from '../../public/assets/img/staff/yalocalfurryguy.gif';

/**
 * The staff page.
 */
class Staff extends React.Component {
    render = () => {
        return (
            <main className="text-center container">
                <h1 className="staff-title mt-5">Our Staff</h1>
                <div className="w-75 mt-3 mx-auto">
                    <p className="staff-desc">
                        The staff members keeping this whole operation running behind the scenes.
                        Without the help from these amazing people, we would not be able to get to where we are today!
                    </p>
                </div>

                <div className="container text-start mt-5">

                    <div className="apply-wrapper">
                        <a href="https://forum.alru.ga/t/staff-applications" className="btn apply">Apply For Staff</a>
                    </div>

                    <div className="staff-cards d-flex flex-wrap justify-content-center">
                        {/* Head Admins */}
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

                        <div className="card card-headadmin">
                            <img src={WarToWin} alt="WarToWin's profile picture" />
                            <div className="staff-card-info">
                                <h3>WarToWin</h3>
                                <h4>Head Admin</h4>
                            </div>
                        </div>

                        {/* Admins */}
                        <div className="card card-admin">
                            <img src={Zeropoint} alt="Zeropoint's profile picture" />
                            <div className="staff-card-info">
                                <h3>Zeropoint</h3>
                                <h4>Admin</h4>
                            </div>
                        </div>

                        <div className="card card-admin">
                            <img src={Coelus} alt="Coelus' profile picture" />
                            <div className="staff-card-info">
                                <h3>Coleus</h3>
                                <h4>Admin</h4>
                            </div>
                        </div>

                        <div className="card card-admin">
                            <img src={TheRandomGuy} alt="TheRandomGuy's profile picture" />
                            <div className="staff-card-info">
                                <h3>TheRandomGuy</h3>
                                <h4>Admin</h4>
                            </div>
                        </div>

                        {/* Sysadmins */}
                        <div className="card card-sysadmin">
                            <img src="http://www.gravatar.com/avatar/778caf96c7ab92e7202f0b3545d76061?s=1024" alt="Astrid's profile picture" />
                            <div className="staff-card-info">
                                <h3>Astrid</h3>
                                <h4>Sysadmin</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default hot(module)(Staff);
