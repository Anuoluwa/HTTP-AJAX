import React from 'react';
// import './App.css';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import FriendDetails from './FriendDetails';


export class FriendList extends React.Component {
  state = {
    friend: [],
    errorMessage: '',
    spinner: false,
    friendName: ''
  }

  fetchFriendWithAxios = () => {
    this.setState({ spinner: true })
    axios.get('http://localhost:5000/friends')
      .then(response => {
          console.log(response);
        this.setState({ friend: response.data });
      })
      .catch(error => {
        this.setState({ errorMessage: error.message });
      })
      .finally(() => {
          this.setState({ spinner: true })
      });
  }

  onSubmit(e) {
    e.preventDefault();
    const newFriend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.salary,
    }
    axios.post('http://localhost:5000/friends', newFriend)
    .then(res => console.log(res.data));
  }

  componentDidMount() {
    this.fetchFriendWithAxios();
  }
  render() {
    return (
      <div className="App">
        {
          this.state.errorMessage && <div className='error'>{this.state.errorMessage}</div>
        }
        <div className="friend-list">
        {this.state.friend.map(friend => (
          <FriendDetails key={friend.id} friends={friend} />
        ))}
      </div>
      </div>
    );
  }
}


export default FriendList;
