import {render} from 'react-dom';
import App from './App';
import {ClientRoutes} from './ClientRoutes'
import React from 'react';
import {Link} from 'react-router-dom';

const wrapper = document.getElementById("root");

render(
    <App>
        <ClientRoutes/>
    </App>
,wrapper);