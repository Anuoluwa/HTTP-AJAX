import React from 'react';
import './App.css';
import FriendList  from './components/Friends/FriendList';
import Header from './components/Friends/Header';
import NewFriend from './components/Friends/NewFriend';

function App() {
  return (
    <div className="App">
       <Header />
      <NewFriend />
      <FriendList />
    </div>
  );
}

export default App;
