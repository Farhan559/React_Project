import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'


const AxiosPutAPI = () => {
    const[post,setPost] = useState({
        title:'',
        body:''
    })
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts/1",{post})
        .then((response)=>{
            console.log(response);
        })
    },[])
    const handleInput = (e)=>{
        setPost({...post,[e.target.name]:e.target.value})
    }
    const handleSubmit = (e)=>{
        axios.put("https://jsonplaceholder.typicode.com/posts/1",{post})
        .then((response)=>{
            console.log(response.data)
        })
    }
  return (
    <>
      <h1>Axios PUT API</h1>
      <Form>
        <input type="text" name='title' onChange={handleInput} placeholder='Enter title' />
        <br />
        <br />
        <input type="text" name='post'onChange={handleInput} placeholder='Enter Post' />
        <br />
        <br />
        <Button onClick={handleSubmit}>Submit</Button>
      </Form>
    </>
  )
}

export default AxiosPutAPI
