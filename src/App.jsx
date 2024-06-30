import React, { useState } from 'react';
import ShowCount from './ShowCount/ShowCount';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="app">
      <h1>Contador</h1>
      <ShowCount count={count} />
      <button onClick={increaseCount}>Incrementar</button>
      <button onClick={decreaseCount}>Disminuir</button>
    </div>
  );
};

export default App;
