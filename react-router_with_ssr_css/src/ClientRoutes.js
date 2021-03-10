import React from 'react';
import { BrowserRouter,Switch, Route,Link } from 'react-router-dom';
import Home from './components/Home/Home';

export const ClientRoutes = () => {
    return(
        <BrowserRouter>
            <div>
                <Link to={"/home"}>Home</Link> &nbsp;
                <Link to={"/list"}>List</Link>
            </div>
            <Switch>
                <Route exact={true} path="/home">
                    <Home/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

