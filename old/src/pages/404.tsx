import React from 'react';

import '../../public/assets/scss/pages/error.scss';

class Error404 extends React.Component {
    render = (): React.ReactNode => (
        <main className="text-center">
            <h1 className="mt-5 error-header">404</h1>
            <h3 className="error-subscript">The page you were looking for could not be found!</h3>
        </main>
    );
}

export default Error404;
