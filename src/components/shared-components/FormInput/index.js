import React from "react";
import { Form } from "react-bootstrap";

function FormInput() {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Search..." />
      </Form.Group>
    </Form>
  );
}

export default FormInput;
