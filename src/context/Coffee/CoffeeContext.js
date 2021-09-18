import React, { createContext, useContext, useState, useEffect } from "react";
import coffees_data from "../../assets/db/coffees.json";

export const CoffeeContext = createContext();

export const CoffeeProvider = ({ children }) => {
  const [coffees, setCoffees] = useState(coffees_data);
  const [category, setCategory] = useState("all");

  useEffect(() => {
    switch (category) {
      case "hot":
      case "iced":
        setCoffees(
          coffees_data.filter((coffee) => coffee.category === category)
        );
        break;
      default:
        setCoffees(coffees_data);
        break;
    }
  }, [category]);

  const contextValues = {
    coffees,
    setCoffees,
    category,
    setCategory,
  };
  return (
    <CoffeeContext.Provider value={contextValues}>
      {children}
    </CoffeeContext.Provider>
  );
};

export const useCoffees = () => useContext(CoffeeContext);
