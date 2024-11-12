import React ,{useState} from 'react'

function GetInputFieldVal() {
    const [data ,setData] = useState(null);
    function getVal(val){
        // console.log(val.target.value)
        setData(val.target.value);
        
    }
    return (
        <div>
            <h2>{data}</h2>
        Write here: <input type='text'onChange={getVal}></input>
    </div>
  )
}

export default GetInputFieldVal
    