// import React,{useState} from 'react';
import './App.css';
import PropsFunCom from './components/PropsFunCom';
import GetInputFieldVal from './components/GetInputFieldVal';
// import FuncComponents from './components/FuncComponents';
// import StateInClassCom from './components/StateInClassCom';
// import StateInFuncComp from './components/StateInFuncComp';

function App() {
  // const [firstName,setName] = useState('Qaim')
  return (
    <div className="App">
      <h1>This is my App.js File</h1>
      {/* <FuncComponents/> */}
      {/* <StateInFuncComp /> */}
      {/* <StateInClassCom /> */}
      {/* <PropsFunCom name={firstName} /> */}
      {/* <button onClick={()=>{setName('Ali')}}>Click ME</button> */}
      <GetInputFieldVal />
    </div>
  );
}

export default App;
