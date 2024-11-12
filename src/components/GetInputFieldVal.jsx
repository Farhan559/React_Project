import React ,{useState} from 'react'

function GetInputFieldVal() {
    const [data ,setData] = useState(null);
    const [print , setPrint] = useState(false);
    function getVal(val){
        // console.log(val.target.value)
        setData(val.target.value);
        setPrint(false);
    }
    return (
        <div>
            {
                print ? 
                <h2>{data}</h2>
                : null

            }
        Write here: <input type='text'onChange={getVal}></input>
            <button onClick={()=>setPrint(true)}>Display Value</button>
    </div>
  )
}

export default GetInputFieldVal
    