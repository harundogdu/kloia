import React, { createContext, useContext, useState, useEffect } from "react";
import coffees_data from "../../assets/db/coffees.json";

export const CoffeeContext = createContext();

export const CoffeeProvider = ({ children }) => {
  const [coffees, setCoffees] = useState(coffees_data);
  const [category, setCategory] = useState("all");
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    handleCategory(category);
    setSearchText("");
  }, [category]);

  useEffect(() => {
    handleChangeData(searchText);
  }, [searchText]);

  const handleCategory = (category) => {
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
  };

  const handleChangeData = (text) => {
    const filteredData = coffees_data.filter((coffee) => {
      const searchedText = `${text.toLowerCase()}`;
      const searchingData = `${coffee.title.toLowerCase()} ${coffee.description.toLowerCase()}`;
      return searchingData.indexOf(searchedText) > -1;
    });
    setCoffees(filteredData);
  };

  const contextValues = {
    coffees,
    setCoffees,
    category,
    setCategory,
    searchText,
    setSearchText,
  };
  return (
    <CoffeeContext.Provider value={contextValues}>
      {children}
    </CoffeeContext.Provider>
  );
};

export const useCoffees = () => useContext(CoffeeContext);
