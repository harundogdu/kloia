import React from "react";
import FormInput from "../shared-components/FormInput";
import { Button } from "react-bootstrap";
import { useCoffees } from "../../context/Coffee/CoffeeContext";

function Menu() {
  const { setCategory } = useCoffees();
  const handleCategory = (e) => {
    setCategory(e.target.value);
  };
  return (
    <div>
      <FormInput />
      <Button
        className="d-block w-75"
        title="All Coffees"
        variant="dark"
        value="all"
        onClick={handleCategory}
      >
        All Coffees
      </Button>
      <Button
        className="d-block w-50 my-3"
        title="Hot"
        variant="danger"
        value="hot"
        onClick={handleCategory}
      >
        Hot
      </Button>
      <Button
        className="d-block w-25"
        title="Iced"
        variant="info"
        value="iced"
        onClick={handleCategory}
      >
        Iced
      </Button>
    </div>
  );
}

export default React.memo(Menu);
