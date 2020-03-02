import React from 'react';
import './App.css';
import PiggyBank from './PiggyBank.js';

function App() {
  return (
    // React.createElement('h1', null, 'Hello World!')
    <PiggyBank
    title="Savings Pig"
    depositAmount={5}/>
  );
}

export default App;
