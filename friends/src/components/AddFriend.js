import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
display: flex;
`;

const StyledForm = styled.form`
display: flex;
justify-content: center;
margin-top: 20px;
margin-bottom: 20px;
`;

class AddFriend extends React.Component {
    constructor() {
        super();
        this.state ={
            inputs: {
                name: "",
                age: "",
                email: ""
            }
        };
    }


    handleChange = event => {
        this.setState({
            inputs: {
                ...this.state.inputs,
                [event.target.name]: event.target.value
            }
        });
    };

    submitHandler = event => {
        event.preventDefault();
        this.props.addFriend(this.state.inputs);
        this.setState({
            inputs: {
                name: '',
                age: '',
                email: '',
            }
        });
    };


    render() {
        return (
        <div>

            <StyledForm onSubmit={this.submitHandler}>
                <input 
                    placeholder='Name'
                    type='text'
                    name='name'
                    value={this.state.inputs.name}
                    onChange={this.handleChange}
                />
                <input 
                    placeholder='Age'
                    type='text'
                    name='age'
                    value={this.state.inputs.age}
                    onChange={this.handleChange}
                />
                <input 
                    placeholder='Email'
                    type='text'
                    name='email'
                    value={this.state.inputs.email}
                    onChange={this.handleChange}
                />
                <StyledButton> {this.state.update} Add Friend </StyledButton>

            </StyledForm>
        </div>
        )
    }

}

export default AddFriend;