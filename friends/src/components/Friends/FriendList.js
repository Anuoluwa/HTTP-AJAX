import React from 'react';
import FriendDetails from './FriendDetails';

const  FriendList = ({ friends, updateFriend, deleteFriend, ...props }) => {
  return (
    <div>
    {
      friends.map(friend => (
        <FriendDetails
              {...props}
              key={friend.id}
              updateFriend={updateFriend}
              deleteFriend={deleteFriend}
              friends={friend}
       />
       ))
    }
    </div>
  )
}


// export class FriendList extends React.Component {
//   state = {
//     friend: [],
//     errorMessage: '',
//     spinner: false,
//     friendName: '',
//     id: '',
//   }

//   fetchFriendWithAxios = () => {
//     this.setState({ spinner: true })
//     axios.get('http://localhost:5000/friends')
//       .then(response => {
//         this.setState({ friend: response.data });
//       })
//       .catch(error => {
//         this.setState({ errorMessage: error.message });
//       })
//       .finally(() => {
//           this.setState({ spinner: true })
//       });
//   }

//   componentDidMount() {
//     this.fetchFriendWithAxios();
//   }

//   handleChangeDelete = event => {
//     this.setState({ id: event.target.value });
//   }

//   deleteFriend = (id) => {
//     // delete a friend and retrieve new data from server
//     axios.delete(
//         `http://localhost:5000/friends/${id}`
//         )
//       .then(res => {
//         this.setState({
//           friends: res.data,
//         })
//       })
//       .catch(err => console.log(err))
//   }

//   updateFriend = (friend, id) => {
//     axios.put(
//         `http://localhost:5000/friends/${id}`,
//         friend
//       )
//       .then(res => {
//         this.setState({
//           friends: res.data,
//         })
//       })
//       .catch(err => console.log(err))
//   }
//   render() {
//     return (
//       <div className="App">
//         {
//           this.state.errorMessage && <div className='error'>{this.state.errorMessage}</div>
//         }
//         <div className="friend-list">
//         {this.state.friend.map(friend => (
//           <FriendDe{tails key={friend.id} 
//           friends={friend}
//           updateFriend={this.updateFriend}
//            />
//         ))}
//       </div>
//       </div>
//     );
//   }
// }


export default FriendList;
