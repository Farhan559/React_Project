import React, { createContext } from 'react';
import One from './One';

// Creating the context
export const UserContext = createContext();

const UseContext = () => {
  const user = { name: "Ali", age: 25 };  // user data to be shared

  return (
    <UserContext.Provider value={user}>
      <>
        <h2>Use Context API</h2>
        <One />  {/* One component will consume the context */}
      </>
    </UserContext.Provider>
  );
};

export default UseContext;
