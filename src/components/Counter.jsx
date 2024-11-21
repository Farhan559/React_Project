import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

const Counter = () => {

    const [count,setCount] = useState(0);
    const [input,setInput] = useState('');
const increment = () => setCount(count+1);
// const decrement = () => setCount(count-1);
const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  

} 
function handleInputChange(e){
    setInput(e.target.value)
}
const handleSubmit=(e)=>{
    setInput(e.target.value)
}
  return (
    <>
      <h1>Counter States</h1>
      <h3>Counter value:{count}</h3>
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
      <br></br>
      <br></br>
      <br></br>
      <input type="text" onChange={handleInputChange} />
      <Button onClick={handleSubmit}>submit</Button>
      <h3>{input}</h3>
    </>
  )
}

export default Counter;
