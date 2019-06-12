import React from 'react';

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

export default FriendDetails;