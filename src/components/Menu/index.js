import React from "react";
import FormInput from "../shared-components/FormInput";
import { Button } from "react-bootstrap";

function Menu() {
  return (
    <div>
      <FormInput />
      <Button className="d-block" title="All Coffees" variant="dark">
        All Coffees
      </Button>
      <Button className="d-block my-3" title="Hot" variant="danger">
        Hot
      </Button>
      <Button className="d-block" title="Iced" variant="info">
        Iced
      </Button>
    </div>
  );
}

export default Menu;
