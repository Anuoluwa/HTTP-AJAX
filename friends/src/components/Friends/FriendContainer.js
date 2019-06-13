import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import FriendList from './FriendList';

export class FriendContainer extends Component {
    state = {
        friends: [],
        errorMessage: '',
        spinner: false,
        
    }

    fetchFriends = () => {
        this.setState({ spinner: true })
        axios.get('http://localhost:5000/friends')
          .then(response => {
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
        this.fetchFriends();
      }

   addFriend = (friend) => {
       axios.post('http://localhost:5000/friends', friend)
       .then(response => (
           this.setState({
               friends: response.data,
               name: '',
               age:'',
               email:''
           })
           .catch(error => {
            this.setState({ errorMessage: error.message });
          })
       ))
   }

   updateFriend = (friend, id) => {
    axios.put(`http://localhost:5000/friends/${id}`,friend)
      .then(res => {
        this.setState({friends: res.data})
      })
      .catch(error => {
        this.setState({ errorMessage: error.message });
      })
  }

  updateFriend = (id) => {
    axios.delete(`http://localhost:5000/friends/${id}`)
      .then(res => {
        this.setState({friends: res.data})
      })
      .catch(error => {
        this.setState({ errorMessage: error.message });
      })
  }
    render() {
        return (
            <div>
            <Route path='/' render={ props => {
            return (
                this.state.friends.length &&
                <FriendList
                    {...props}
                    deleteFriend={this.deleteFriend}
                    updateFriend={this.updateFriend}
                /> 
            )
            }} />
    
        </div>
        )
    }
}

export default FriendContainer
