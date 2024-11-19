import React ,{useContext} from 'react'
import SecondChild from './SecondChild'
import { MyData } from './ContextApiWithHooks'

const FirstChild = () => {
    const {valueData} = useContext(MyData);
    return (
    <>
      <h2>FirstChild</h2>
      <h2>Value Data : {valueData}</h2>
      <SecondChild />
    </>
  )
}

export default FirstChild
