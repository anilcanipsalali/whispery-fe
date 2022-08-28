/* eslint-disable */
import React, { useEffect } from 'react';
import { styled } from '@mui/system';
import Sidebar from './Sidebar/Sidebar';
import FriendsSidebar from './FriendsSidebar/FriendsSidebar';
import Messenger from './Messenger/Messenger';
import AppBar from './AppBar/AppBar';
import { logout } from '../../utils/auth';
import { connect } from 'react-redux';
import { getActions } from '../../store/actions/authActions';
import { connectWithSocketServer } from '../../communication/socketConnection';
import Room from './Room/Room';

const Wrapper = styled('div')({
    width: '100%',
    height: '100vh',
    display: 'flex',
});

const Dashboard = ({ setUserDetails, isUserInRoom }) => {
    useEffect(() => {
        const userDetails = localStorage.getItem('user');

        if(!userDetails) {
            logout();
        } else {
            setUserDetails(JSON.parse(userDetails));
            connectWithSocketServer(JSON.parse(userDetails));
        }
    }, []);
    
    return (
    <Wrapper>
        <Sidebar />
        <FriendsSidebar />
        <Messenger />
        <AppBar />
        {isUserInRoom && <Room />}
    </Wrapper>
    );
};

const mapStoreStateToProps = ({ room }) => {
    return {
      ...room,
    };
};

const mapActionsToProps = (dispatch) => {
    return {
        ...getActions(dispatch),
    };
};

export default connect(mapStoreStateToProps, mapActionsToProps)(Dashboard);