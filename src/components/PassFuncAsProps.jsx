import React from 'react'

function PassFuncAsProps(props) {
  return (
    <div>
      <h2>Pass Function as Props</h2>
      <button onClick={props.data}>Get Data</button>
    </div>
  )
}

export default PassFuncAsProps
