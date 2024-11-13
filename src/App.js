// import React,{useState} from 'react';
import './App.css';
import PassFuncAsProps from './components/PassFuncAsProps';
// import ConditionalRenderig from './components/ConditionalRenderig';
// import FormHandling from './components/FormHandling';
// import HideShowToggle from './components/HideShowToggle';
// import PropsFunCom from './components/PropsFunCom';
// import GetInputFieldVal from './components/GetInputFieldVal';
// import FuncComponents from './components/FuncComponents';
// import StateInClassCom from './components/StateInClassCom';
// import StateInFuncComp from './components/StateInFuncComp';

function App() {
  // const [firstName,setName] = useState('Qaim')
  function GetData(){
    alert('Pass props as function in React')
  }
  return (
    <div className="App">
      <h1>This is my App.js File</h1>
      {/* <FuncComponents/> */}
      {/* <StateInFuncComp /> */}
      {/* <StateInClassCom /> */}
      {/* <PropsFunCom name={firstName} /> */}
      {/* <button onClick={()=>{setName('Ali')}}>Click ME</button> */}
      {/* <GetInputFieldVal /> */}
      {/* <HideShowToggle /> */}
      {/* <FormHandling /> */}
      {/* <ConditionalRenderig /> */}
      <PassFuncAsProps data={GetData} />
    </div>
  );
}

export default App;
