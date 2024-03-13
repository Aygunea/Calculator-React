import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CounterProvider } from './context/CounterContext';
import { CalCulatorProvider } from './context/CalculatorContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CounterProvider>
      <CalCulatorProvider>
        <App />
      </CalCulatorProvider>
    </CounterProvider>
  </React.StrictMode>
);


