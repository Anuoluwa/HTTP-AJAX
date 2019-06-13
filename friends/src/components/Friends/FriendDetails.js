import React from 'react';

function FriendDetails ({ friends, deleteFriend, ...props }) {
    const {name, age, email } = friends;
    return (
        <div>
          <div>
              <h2>{name}</h2>
          <div className="friend-age">
            Age: <em>{age}</em>
          </div>
          <div className="friend-email">
            email: <strong>{email}</strong>
          </div>
          <div>
          <button>Remove</button> 
          <button>Update</button>

          </div>
          </div>
        </div>
    )
}

export default FriendDetails;