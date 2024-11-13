import React,{useState} from 'react'

function FormHandling() {
  const [name , setName] = useState('');
  const [option , setOption] = useState('');
  const [agree , setAgree] = useState(false);
  function getFormData(e){
      console.log(name,option,agree)
      e.preventDefault(); 
  }
  return (
    <div>
        <h2>Form Handling in ReactJS</h2>
        <form onSubmit={getFormData}>
            <input type='text' placeholder='enter your name'onChange={(e)=>setName(e.target.value)}></input>
            <br></br>
            <select onChange={(e)=>setOption(e.target.value)}>
                <option>Select any option</option>
                <option >A</option>
                <option>B</option>
                <option>C</option>
            </select>
            <br></br>
            <input type="checkbox"onChange={(e)=>setAgree(e.target.checked)}></input>
            <br></br>
            <button type='submit'onClick={getFormData}>Submit</button>
        </form>
    </div>
  )
}

export default FormHandling
