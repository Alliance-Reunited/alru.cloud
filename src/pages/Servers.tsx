// React libraries.
import React from 'react';
import { hot } from 'react-hot-loader';

import '../../public/assets/scss/pages/servers.scss';

// import Logo from '../../public/assets/img/logos/splash.png';

/**
 * A list of all available servers.
 */
class Servers extends React.Component {
    render = () => {
        return (
            <main className="text-center container mt-5"></main>
        );
    }
}

export default hot(module)(Servers);
