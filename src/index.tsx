import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import './globalStyling';
import Raven from 'raven-js';

const root = document.getElementById('root');

if (process.env.NODE_ENV === 'production') {
    Raven
        .config(process.env.REACT_APP_SENTRY_DSN ?? 'Please configure a DSN in your .env file.')
        .install();
}

if (root) {
    ReactDOM.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>,
        root
    );
}
