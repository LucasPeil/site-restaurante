import React from 'react';
import logo from './logo.svg';
import './App.scss';


import Header from './components/Header';
import Values from './components/Values';
import Dishes from './components/Dishes';
function App() {
  return (
    <div className="App">
      
        <Header/>
        <Values/>
        <Dishes/>
     
    </div>
  );
}

export default App;
