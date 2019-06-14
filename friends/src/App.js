import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import AddFriend from './components/AddFriend';
import FriendsList from './components/FriendsList';
import UpdateFriendForm from './components/UpdateFriendForm'

import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      selectedFriend: null,
    };
  }

  componentDidMount() {
    this.getFriends();
  }

  getFriends = () => {
    axios.get('http://localhost:5000/friends')
    .then(response => {
      this.setState({
        friends: response.data
      });
    })
    .catch(error => {
      console.log(error);
    });
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

  setUpdateForm = (event, friend) => {
    event.preventDefault();
    this.setState({ selectedFriend: friend });
    this.props.history.push('/update-form');
  };

  updateFriend = (id, friend) => {
    axios.put(`http://localhost:5000/friends/${friend.id}`, friend)
    .then(response => {
      this.setState({ friends: response.data });
      this.props.history.push('/');
    })
    .catch(error => {
      console.log(error);
    });
  }


  deleteFriend = (event, friend) => {
    event.preventDefault();
    axios
      .delete(`http://localhost:5000/friends/${friend.id}`)
      .then(response => {
        console.log(response);
        this.setState({ friends: response.data });
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    return (
      <div>
        <Route exact path="/" render={props => (<FriendsList {...props} friends={this.state.friends} setUpdateForm={this.setUpdateForm} deleteFriend={this.deleteFriend} /> )} />
        <Route exact path="/" render={props => (<AddFriend {...props} addFriend={this.addFriend} /> )} />
        <Route exact path="/update-form" render={props => (<UpdateFriendForm {...props} selectedFriend={this.state.selectedFriend} updateFriend={this.updateFriend}  /> )} />
      </div>
    )
  }

}

export default App;
