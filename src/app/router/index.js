import React, { Component } from 'react';

import { withRouter } from 'react-router';
import { Switch, Route } from 'react-router-dom';

import Loadable from 'react-loadable';
import Loader from '../components/loader';

const LoginPage = Loadable({
    loader: () => import('../pages/login'),
    loading: Loader,
});

const HomePage = Loadable({
    loader: () => import('../pages/home'),
    loading: Loader,
});

class Router extends Component {
    render() {
        const DOM = (
            <div>
                <Switch>
                    <Route exact path="/" component={LoginPage} />
                    <Route exact path="/home" component={HomePage} />
                </Switch >
            </div>
        );

        return (
            DOM
        );
    }
}

export default withRouter(Router);
