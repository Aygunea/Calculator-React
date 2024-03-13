import { useContext, useState } from 'react';
import Button from './Components/Button';
import './App.css'
import CounterContext from './context/CounterContext';
import Main from './Components/Main';

function App() {
  const { num1, num2, setNum1, setNum2, operator, setOperator, result, setResult, showResult } = useContext(CounterContext)

  return (
    <div className="caculator">
      {/* <input type='text' placeholder='Num1' value={num1} onChange={(e) => setNum1(e.target.value)} />
      <input type='text' placeholder='Num2' value={num2} onChange={(e) => setNum2(e.target.value)} />
      <input type='text' placeholder='+, -, *, /' value={operator} onChange={(e) => { setOperator(e.target.value) }} />
      <Button onClick={showResult} >=</Button>
      <p>Result: {result}</p> */}
      <Main/>
    </div>
  );
}

export default App;
