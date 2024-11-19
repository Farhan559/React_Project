import React,{createContext, useState} from 'react'
import FirstChild from './FirstChild';
//Create , provide , use

export const MyData = createContext();
const ContextApiWithHooks = () => {
    const [data,setData] = useState(1);
    const [salary,setSalary] = useState(1);

    const getSalary = (val)=>{
        console.log('Salary is :',val);
        setSalary(val);
    }
  return (
    <MyData.Provider value={{valueData : data , getSalary:getSalary}}>
    <>
        <h2>UseContext Api with Hooks in React</h2>
        <h2>Salary from Super Child : {salary}</h2>
        <button onClick={()=>setData(data+1)}>UpdateData</button>
        <FirstChild />
    </>
    </MyData.Provider>
  )
}

export default ContextApiWithHooks
