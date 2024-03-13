import { createContext, useState } from "react";

const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
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
    let data = {
        num1, num2, setNum1, setNum2, operator, setOperator, result, setResult, showResult
    }
    return (
        <CounterContext.Provider value={data}>
            {children}
        </CounterContext.Provider>
    );
};
export default CounterContext;
