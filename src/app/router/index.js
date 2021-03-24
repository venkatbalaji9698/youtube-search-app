import React, { Component } from 'react';

import { withRouter } from 'react-router';
import { Switch, Route } from 'react-router-dom';

import Loadable from 'react-loadable';
import Loader from '../components/loader';
import { PathConstants } from '../constants/path-constants';

const LoginPage = Loadable({
    loader: () => import('../pages/login'),
    loading: Loader,
});

const HomePage = Loadable({
    loader: () => import('../pages/home'),
    loading: Loader,
});

const CardsPage = Loadable({
    loader: () => import('../pages/cards'),
    loading: Loader,
});


class Router extends Component {
    render() {
        const DOM = (
            <div>
                <Switch>
                    <Route exact path={PathConstants.LOGIN} component={LoginPage} />
                    <Route exact path={PathConstants.HOME} component={HomePage} />
                    <Route exact path={PathConstants.CARDS_LIST} component={CardsPage} />
                </Switch >
            </div>
        );

        return (
            DOM
        );
    }
}

export default withRouter(Router);
