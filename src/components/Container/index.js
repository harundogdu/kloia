import React from "react";
import Menu from "../Menu";
import Content from "../Content";
import { Col, Container as ContainerMain, Row } from "react-bootstrap";
function Container() {
  return (
    <ContainerMain className="mt-3">
      <Row>
        <Col md={4}>
          <Menu />
        </Col>
        <Col md={8}>
          <Content />
        </Col>
      </Row>
    </ContainerMain>
  );
}

export default Container;
