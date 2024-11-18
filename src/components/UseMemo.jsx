import React, { useEffect, useMemo, useState } from 'react'

const UseMemo = () => {
    const[count,setCount] = useState(0);
    const[data,setData] = useState(20);
    console.log('redering')
        const multiply = useMemo(function multi(){
            return count * 2
        },[count]);
  return (
    <div>
        <h3>Use Memo Hooks</h3>
        <h2>Count : {count}</h2>
        <button onClick={()=>{setCount(count+1)}}>Count Update</button>
        <h2>Data : {data}</h2>
        <button onClick={()=>{setCount(data*10)}}>Updata Data</button>
    </div>
  )
}

export default UseMemo
    