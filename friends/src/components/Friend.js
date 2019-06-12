import React from 'react';

const Friend = props => (
        <div>
            <p>Name: {props.friend.name}</p>
            <p>Age: {props.friend.age}</p>
            <p>Email: {props.friend.email}</p>
        </div>
    );

export default Friend;