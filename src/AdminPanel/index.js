import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth } from '../config/firebase';
import NotFound from '../Pages/NotFound/NotFound';
import { loginUser } from '../redux/ActionCreators/AuthAuctionCreator';
import AdminHome from './AdminHome/AdminHome';
import Login from './Authentication/Login/Login';
import Registration from './Authentication/Registration/Registration';
import Dashboard from './Dashboard';
import NavBar from './NavBar/NavBar';

const Admin = () => {
    const {path} = useRouteMatch();
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(()=>{
        auth.onAuthStateChanged(user =>{
            console.log(user);
            if(user === null){
                history.replace("/admin/login");
                return;
            };
            const data = {
                user: user.providerData[0],
                id: user.uid
            };
            dispatch(loginUser(data));
            // toast.success("successfully logged in");
            history.replace("/admin/dashboard");
        });
    },[])
    return (
        <div>
            <Switch>
                {/* <NavBar/> */}
                <Route exact path={`path`}>
                    <AdminHome/>
                </Route>
                <Route exact path={`${path}/login`}>
                    <Login/>
                </Route>
                <Route exact path={`${path}/dashboard/addadmin`}>
                    <Registration/>
                </Route>
                <Route exact path={`${path}/dashboard`}>
                    <Dashboard/>
                </Route>
                <Route exact path="*">
                    <NotFound/>
                </Route>
            </Switch>
        </div>
    );
};

export default Admin;