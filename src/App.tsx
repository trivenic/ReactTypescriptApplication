import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello  from './component/hello/Hello';

function App() {

  const name:string= "Triveni";

  
  return (
    <div className="App">
      <Hello name={name}/>
    </div>
  );
}

export default App;
