import { useState } from 'react';
import Button from './Components/Button';
import './App.css'

function App() {
  let [num1, setNum1] = useState('');
  let [num2, setNum2] = useState('');
  let [operator, setOperator] = useState('');
  let [result, setResult] = useState('');

  const showResult = () => {
    switch (operator) {
      case "+":
        setResult(parseInt(num1) + parseInt(num2))
        break;
      case "-":
        setResult(parseInt(num1) - parseInt(num2))
        break;
      case "*":
        setResult(parseInt(num1) * parseInt(num2))
        break;
      case "/":
        setResult(parseInt(num1) / parseInt(num2))
        break;

      default:
        break;
    }
    setNum1('');
    setNum2('');
    setOperator('');
  }
  return (
    <div className="caculator">
      <input type='text' placeholder='Num1' value={num1} onChange={(e) => { setNum1(e.target.value) }} />
      <input type='text' placeholder='Num2' value={num2} onChange={(e) => { setNum2(e.target.value) }} />
      <input type='text' placeholder='+, -, *, /' value={operator} onChange={(e) => { setOperator(e.target.value) }} />
      <Button onClick={showResult} >=</Button>
      <p>Result: {result}</p>
    </div>
  );
}

export default App;
