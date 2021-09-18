import React, { createContext, useContext, useState } from "react";
import coffees_data from "../../assets/db/coffees.json";

export const CoffeeContext = createContext();

export const CoffeeProvider = ({ children }) => {
  const [coffees, setCoffees] = useState(coffees_data);
  const contextValues = {
    coffees,
    setCoffees,
  };
  return (
    <CoffeeContext.Provider value={contextValues}>
      {children}
    </CoffeeContext.Provider>
  );
};

export const useCoffees = () => useContext(CoffeeContext);
