import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Posts from './components/Posts';
import './App.css';

function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Posts/>
    </div>
  );
}

export default App;
