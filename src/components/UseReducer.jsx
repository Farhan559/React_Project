import React, { useReducer } from 'react'

const initalState =0;
const reducer = (state,action) =>{
    switch(action){
        case "increment":
            return state +1
        case "decrement":
            return state -1
        default:
            return state;
    }

}
const UseReducer = () => {
    const [count,dispatch] = useReducer(reducer,initalState);
  return (
    <>
      <h3>Use Reducer Hook in React</h3>
      <h3>Counter : {count}</h3>
    <button onClick={()=>dispatch('increment')}>Increment</button>
    <button onClick={()=>dispatch('decrement')}>Decrement</button>
        
    </>
  )
}

export default UseReducer
