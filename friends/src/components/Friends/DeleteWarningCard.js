import React, { Component } from 'react'
import axios from 'axios';
// import styled, { css } from "styled-components";
import './friend.css';
export class DeleteWarningCard extends Component {
    state = {
        name: '',
        age: '',
        email: '',
      }

      onSubmit = e => {
        e.preventDefault();
        this.props.handleSubmit(this.props.match.params.id);
        this.props.history.push('/');
      }

      componentDidMount() {
        const { match, history } = this.props;
    
        axios
          .get('http://localhost:5000/friends')
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

   

     
    render() {
        const { name, age, email } = this.state;
    const { history } = this.props;
        return (
            <div class="alert">
                <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
                <div>{name}</div>
                <div>{age}</div>
                <div>{email}</div>
            <button onClick={ () => {history.push('/')} }>
                Cancel
            </button>
            <button onClick={this.onSubmit}>
                Remove
            </button>
            </div>
        )
    }
}

export default DeleteWarningCard
