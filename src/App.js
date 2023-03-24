import React, { useState, useEffect } from 'react';
import './App.css';
import { RiDeleteBack2Fill } from 'react-icons/ri';
import { FaPlus, FaMinus, FaEquals, FaTimes, FaDivide, FaPercentage } from 'react-icons/fa';

function App() {
  const [ip, setIp] = useState('');
  const [result, setResult] = useState('')
  const numbers = [
    { output: 'C', value: 'clear', key: 'clearInput', op: true },
    { output: <FaPercentage />, value: '%', key: 'getPercentage', op: true },
    { output: <RiDeleteBack2Fill />, value: 'delete', key: 'getDeleteLastIndex', op: true },
    { output: <FaDivide />, value: '/', key: 'getDivision', op: true },
    { output: `7`, value: '7', key: 'numberSeven', op: false },
    { output: `8`, value: '8', key: 'numberEight', op: false },
    { output: `9`, value: '9', key: 'numberNine', op: false },
    { output: <FaTimes />, value: '*', key: 'getMultiplication', op: true },
    { output: `4`, value: '4', key: 'numberFour', op: false },
    { output: `5`, value: '5', key: 'numberFive', op: false },
    { output: `6`, value: '6', key: 'numberSix', op: false },
    { output: <FaMinus />, value: '-', key: 'getMinus', op: true },
    { output: `1`, value: '1', key: 'numberOne', op: false },
    { output: `2`, value: '2', key: 'numberTwo', op: false },
    { output: `3`, value: '3', key: 'numberThree', op: false },
    { output: <FaPlus />, value: '+', key: 'getPlus', op: true },
    { output: `00`, value: '00', key: 'doubleZero', op: false },
    { output: `0`, value: '0', key: 'zero', op: false },
    { output: `.`, value: '.', key: 'dot', op: false },
    { output: <FaEquals />, value: '=', key: 'getResult', op: true },
  ]
  const handleOnClick = (e) => {
    const value = e.target.getAttribute('value');

    if (value === 'clear') {
      console.log("handleOnClick", value)
      setIp('');
      setResult('');
    } else if (value === 'delete') {
      setIp(ip.slice(0, -1));
    } else if (value === '=') {
      let expression = ip;
      if (expression.includes('%')) {
        const [percentageValue, operationValue] = expression.split('%');
        expression = parseFloat(percentageValue) / 100 * operationValue;
      }

      setResult(Number(eval(expression).toFixed(2)));
    } else if (value) {
      console.log("handleOnClick", value)
      setIp(ip + e.target.getAttribute('value'));
    }

  }
  useEffect(() => {

  }, [ip])

  return (
    <>
      <div className="container">
        <div className="input-container">
          <div className="input">{ip}</div>
          <div className="result">{result}</div>
        </div>
        <div className="btn-container">
          {
            numbers.map(num => {
              if (num.op) {
                return (
                  <span className="op" key={num.key} value={num.value} onClick={handleOnClick}>{num.output}</span>
                )
              } else {
                return (
                  <span className="btn" key={num.key} value={num.value} onClick={handleOnClick}>{num.output}</span>
                )
              }
            })
          }
        </div>
      </div>
    </>
  );
}

export default App;
