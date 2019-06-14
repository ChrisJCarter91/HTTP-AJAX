import React from 'react'
import styled from 'styled-components';

const StyledFriendCard = styled.div`
    display: flex;
    flex-direction: column;
    border: 2px solid red;
    width: 50%;
    align-items: center;
    margin-left: 25%;
    margin-top: 10px;
`;

const StyledButton = styled.button`
    width: 75px;
    margin-bottom: 10px; 
`;



const Friend = props => (
        <StyledFriendCard>
            <p>Name: {props.friend.name}</p>
            <p>Age: {props.friend.age}</p>
            <p>Email: {props.friend.email}</p>
            <StyledButton onClick={event => props.setUpdateForm(event, props.friend)}>Update</StyledButton>
            <StyledButton onClick={event => props.deleteFriend(event, props.friend)}>Delete</StyledButton>
        </StyledFriendCard>
    );


export default Friend;