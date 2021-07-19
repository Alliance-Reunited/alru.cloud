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
            <main className="text-center">
                <h1 className="mt-5 mb-3">Welcome to the Alru Network!</h1>
                <div className="sidebar-wrapper">
                    <iframe src="https://canary.discord.com/widget?id=757079346719621150&theme=dark" width="350" height="500" allowTransparency={true} frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
                </div>
            </main>
        );
    }
}

export default hot(module)(Home);
