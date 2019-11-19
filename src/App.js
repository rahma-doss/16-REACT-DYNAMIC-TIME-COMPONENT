import React from 'react';
import Timer from './Timer';
import './App.css';

let millisecondes =18000000;

function App() {
  return (
    <div className="App">
      <Timer ms={millisecondes}/>
    </div>
  );
}

export default App;
