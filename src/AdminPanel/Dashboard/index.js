import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, Route, Switch } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { auth } from '../../config/firebase';
import { logOutUser } from '../../redux/ActionCreators/AuthAuctionCreator';
import AllOrders from '../AllOrders/AllOrders';
import Registration from '../Authentication/Registration/Registration';
import NavBar from '../NavBar/NavBar';

const Dashboard = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { path } = useRouteMatch();

    const logout = () => {
        auth.signOut();
        dispatch(logOutUser);
        // history.push("/");
    }
    return (
        <>
            <NavBar />
            <Switch>
                <Route exact path={path}>
                    <h1>This is admin Dashboard</h1>
                    <br />
                    <button className='m-1 btn btn-danger' type='button' onClick={logout}>Logout</button>
                    <button className='m-1 btn btn-info'><Link className='text-decoration-none text-white' to="/admin/dashboard/addadmin">Add New Admin</Link></button>
                    <br />
                    <AllOrders/>
                </Route>
                <Route exact path={`${path}/addadmin`}>
                    <Registration />
                </Route>
            </Switch>
        </>
    );
};

export default Dashboard;