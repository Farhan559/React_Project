
import React, { Component } from 'react'

export class ComponentClass extends Component {
    constructor(){
        super();
        this.state={
            name:''
        }
    }
         Update(){
            this.setState({name : 'Huzaifa'})
        }
  render() {
    return (
      <>
        <h3>Class based Components</h3>
            <h2>Welcome here,{this.state.name}</h2>
            <button onClick={()=>this.Update()}>Click Me</button>
            
      </>
    )
  }
}

export default ComponentClass
