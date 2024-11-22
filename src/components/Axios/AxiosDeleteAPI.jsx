import React,{useEffect}from 'react'
import { Form,Button } from 'react-bootstrap'
import axios from 'axios'

const AxiosDeleteAPI = () => {
    // const[post,setPost] = useState({
    //     title:'',
    //     body:''
    // })
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
        .then((response)=>{
            console.log(response);
        })
    },[])
    // const handleInput = (e)=>{
    //     setPost({...post,[e.target.name]:e.target.value})
    // }
    const handleSubmit = (e)=>{
        axios.delete("https://jsonplaceholder.typicode.com/posts/1")
        .then((response)=>{
            alert('Data Delete Successfully')
        })
    }
  return (
    <>
      <h1>Axios PUT API</h1>
      <Form>
        <br />
        <br />
        <Button onClick={handleSubmit}>Delete Post</Button>
      </Form>
    </>
  )
}

export default AxiosDeleteAPI
