import React, { createContext, useState } from 'react';

interface ContextProps {
  children: React.ReactNode;
}

export const MyContext: any = createContext(undefined);

const Context: React.FC<ContextProps> = ({ children }) => {
  const [values, setValues] = useState<[{ id?: number; quant?: number }]>([{}]);
  return (
    <MyContext.Provider value={{ values, setValues }}>
      {children}
    </MyContext.Provider>
  );
};

export default Context;
