import React from 'react';
import logo from './logo.svg';
import './App.css';
import authorize from './authorize';

function App() {
  let data;
  try {
    data = authorize;
  } catch (error) {
    data = error;
  }

  return (
    <div className="App">
      <header className="App-header">
        <data></data>
      </header>
    </div>
  );
}

export default App;
