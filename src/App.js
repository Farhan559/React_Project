// import React,{useState} from 'react';
import { useState } from 'react';
import './App.css';
import Calculator from './Calculator';
import Home from './components/My routes/Home';
import { BrowserRouter, Routes,Route,Link} from 'react-router-dom';
import AboutUs from './components/My routes/AboutUs';
// import UseMemo from './components/UseMemo';
// import PropsUseEffect from './PropsUseEffect';
// import UseEffectHook from './components/UseEffectHook';
// import ComponentClass from './components/ComponentClass';
// import ComponentDidUpdate from './ComponentDidUpdate';
// import FormCheck from './FormCheck';
// import Contructor from './components/Contructor';
// import FormValidation from './components/FormValidation';
// import PassFuncAsProps from './components/PassFuncAsProps';
// import ConditionalRenderig from './components/ConditionalRenderig';
// import FormHandling from './components/FormHandling';
// import HideShowToggle from './components/HideShowToggle';
// import PropsFunCom from './components/PropsFunCom';
// import GetInputFieldVal from './components/GetInputFieldVal';
// import FuncComponents from './components/FuncComponents';
// import StateInClassCom from './components/StateInClassCom';
// import StateInFuncComp from './components/StateInFuncComp';


function App() {
  // // const [firstName,setName] = useState('Qaim')
  // function GetData(){
  //   alert('Pass props as function in React')
  // }
  const[count,setCount] = useState(0)
  
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
      {/* <PassFuncAsProps data={GetData} /> */}
      {/* <FormValidation /> */}
      {/* <Contructor/> */}
      {/* <FormCheck /> */}
      {/* <ComponentDidUpdate /> */}
      {/* <ComponentClass /> */}
      {/* <UseEffectHook /> */}
      {/* <PropsUseEffect data={count}/> */}
      {/* <button onClick={()=>setCount(count+1)}>Click</button> */}
      {/* <UseMemo /> */}
      {/* <Calculator /> */}
      <BrowserRouter>
      <div style={{fontSize:'20px', display:'flex',gap:'20px', color:'red'}}>
        
        <Link to='/home'>Home</Link>
        <Link to='/About'>AboutUS</Link>
        <Link to='/calculator'>Calculator</Link>
      </div>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/About' element={<AboutUs/>}/>
        <Route path='/calculator' element={<Calculator />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
