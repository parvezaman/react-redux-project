import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { auth } from '../../config/firebase';
import { logOutUser } from '../../redux/ActionCreators/AuthAuctionCreator';

const Dashboard = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const logout =()=>{
        auth.signOut();
        dispatch(logOutUser);
        history.push("/");
    }
    return (
        <div>
            <h1>This is admin Dashboard</h1>
            <br />
            <button type='button' onClick={logout}>Logout</button>
        </div>
    );
};

export default Dashboard;