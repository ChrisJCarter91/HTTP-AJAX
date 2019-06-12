import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
display: flex;
`;

const StyledForm = styled.form`
display: flex;
justify-content: center;
`;

class AddFriend extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            name: '',
            age: '',
            email: '',
        }
    };

    render() {
        return (
            <StyledForm>
                <input 
                    placeholder='Name'
                    type='text'
                    name='name'
                    value={this.props.name}
                    onChange={this.handleChange}
                />
                <input 
                    placeholder='Age'
                    type='text'
                    name='age'
                    value={this.props.age}
                    onChange={this.handleChange}
                />
                <input 
                    placeholder='Email'
                    type='text'
                    name='email'
                    value={this.props.email}
                    onChange={this.handleChange}
                />
                <StyledButton onClick={this.props.handleAddFriend}>Add Friend</StyledButton>
            </StyledForm>
        )
    }

}

export default AddFriend;