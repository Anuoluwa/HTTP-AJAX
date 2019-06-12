import React, { Component } from 'react'
import axios from 'axios';

export class NewFriend extends Component {
    state = {
        name:'',
        age: '',
        email: ''
      }


      handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
        this.setState({ [event.target.age]: event.target.value });
        this.setState({ [event.target.email]: event.target.value });
      }
    
      handleSubmit = event => {
        event.preventDefault();
    
        const newFriend = {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email,
        }
    
        axios.post(`http://localhost:5000/friends`, newFriend)
          .then(res => {
            return res.data;
          })
      }
    render() {
        const { name, age, email } = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="name" value={name} onChange={this.handleChange} placeholder=" name" />
                    <input type="text" name="age" value={age} onChange={this.handleChange} placeholder=" age" />
                    <input type="text" name="email"  value={email} onChange={this.handleChange}  placeholder="email"/>
                    <button type="submit">Add New Friend</button>
                </form>
            </div>
        )
    }
}

export default NewFriend
