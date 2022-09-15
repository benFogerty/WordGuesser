import React,{useState} from 'react';
import './App.css';
import Timer from './Components/Timer';
import Rounds from './Components/WordComponent';
import GameDisplay from './Components/WordComponent';

function App() {

  //first declares the word to be used randomly
  
  
  return (
    <div className="App">
      <div id={'info'}>
        <Rounds />
      </div>
    </div>
  );
}

export default App;
