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
                <p className="mt-3">
                    The staff members keeping this whole operation running behind the scenes.
                    Without the help from these amazing people, we would not be able to get to where we are today!
                </p>

                <div className="container">
                    <div className="d-flex flex-row flex-wrap"></div>
                </div>
            </main>
        );
    }
}

export default hot(module)(Servers);
