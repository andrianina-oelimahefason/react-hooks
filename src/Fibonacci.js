import './App.css';
import React, { useEffect, useMemo, useState } from 'react';

const getFibonacci = (end) => {
  console.log('get all fibonacci numbers...');
  let n1 = 0, n2 = 1, nextTerm;
  nextTerm = n1 + n2;

  const allNumberWithFibonacci = [];

  while (nextTerm <= end) {
    allNumberWithFibonacci.push(nextTerm);
    n1 = n2;
    n2 = nextTerm;
    nextTerm = n1 + n2;
  }

  return allNumberWithFibonacci;
}

function useTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      window.clearInterval(intervalId);
    }
  }, []);

  return time;
}

function Fibonacci() {
  const [fibo, setFibo] = useState(1000000);
  console.log('App rendering...');

  const time = useTime();

  const allNumberWithFibonacci = useMemo(() => getFibonacci(fibo), [fibo]);

  return (
    <div className="App">
      <div className='time'>
        {`${time.getHours()} : ${time.getMinutes()} : ${(time.getSeconds().toString().padStart(2, '0'))}`}
      </div>
      <input type='number' onChange={({ target: { value } }) => setFibo(parseInt(value))} value={fibo} />
      <div>
        All fibonacci number: {allNumberWithFibonacci.join(', ')}
      </div>
    </div>
  );
}

export default Fibonacci;
