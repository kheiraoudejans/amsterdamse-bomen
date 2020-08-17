import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import NotFound from './NotFound';
import Helmet from 'react-helmet';
import GlobalStyling from '../globalStyling';

const App = () => (
    <>
        <GlobalStyling />
        <Helmet>
            <title>Fallback title</title>
            <meta name="description" content="Fallback description in case routes don't add their own" />
        </Helmet>
        <Switch>
            <Route component={Home} exact path="/" />
            <Route component={NotFound} path="*" />
        </Switch>
    </>
);

export default App;
