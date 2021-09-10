import React from 'react';
import './App.css';
import CounterDisplay from './components/counterDisplay/CounterDisplay';
import CounterSettings from './components/counterSettings/CounterSettings';

function App() {
    return (
        <div className="App">
            <CounterSettings/>
            <CounterDisplay/>
        </div>
    );
}

export default App;
