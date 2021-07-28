import React from 'react';

import '../../public/assets/scss/pages/home.scss';

/**
 * The landing page of the website.
 */
class Home extends React.Component {
    render = () => (
        <main className="text-center container">
            <h1 className="page-title mt-5">Welcome to the Alru Network!</h1>
            <p className="desc mt-3">
                    Reuniting friends, family, and forgotten organizations, we are a community bringing together these scattered groups as one.
                    We&apos;ve also been hosting servers for various different games since November 15, 2020, for the community, and more.
                    Join our Discord to be part of our amazing community today!
            </p>
            <div className="game-btn-wrapper d-flex mt-5">
                <a href="/servers#gmod" className="gmod-btn btn btn-lg">Garry&apos;s Mod</a>
                <a href="/servers#minecraft" className="minecraft-btn btn btn-lg">Minecraft</a>
            </div>
        </main>
    );
}

export default Home;
