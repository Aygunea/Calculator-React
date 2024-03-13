import { createContext, useState } from "react";

const CalculatorContext = createContext();
export const CalCulatorProvider = ({ children }) => {
    const [displayValue, setDisplayValue] = useState('0');
    const [operator, setOperator] = useState('');
    const [storedValue, setStoredValue] = useState(null);
    const [clearDisplay, setClearDisplay] = useState(false);
  
    const handleButtonClick = (value) => {
      if (!isNaN(parseFloat(value)) || value === '.') {
        if (clearDisplay) {
          setDisplayValue(value);
          setClearDisplay(false);
        } else {
          setDisplayValue(prevDisplayValue =>
            prevDisplayValue === '0' ? value : prevDisplayValue + value
          );
        }
      } else if (value === 'AC') {
        setDisplayValue('0');
        setOperator('');
        setStoredValue(null);
      } else if (value === '+/-') {
        setDisplayValue((parseFloat(displayValue) * -1).toString());
      } else if (value === '%') {
        setDisplayValue((parseFloat(displayValue) / 100).toString());
      } else if (value === '=') {
        calculateResult();
        setClearDisplay(true);
      } else {
        setOperator(value);
        if (storedValue === null) {
          setStoredValue(parseFloat(displayValue));
        } else {
          calculateResult();
        }
        setClearDisplay(true);
      }
    };
  
    const calculateResult = () => {
      let result = null;
      const currentValue = parseFloat(displayValue);
  
      switch (operator) {
        case '+':
          result = storedValue + currentValue;
          break;
        case '-':
          result = storedValue - currentValue;
          break;
        case 'x':
          result = storedValue * currentValue;
          break;
        case '/':
          result = storedValue / currentValue;
          break;
        default:
          break;
      }
  
      setDisplayValue(result.toString());
      setOperator('');
      setStoredValue(null);
    };
    const data={displayValue,setDisplayValue,operator,setOperator,storedValue,setStoredValue,clearDisplay,
    setClearDisplay,handleButtonClick,calculateResult}
    return (
        <CalculatorContext.Provider value={data}>
            {children}
        </CalculatorContext.Provider>
    );
}


export default CalculatorContext;