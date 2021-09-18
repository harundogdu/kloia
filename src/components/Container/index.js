import React from "react";
import Menu from "../Menu";
import Content from "../Content";
import { Col, Container as ContainerMain, Row } from "react-bootstrap";
function Container() {
  return (
    <ContainerMain className="my-2">
      <Row>
        <Col md={4} className="border border-left">
          <Menu />
        </Col>
        <Col md={8}  className="border border-right">
          <Content />
        </Col>
      </Row>
    </ContainerMain>
  );
}

export default Container;
