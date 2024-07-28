import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Register = () => {
  return (
    <Container>
      <br />

      <h1 className="text-center text-primary">Register</h1>

      <br />
      <Row className="justify-content-center">
        <Col md={6}>
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={6}>
          <FloatingLabel
            controlId="floatingPassword"
            label="Password"
            className="mb-3"
          >
            <Form.Control type="password" placeholder="Password" />
          </FloatingLabel>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={6}>
          <FloatingLabel controlId="floatingPassword" label="Confirm Password">
            <Form.Control type="password" placeholder="Confirm Password" />
          </FloatingLabel>
        </Col>
      </Row>

      <br />

      <Row className="justify-content-center">
        <Col className="text-center" md={6}>
          <Button variant="primary">Register</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
