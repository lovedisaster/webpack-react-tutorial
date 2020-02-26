import React from 'react';
import { StaticRouter,Switch, Route,Link } from 'react-router-dom';
import Home from './components/Home/Home';
import List from './components/Listing/Listing';


export const SSRRoutes = () => {
    return(
        <StaticRouter>
            <div>
                <Link to={"/home"}>Home</Link> &nbsp;
                <Link to={"/list"}>List</Link>
            </div>
            <Switch>
                <Route exact={true} path="/home">
                    <Home/>
                </Route>
                <Route exact={true} path="/list" render={() => {
                    // console.dir(props);
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