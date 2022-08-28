import React from 'react';
import { styled } from '@mui/system';
import PendingInvitationsListItem from './PendingInvitationsListItem';
import { connect } from 'react-redux';

const MainContainer = styled('div')({
    width: '100%',
    height: '22%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'auto',
});

const PendingInvitationsList = ({ pendingFriendsInvitations }) => {
    return (
        <MainContainer>
            {pendingFriendsInvitations.map(invitation => (
                <PendingInvitationsListItem 
                    key={invitation.senderId._id}
                    id={invitation.senderId._id}
                    username={invitation.senderId.username}
                />
            ))}
        </MainContainer>
    );
};

const mapStoreStateToProps = ({ friends }) => {
    return {
        ...friends,
    };
};

export default connect(mapStoreStateToProps)(PendingInvitationsList);
