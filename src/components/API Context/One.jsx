import React, { useContext } from 'react';
import { UserContext } from './UseContext';  // Correct import for UserContext

const One = () => {
  const user = useContext(UserContext);  // Accessing the context value directly

  return (
    <>
      <h2>One Child Component</h2>
      <h1>Name: {user.name}</h1>
      <h1>Age: {user.age}</h1>
    </>
  );
};

export default One;
