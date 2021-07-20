// React libraries.
import React from 'react';
import { hot } from 'react-hot-loader';

import '../../public/assets/scss/pages/staff.scss';

/**
 * The staff page.
 */
class Servers extends React.Component {
    render = () => {
        return (
            <main className="text-center container">
                <h1 className="mt-5">Our Staff</h1>
                <div className="w-75 mt-3 mx-auto">
                    <p>
                        The staff members keeping this whole operation running behind the scenes.
                        Without the help from these amazing people, we would not be able to get to where we are today!
                    </p>
                </div>

                <div className="container text-start mt-5">
                    <div className="staff-cards">

                        <div className="card color-blue">
                            <img src="https://alru.ga/static/media/damienvesper.cbf1a5a1.gif" alt=""/>
                            <div className="staff-card-info">
                                <h3>DamienVesper</h3>
                                <h4 className="color-blue-text">Head Admin, Systems Administrator, DevOps</h4>
                            </div>
                        </div>

                        <div className="card color-blue">
                            <img src="https://alru.ga/static/media/alpaps.94e0b068.png" alt=""/>
                            <div className="staff-card-info">
                                <h3>Alpaps</h3>
                                <h4 className="color-blue-text">Head Admin</h4>
                            </div>
                        </div>

                        <div className="card color-blue">
                            <img src="https://alru.ga/static/media/wartowin.443e2512.png" alt=""/>
                            <div className="staff-card-info">
                                <h3>War To Win</h3>
                                <h4 className="color-blue-text">Head Admin</h4>
                            </div>
                        </div>

                        <div className="card color-red">
                            <img src="https://alru.ga/static/media/zeropoint.3b7a16bb.png" alt=""/>
                            <div className="staff-card-info">
                                <h3>Zeropoint</h3>
                                <h4 className="color-red-text">Admin</h4>
                            </div>
                        </div>

                        <div className="card color-red">
                            <img src="https://alru.ga/static/media/coelusceer.68078ba3.png" alt=""/>
                            <div className="staff-card-info">
                                <h3>Coleus</h3>
                                <h4 className="color-red-text">Admin</h4>
                            </div>
                        </div>

                        <div className="card color-red">
                            <img src="https://alru.ga/static/media/therandomguy98.8ac971ea.png" alt=""/>
                            <div className="staff-card-info">
                                <h3>TheRandomGuy</h3>
                                <h4 className="color-red-text">Admin</h4>
                            </div>
                        </div>

                        <div className="card color-red">
                            <img src="http://www.gravatar.com/avatar/778caf96c7ab92e7202f0b3545d76061?s=1024" alt=""/>
                            <div className="staff-card-info">
                                <h3>TheLonelySysAdmin</h3>
                                <h4 className="color-blue-text">Full-stack Engineer</h4>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        );
    }
}

export default hot(module)(Servers);
