import React, { Component } from 'react'

export class ComponentDidUpdate extends Component {
    constructor(){
        super();
        console.log('Construtor')
        this.state={
            name:'Farhan'
        }
    }
    componentDidUpdate(){
        console.log('Component Did Update')
    }
  render() {
    console.log('render');
    return (
      <div>
        <h1>Hello,{this.state.name}</h1>
        <button onClick={()=>{this.setState({name:'Ayub'})}}>Click Me</button>

      </div>
    )
  }
}

export default ComponentDidUpdate
