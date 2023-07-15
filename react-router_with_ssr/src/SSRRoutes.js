import React from 'react';
import { StaticRouter,Switch, Route, NavLink } from 'react-router-dom';
import Home from './components/Home/Home';
import List from './components/Listing/Listing';


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
                <Route exact={true} path="/list" render={() => {
                    return <List/>;
                }}>
                </Route>            
            </Switch>
        </StaticRouter>
    )
}

/* 
    React history, location 
    https://reacttraining.com/react-router/web/api/history
*/