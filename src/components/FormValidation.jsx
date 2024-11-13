import React, { useState } from 'react'

function FormValidation() {
    const [pass,setPass] = useState('');
    const [email,setEmail] = useState('');
    const [err,setErr] = useState(false);
    const [errPass ,setPassErr] = useState(false);
    function LoginForm(e){
        if(email.length < 3 || pass.length<5){
            alert('please fill form carefully')
        }else{
            console.log(email)
            console.log(pass)
            alert('Thanks')
        }
            e.preventDefault();
    }
    function emailHandler(e){
        let element = e.target.value;
        if(element.length < 3){
            setErr(true);
        }
        else{
            setErr(false);
        }
        setEmail(element);
    }
        function passHandler(e){
            let element = e.target.value;
            if(element.length < 5){
                setPassErr(true)
            }else{
                setPassErr(false)
            }
            setPass(element);
        }
    
  return (
    <>
        <form onSubmit={LoginForm}>
            <input type="email" placeholder='Enter your email'onChange={emailHandler}/>
            {err ? <span>Minimum 3 letters required</span>: <span></span>}
            <br></br>
            <br></br>
            <input type="password" placeholder='Enter your password' onChange={passHandler}/>
            {errPass ? <span>Minimun 5 letters required!</span>:<span></span>}
            <br></br>
            <br></br>
            <button type='submit' >Submit</button>
        </form>
    </>
  )
}

export default FormValidation
