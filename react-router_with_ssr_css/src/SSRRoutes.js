import React from 'react';
import { StaticRouter,Switch, Route, NavLink} from 'react-router-dom';
import Home from './components/Home/Home';


export const SSRRoutes = () => {
    return(
        <StaticRouter location="/home">
            <div>
                <NavLink to={"/home"}>Home</NavLink> &nbsp;
                <NavLink to={"/list"}>List</NavLink>
            </div>
            <Switch>
                <Route exact={true} path="/home">
                    <Home/>
                </Route>     
            </Switch>
        </StaticRouter>
    )
}
