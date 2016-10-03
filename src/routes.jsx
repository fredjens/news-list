import React from 'react';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';

import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home/Container';
import Main from './components/Main';
import Single from './pages/Single/Container';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

const routes = (
    <Router history={appHistory}>
        <Route path="/" component={Main} >
            <IndexRoute component={Home} />
            <Route path=":slug" component={Single} />
        </Route>
        <Route path="*" component={ErrorPage} />
    </Router>
);

export default routes;
