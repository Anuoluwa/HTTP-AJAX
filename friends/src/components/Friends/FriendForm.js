import React, { Component } from 'react'
import axios from 'axios';

export class FriendForm extends Component {
  state = {
    name:'',
    age: '',
    email: ''
  }

  componentDidMount() {
    const { update, match, history } = this.props;

    if (update) {
      axios.get('http://localhost:5000/friends')
      .then(res => {
          const friend = res.data.filter(friend => (
            friend.id.toString() === match.params.id)
          );

          // check if a friend is found and set state, otherwise return back to home
          if (friend.length > 0) {
            this.setState({
              name: friend[0].name,
              age: friend[0].age,
              location: friend[0].location,
              email: friend[0].email,
            })
          } else {
            window.alert(`Cannot find a friend with id ${match.params.id}`)
            history.push('/')
          }
        })
        .catch(err => {
          console.log('ERR');
        });
    }
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = event => {
    event.preventDefault();
    const friend = {...this.state};
    
    // although friend's id is being pass down for both updating and adding friend,
    // the method in App.js will ignore friend's id in the case of adding friend
    this.props.handleSubmit(friend, this.props.match.params.id);
    this.props.history.push('/');
  }
  render() {
    const { name, age, email } = this.state;
    const { history, update } = this.props;
    return (
      <div>
      <div>
      {update ? `Update ${name}'s Info'` : `Add ${name} as Friend`}
          <form onSubmit={this.handleSubmit}>
              <input type="text" name="name" value={name} onChange={this.onChange} placeholder=" name" />
              <input type="text" name="age" value={age} onChange={this.onChange} placeholder=" age" />
              <input type="text" name="email"  value={email} onChange={this.onChange}  placeholder="email"/>
              <button type="submit" content={update ? 'update' : 'add'}
              onClick={this.onSubmit}>Add New Friend</button>
              <button onClick={ () => {history.push('/')}}>Cancel</button>
          </form>
      </div>
        
      </div>
    )
  }
}

export default FriendForm

// export class NewFriend extends Component {
//     state = {
//         name:'',
//         age: '',
//         email: ''
//       }

//       handleChange = event => {
//         this.setState({ [event.target.name]: event.target.value });
//         this.setState({ [event.target.age]: event.target.value });
//         this.setState({ [event.target.email]: event.target.value });
//       }
    
//       handleSubmit = event => {
//         event.preventDefault();
    
//         const newFriend = {
//             name: this.state.name,
//             age: this.state.age,
//             email: this.state.email,
//         }
    
//         axios.post(`http://localhost:5000/friends`, newFriend)
//           .then(res => {
//             return res.data;
//           })
//       }
//     render() {
//         const { name, age, email } = this.state;
//         return (
//             <div>
//                 <form onSubmit={this.handleSubmit}>
//                     <input type="text" name="name" value={name} onChange={this.handleChange} placeholder=" name" />
//                     <input type="text" name="age" value={age} onChange={this.handleChange} placeholder=" age" />
//                     <input type="text" name="email"  value={email} onChange={this.handleChange}  placeholder="email"/>
//                     <button type="submit">Add New Friend</button>
//                 </form>
//             </div>
//         )
//     }
// }

// export default NewFriend
