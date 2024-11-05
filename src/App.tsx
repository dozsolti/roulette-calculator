import React from 'react';
import './App.css';
import Home from './pages/Home';
import { BetProvider } from './contexts/Bet';

function App() {
  return (
    <BetProvider>
      <div className="App">
        <Home />
      </div>
    </BetProvider>
  );
}

export default App;
