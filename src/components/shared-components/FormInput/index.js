import React from "react";
import { Form } from "react-bootstrap";
import { useCoffees } from "../../../context/Coffee/CoffeeContext";

function FormInput() {
  const { searchText, setSearchText } = useCoffees();
  const handleChange = (e) => {
    setSearchText(e.target.value);
  };
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          value={searchText}
          onChange={handleChange}
          placeholder="Search..."
        />
      </Form.Group>
    </Form>
  );
}

export default FormInput;
