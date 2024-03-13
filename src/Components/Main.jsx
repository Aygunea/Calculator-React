import React, { useContext, useState } from 'react';
import './Main.css';
import CalculatorContext from '../context/CalculatorContext';

function Main() {
    const { displayValue, setDisplayValue, operator, setOperator, storedValue, setStoredValue, clearDisplay,
        setClearDisplay, handleButtonClick, calculateResult } = useContext(CalculatorContext)

    return (
        <div className="calculator">
            <div className="display">{displayValue}</div>
            <div className="number-container">
                <button className="calculator-number gray" onClick={() => handleButtonClick('AC')}>AC</button>
                <button className="calculator-number gray" onClick={() => handleButtonClick('+/-')}>±</button>
                <button className="calculator-number gray" onClick={() => handleButtonClick('%')}>%</button>
                <button className="calculator-number orange" onClick={() => handleButtonClick('/')}>÷</button>
                <button className="calculator-number" onClick={() => handleButtonClick('7')}>7</button>
                <button className="calculator-number" onClick={() => handleButtonClick('8')}>8</button>
                <button className="calculator-number" onClick={() => handleButtonClick('9')}>9</button>
                <button className="calculator-number orange" onClick={() => handleButtonClick('x')}>x</button>
                <button className="calculator-number" onClick={() => handleButtonClick('4')}>4</button>
                <button className="calculator-number" onClick={() => handleButtonClick('5')}>5</button>
                <button className="calculator-number" onClick={() => handleButtonClick('6')}>6</button>
                <button className="calculator-number orange" onClick={() => handleButtonClick('-')}>-</button>
                <button className="calculator-number" onClick={() => handleButtonClick('1')}>1</button>
                <button className="calculator-number" onClick={() => handleButtonClick('2')}>2</button>
                <button className="calculator-number" onClick={() => handleButtonClick('3')}>3</button>
                <button className="calculator-number orange" onClick={() => handleButtonClick('+')}>+</button>
                <button className="calculator-number" style={{ width: "140px", borderRadius: "40px", textAlign: "left", paddingLeft: "20px" }} onClick={() => handleButtonClick('0')}>0</button>
                <button className="calculator-number" onClick={() => handleButtonClick('.')}>.</button>
                <button className="calculator-number orange" onClick={() => handleButtonClick('=')}>=</button>
            </div>
        </div>
    );
}

export default Main;
