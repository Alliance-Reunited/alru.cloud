import React from 'react';
import { hot } from 'react-hot-loader';

import '../../public/assets/scss/pages/error.scss';

/**
 * The 404 page.
 */
class Error404 extends React.Component {
    render = () => (
        <main className="text-center">
            <h1 className="mt-5 error-header">404</h1>
            <h3 className="error-subscript">Sorry, the link you clicked was an imposter!</h3>
            <h4 className="error-subsubscript">Join our Garry&apos;s Mod Among Us server so you can be an imposter too!</h4>
        </main>
    );
}

export default hot(module)(Error404);
