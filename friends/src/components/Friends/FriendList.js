import React from 'react';
// import './App.css';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';


export class FriendList extends React.Component {
  state = {
    friend: [],
    errorMessage: '',
    spinner: false,
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

  componentDidMount() {
    this.fetchFriendWithAxios();
  }
  render() {
    return (
      <div className="App">
        My Friends App
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

function FriendDetails ({ friends }) {
    const {name, age, email } = friends;
    return (
        <div>
            <h2>{name}</h2>
        <div className="friend-age">
          Age: <em>{age}</em>
        </div>
        <div className="friend-email">
          email: <strong>{email}</strong>
        </div>
        </div>
    )
}

export default FriendList;
