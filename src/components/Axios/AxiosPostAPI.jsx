import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Button, Form} from 'react-bootstrap'

const AxiosPostAPI = () => {
    const[post,setPost] = useState({
        title:'',
        body:' '
    })
    const handleInput = (e)=>{
        setPost({...post,[e.target.name]:e.target.value})
    }
    const handleSubmit = (e)=>{
        axios.post("https://jsonplaceholder.typicode.com/posts",{post})
        .then((response)=>{
            console.log(response)
        })
    }
  
    // useEffect(()=>{
    //     const url = "https://jsonplaceholder.typicode.com/posts";
    //     axios.post(url)
    //     .then((response)=>{
    //         console.log(response)
    //     })
    //     .catch((error) => {
    //         console.error("Error fetching data:", error);
    //       });
    // },[]);
return(
    <>

    <h1>Axios POST API</h1>
    <Form>
        <input type="text" name='title' onChange={handleInput} placeholder='Enter Title' />
        <br />
        <br />
        <input type="text" name='body' onChange={handleInput} placeholder='Enter Description' />
        <br />
        <br />

        <Button onClick={handleSubmit}>Submit</Button>
    </Form>
      
    </>
  )
}

export default AxiosPostAPI
