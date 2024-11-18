import React, { useEffect } from 'react'

function PropsUseEffect(props) {
    useEffect(()=>{
        console.log('UseEffect call',props)
    })
  return (
    <>
    <h3>Props UseEffect</h3>
    <h2>count : {props.data}</h2>
    
    </>
  )
}

export default PropsUseEffect
