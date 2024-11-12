import React from 'react'

    function sayHello(){
        alert('Hello World')
    }
function FuncComponents() {
  return (
    <div>
      {/* <h1>hello everyone 10+10 = {10+10}</h1> */}
        <h1>Click here for output baby</h1>
      <button onClick={()=>{sayHello()}}>Click Me</button>
    </div>
  )
}

export default FuncComponents
