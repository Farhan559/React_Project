import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
    const navigate = useNavigate();
    return (
    <>
      <h2>This is Contact Page</h2>
      <button onClick={()=>navigate('/home')}>Go to Home</button>
      <button onClick={()=>navigate('/about')}>Go to AboutUS</button>
    </>
  )
}

export default Contact
