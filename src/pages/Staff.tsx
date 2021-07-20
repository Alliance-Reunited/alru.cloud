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
            <main className="text-center container mt-5"></main>
        );
    }
}

export default hot(module)(Servers);
