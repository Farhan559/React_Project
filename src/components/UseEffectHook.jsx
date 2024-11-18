import React, { useEffect, useState } from 'react'

function UseEffectHook() {
    const[age,setAge] = useState(21);
    const[count,setCount] = useState(1);
    useEffect(()=>{
        console.log('UseEffect Hook in React');
    },[age])
  return (
    <>
    <h3>UseEffect Hooks</h3>
    <h2>Age: {age}</h2>
    <h2>Counter : {count}</h2>
    <button onClick={()=>setCount(1)}>Update Count</button>
    <button onClick={()=>{setAge(age+1)}}>AGE</button>
    </>
  )
}

export default UseEffectHook
