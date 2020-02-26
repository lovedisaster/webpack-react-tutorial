import {renderToString} from 'react-dom/server';
import App from './App';
import {SSRRoutes} from './SSRRoutes'
import React from 'react';


const ReactDomString = renderToString(
    <App>
        <SSRRoutes/>
    </App>);

export default ReactDomString;