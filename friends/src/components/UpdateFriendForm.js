import React from 'react';
import styled from 'styled-components';

const StyledFriendForm = styled.form`
    margin-top: 10px;
    margin-bottom: 10px;
`;

class UpdateFriendForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            friend: this.props.selectedFriend
        };
    }

    handleChanges = event => {
        this.setState({
            friend: {
                ...this.state.friend,
                [event.target.name]: event.target.value
            }
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.updateFriend(this.state.friend);
    };

    render() {
        return (
            <div>
                <StyledFriendForm onSubmit={this.handleSubmit}>
                <input 
                    placeholder='Name'
                    type='text'
                    name='name'
                    value={this.state.friend.name}
                    onChange={this.handleChanges}
                />
                <input 
                    placeholder='Age'
                    type='text'
                    name='age'
                    value={this.state.friend.age}
                    onChange={this.handleChanges}
                />
                <input 
                    placeholder='Email'
                    type='text'
                    name='email'
                    value={this.state.friend.email}
                    onChange={this.handleChanges}
                />
                <button>Update Friend</button>
                </StyledFriendForm>
            </div>
        )
    }

}

export default UpdateFriendForm;