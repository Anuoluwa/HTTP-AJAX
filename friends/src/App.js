import React, { Component } from "react";
import axios from "axios";
import { Route } from "react-router-dom";

import FriendList from "./components/Friends/FriendList";
import FriendForm from "./components/Friends/FriendForm";
import DeleteWarningCard from "./components/Friends/DeleteWarningCard";
import Nav from "./components/Friends/Navbar.js";
export class App extends Component {
  state = {
    friends: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(error => {
        this.setState({ errorMessage: error.message });
      });
  }

  addFriend = friend => {
    axios
      .post("http://localhost:5000/friends", friend)
      .then(response =>
        this.setState({
          friends: response.data,
          name: "",
          age: "",
          email: ""
        })
      )
      .catch(error => {
        this.setState({ errorMessage: error.message });
      });
  };

  updateFriend = (friend, id) => {
    axios
      .put(`http://localhost:5000/friends/${id}`, friend)
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(error => {
        this.setState({ errorMessage: error.message });
      });
  };

  deleteFriend = id => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(error => {
        this.setState({ errorMessage: error.message });
      });
  };
  render() {
    return (
      <div>
        <Nav />
        <Route
          path="/"
          render={props => {
            return (
              <FriendList
                {...props}
                friends={this.state.friends}
                deleteFriend={this.deleteFriend}
                updateFriend={this.updateFriend}
              />
            );
          }}
        />

        <Route
          path="/add"
          render={props => (
            <FriendForm {...props} handleSubmit={this.addFriend} />
          )}
        />

        <Route
          path="/update/:id"
          render={props => (
            <FriendForm {...props} update handleSubmit={this.updateFriend} />
          )}
        />

        <Route
          path="/remove/:id"
          render={props => (
            <DeleteWarningCard {...props} handleSubmit={this.deleteFriend} />
          )}
        />
      </div>
    );
  }
}

export default App;
