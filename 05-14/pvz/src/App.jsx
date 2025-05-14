import { useState } from 'react';
import './App.css';

function App() {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState('');

  const handleNumberClick = (num) => {
    if (!operator) {
      setFirstNumber(firstNumber + num);
    } else {
      setSecondNumber(secondNumber + num);
    }
  };

  const handleOperatorClick = (op) => {
    if (firstNumber) {
      setOperator(op);
    }
  };

  const handleClear = () => {
    setFirstNumber('');
    setSecondNumber('');
    setOperator('');
    setResult('');
  };

  const handleEqual = () => {
    const a = Number(firstNumber);
    const b = Number(secondNumber);
    let res = '';

    if (operator === '/' && b === 0) {
      res = 'Klaida: dalyba iš nulio';
    } else if (operator === '+') {
      res = a + b;
    } else if (operator === '-') {
      res = a - b;
    } else if (operator === '*') {
      res = a * b;
    } else if (operator === '/') {
      res = a / b;
    } else {
      res = 'Neteisingi duomenys';
    }

    setResult(res);
  };

  return (
    <div className="container calculator">
      <div className="top mb-3">
        <h3>Skaičiuotuvas</h3>
        <p>Įvesta: {firstNumber} {operator} {secondNumber}</p>
        <p>Rezultatas: {result}</p>
      </div>

      <div className="buttons d-grid gap-2" style={{ maxWidth: '300px' }}>
        <div className="d-flex gap-2">
          <button onClick={handleClear}>C</button>
          <button onClick={() => handleOperatorClick('/')}>/</button>
          <button onClick={() => handleOperatorClick('*')}>*</button>
          <button onClick={() => handleOperatorClick('-')}>-</button>
        </div>

        <div className="d-flex gap-2">
          <button onClick={() => handleNumberClick('7')}>7</button>
          <button onClick={() => handleNumberClick('8')}>8</button>
          <button onClick={() => handleNumberClick('9')}>9</button>
          <button onClick={() => handleOperatorClick('+')}>+</button>
        </div>

        <div className="d-flex gap-2">
          <button onClick={() => handleNumberClick('4')}>4</button>
          <button onClick={() => handleNumberClick('5')}>5</button>
          <button onClick={() => handleNumberClick('6')}>6</button>
          <button className="equal" onClick={handleEqual}>=</button>
        </div>

        <div className="d-flex gap-2">
          <button onClick={() => handleNumberClick('1')}>1</button>
          <button onClick={() => handleNumberClick('2')}>2</button>
          <button onClick={() => handleNumberClick('3')}>3</button>
          <button onClick={() => handleNumberClick('0')} className="zero">0</button>
        </div>
      </div>
    </div>
  );
}

export default App;

