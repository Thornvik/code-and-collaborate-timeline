import React from 'react';
import './App.scss';
import SmartWrapper from './components/SmartWrapper/index'
import Nav from './components/Nav/index'

function App() {
  return (
    <div className="mainWrapper">
      <Nav />
      <SmartWrapper />
    </div>

  );
}

export default App;