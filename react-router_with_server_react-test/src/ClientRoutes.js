import React from 'react';
import { BrowserRouter,Switch, Route,Link } from 'react-router-dom';
import Home from './components/Home/Home';
import List from './components/Listing/Listing';

export const ClientRoutes = () => {
    return(
        <BrowserRouter> 
            <div>
                <Link to={"/"}>Home</Link> &nbsp;
                <Link to={"/list"}>List</Link>
            </div>
            <Switch>
                <Route exact={true} path="/">
                    <Home/>
                </Route>
                <Route exact={true} path="/list" render={(props) => {
                    return <List/>;
                }}>
                </Route>            
            </Switch>
        </BrowserRouter>
    )
}
