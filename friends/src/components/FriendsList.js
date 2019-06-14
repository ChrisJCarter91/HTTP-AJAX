import React from 'react';
import Friend from './Friend';

const FriendsList = props => (
        <div>
            {props.friends.map(friend => (
                <Friend 
                friend={friend} 
                key={friend.id} 
                setUpdateForm={props.setUpdateForm} 
                deleteFriend={props.deleteFriend}
                />
            ))}
        </div>
    )

export default FriendsList