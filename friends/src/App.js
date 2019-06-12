import React, { Component } from 'react';
// import { Route, Link } from 'react-router-dom';
import axios from 'axios';

import AddFriend from './components/AddFriend';

import './App.css';
import FriendsList from './components/FriendsList';

class App extends Component {
  constructor() {
    super();
    this.state = ({
      friends: [],
    })
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends/')
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(error => {
       console.log(error);
      })
  }

  addFriend = (friend) => {
    axios.post('http://localhost:5000/friends/', friend)
    .then(response => {
      this.setState({ friends: response.data });
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        <FriendsList friends={this.state.friends} />
        <AddFriend addFriend={this.addFriend} />
      </div>
    )
  }

}

export default App;
