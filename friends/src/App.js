import React from 'react';
import './App.css';
import FriendList  from './components/Friends/FriendList';
import FriendContainer  from './components/Friends/FriendContainer';
import Header from './components/Friends/Header';
import NewFriend from './components/Friends/NewFriend';

function App() {
  return (
    <div className="App">
       <Header />
      <NewFriend />
      <FriendList />
      <FriendContainer />
    </div>
  );
}

export default App;
