// React libraries.
import React from 'react';
import { hot } from 'react-hot-loader';

import '../../public/assets/scss/pages/home.scss';

// import Logo from '../../public/assets/img/logos/splash.png';

/**
 * The landing page of the website.
 */
class Home extends React.Component {
    render = () => {
        return (
            <main className="text-center container">
                <h1 className="my-5">Welcome to the Alru Network!</h1>
                <p>Reuniting friends, family, and forgotten organizations, we are a community bringing together these scattered groups as one. We&apos;ve also been hosting servers for various different games since November 15, 2020, for the community, and more. Join our Discord to be part of our amazing community today!</p>
            </main>
        );
    }
}

export default hot(module)(Home);
