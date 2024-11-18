import React, { useState } from 'react';

function Calculator() {
    const [result, setResult] = useState(0);
    const [input, setInput] = useState('');
    const [operator, setOperator] = useState(null);

    const handleInput = (e) => setInput(e.target.value);

    const handleOperation = (op) => {
        if (input === '') return;

        const value = Number(input);
        if (operator) {
            calculate(value);
        } else {
            setResult(value);
        }

        setOperator(op);
        setInput(''); // Clear input after selecting operation
    };

    const calculate = (value) => {
        if (operator === '+') setResult((prev) => prev + value);
        if (operator === '-') setResult((prev) => prev - value);
        if (operator === '*') setResult((prev) => prev * value);
        if (operator === '/') setResult((prev) => prev / value);
    };

    const handleEquals = () => {
        if (operator && input !== '') {
            calculate(Number(input));
            setOperator(null); // Reset operator
            setInput(''); // Clear input
        }
    };

    const handleClear = () => {
        setInput('');
        setResult(0);
        setOperator(null);
    };

    return (
        <>
            <h1>Calculator</h1>
            <div style={{ border: "10px solid grey", height: "300px", textAlign: "center", paddingTop: "20px", width: "500px", margin: "auto" }}>
                <input
                    type="number"
                    style={{ width: "300px", height: "40px" }}
                    value={input}
                    onChange={handleInput}
                />
                <br /><br />
                <div>Result: {result}</div>
                <br />
                <button style={{ fontSize: "40px", marginRight: "20px" }} onClick={() => handleOperation('+')}>+</button>
                <button style={{ fontSize: "40px", marginRight: "20px" }} onClick={() => handleOperation('-')}>-</button>
                <button style={{ fontSize: "40px", marginRight: "20px" }} onClick={() => handleOperation('/')}>/</button>
                <button style={{ fontSize: "40px", marginRight: "20px" }} onClick={() => handleOperation('*')}>*</button>
                <button style={{ fontSize: "40px", marginRight: "20px" }} onClick={handleEquals}>=</button>
                <button style={{ fontSize: "40px", marginRight: "20px" }} onClick={handleClear}>Clear</button>
            </div>
        </>
    );
}

export default Calculator;
