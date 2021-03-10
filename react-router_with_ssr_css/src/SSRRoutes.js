import React from 'react';
import { StaticRouter,Switch, Route,Link } from 'react-router-dom';
import Home from './components/Home/Home';


export const SSRRoutes = () => {
    return(
        <StaticRouter>
            <div>
                <Link to={"/home"}>Home</Link> &nbsp;
            </div>
            <Switch>
                <Route exact={true} path="/home">
                    <Home/>
                </Route>     
            </Switch>
        </StaticRouter>
    )
}
