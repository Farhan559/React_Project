import React from 'react'
import Employee from './Employee';

const ReuseComp = () => {
    const employees = [
        { name: "Farhan", email: "farhan@gmail.com", contact: "12345" },
        { name: "Ayub", email: "ayub@gmail.com", contact: "12346" },
        { name: "Abdullah", email: "abdullah@gmail.com", contact: "12347" },
        { name: "Ali", email: "ali@gmail.com", contact: "12348" },
        { name: "Sara", email: "sara@gmail.com", contact: "12349" },
        { name: "Zara", email: "zara@gmail.com", contact: "12350" }
    ];
  return (
    <>
      <h2>ReUse Component in React</h2>
      {
        employees.map((item,i)=>
           
            <Employee data={item} />
        )
      }
    </>
  )
}

export default ReuseComp
