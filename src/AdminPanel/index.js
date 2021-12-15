import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import AdminHome from './AdminHome/AdminHome';
import Login from './Authentication/Login/Login';
import Registration from './Authentication/Registration/Registration';
import Dashboard from './Dashboard/Dashboard';

const Admin = () => {
    const {path} = useRouteMatch();
    return (
        <div>
            <h1>Admin Route</h1>
            <Switch>
                <Route exact path={`${path}`}>
                    <AdminHome/>
                </Route>
                <Route path={`${path}/login`}>
                    <Login/>
                </Route>
                <Route path={`${path}/register`}>
                    <Registration/>
                </Route>
                <Route path={`${path}/dashboard`}>
                    <Dashboard/>
                </Route>
            </Switch>
        </div>
    );
};

export default Admin;