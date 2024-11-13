import React,{useState} from 'react'

function ConditionalRenderig() {
    const [age , setAge] = useState(29);
  return (
    <div>
        {
            age > 18 ? <h2>your age is greater than 18</h2> : <h2>your age is less than 18</h2>
        }
    </div>
  )
}

export default ConditionalRenderig
