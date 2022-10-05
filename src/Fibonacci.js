import './App.css';
import React, { useState } from 'react';

const getFibonacci = (end) => {
  console.log('get all fibonacci numbers...');
  let n1 = 0, n2 = 1, nextTerm;
  nextTerm = n1 + n2;

  const allNumberWithFibonacci = [];

  while (nextTerm <= end) {
    allNumberWithFibonacci.push(nextTerm)
    n1 = n2;
    n2 = nextTerm;
    nextTerm = n1 + n2;
  }

  return allNumberWithFibonacci;
}

function Fibonacci() {
  const [fibo, setFibo] = useState(1000000);
  console.log('App rendering...');

  const allNumberWithFibonacci = getFibonacci(fibo);

  return (
    <div className="App">
      <input type='number' onChange={({ target: { value } }) => setFibo(parseInt(value))} value={fibo} />
      <div>
        All fibonacci number: {allNumberWithFibonacci.join(', ')}
      </div>
    </div>
  );
}

export default Fibonacci;
