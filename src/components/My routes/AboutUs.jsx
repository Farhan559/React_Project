import React from 'react'
import { Link } from 'react-router-dom'

function AboutUs() {
  return (
    <div>
      <h2>About Us</h2>
    <li><Link to="/employee/farzeen/22">Farzeen</Link> </li>  
     <li><Link to="/employee/huzaifa/23">Huzaifa</Link> </li>  
    </div>
  )
}

export default AboutUs
