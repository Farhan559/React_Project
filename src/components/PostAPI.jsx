import React, { useState } from 'react'

const PostAPI = () => {
    const[name,setName] = useState('');
    const[age,setAge] = useState('');
    const[salary,setSalary] = useState('');
    // https://dummy.restapiexample.com/api/v1/create
    const FormSubmit = ()=>{
        console.log({name,age,salary})
        let data = {name,age,salary};
        fetch("https://dummy.restapiexample.com/api/v1/create",{
            method:"POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then((response) => response.json())
        .then((result) => {
            console.log('Response:', result);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
  return (
    <>
      <h1>POST API....!!</h1>
      <input type="text" placeholder='Enter Your Name' onChange={(e)=>setName(e.target.value)}/>
      <br />
      <br />
      <input type="number" placeholder='Enter Your Age' />

      <br />
      <br />
      <input type="number" placeholder='Eter Your Salary' />
      <br />
      <br />
    <button onClick={FormSubmit}>Submit</button>

    </>
  )
}

export default PostAPI
