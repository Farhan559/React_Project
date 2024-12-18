import React, { useEffect } from 'react'
import '../App.css';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem('login',true)
    navigate('/home');
  }
  useEffect(()=>{
    let login = localStorage.getItem('login')
    if(login){
      navigate('/home');
    }
  })

  return (
    <div className='login'>
        <h3>Login</h3>
        <input type="text" placeholder='Enter Username' />
        <br />
        <input type="Password" placeholder='Enter Password' />
        <br />
        <button className='logbtn' onClick={handleLogin}>Login</button>
      
    </div>
  )
}

export default Login
