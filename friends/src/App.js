import React from 'react';
import './App.css';
import FriendList  from './components/Friends/FriendList';
import Header from './components/Friends/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <FriendList />
    </div>
  );
}

export default App;
