import React, { Component } from 'react'

 class Contructor extends Component {
    constructor(){
        super();
        this.state={
            name :"Ali",
            age: 20
        }
    }
  render() {
    //   console.log('i am render')
    return (
      <>
      <h2>Hello Welcome , {this.state.name}</h2>
      <h2>Your age is , {this.state.age}</h2>
    
      </>
    )
  }
}

export default Contructor
