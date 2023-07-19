import React, {useState, createContext} from 'react';

export const CelularContext = createContext();
const initialState = []

export const CelularProvider = ({children}) => {
    const [items, setItems] = useState(initialState);
  return (
    <CelularContext.Provider value = {[items, setItems]}>
        {children}
    </CelularContext.Provider>
  );
};

