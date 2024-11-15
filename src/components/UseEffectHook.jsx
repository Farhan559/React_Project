import React, { useEffect, useState } from 'react'

function UseEffectHook() {
    const[count,setCount] = useState(0);
    useEffect(()=>{
        console.log('UseEffect Hook in React');
    })
  return (
    <>
    <h3>UseEffect Hooks</h3>
    <h2>Counter : {count}</h2>
    <button onClick={()=>setCount(1)}>Update</button>
    </>
  )
}

export default UseEffectHook
