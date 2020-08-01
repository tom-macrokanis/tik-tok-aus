import React from 'react';
import Video from './Video.js';
import './App.css';

function App() {
  return (
    // BEM
    <div className="app">
      <div className="app__videos">
        <Video/>
        <Video/>
        <Video/>
      </div>
    </div>
  );
}

export default App;
