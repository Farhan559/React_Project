import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AxiosGetAPI = () => {
 
    const[mydata,SetmyData] = useState([]);
    useEffect(()=>{
        const url = "https://jsonplaceholder.typicode.com/users";
        axios.get(url)
        .then((response)=>{
            // console.log('Response full',response)
            SetmyData(response.data);
          
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
          });
    },[])
  return (
    <>
        <h3>Axios Get Request...!</h3>
        {
            mydata.map((val,i)=>{
                return(
                    <h4 key={i}>{val.name}</h4>
                )
            })
        }

    </>
  )
}

export default AxiosGetAPI
