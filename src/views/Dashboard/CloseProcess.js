import React, { Component } from "react";
import { Form, Container, Col, Row } from "react-bootstrap";
export default class CloseProcess extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { name, companyName, position, email, phone,handleChange } = this.props;
    return (
      <Container>
        <h4>End call / Close process</h4>
        <Form.Group>
          <Form.Label>Please enter customer name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="customer name"
            value={name}
            onChange={handleChange("name")}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Please enter company name:</Form.Label>
          <Form.Control
            type="text"
            value={companyName}
            placeholder="Company Name"
            onChange={handleChange("companyName")}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Please enter customer position:</Form.Label>
          <Form.Control
            type="text"
            placeholder="customer position"
            value={position}
            onChange={handleChange("position")}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Please enter customer email address:</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={handleChange("email")}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Please enter customer phone number:</Form.Label>
          <Form.Control
            type="text"
            placeholder="customer phone number"
            value={phone}
            onChange={handleChange("phone")}
          />
        </Form.Group>
        <button type="button" className="btn btn-warning" onClick={this.back}>
          « Back
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={this.continue}
        >
          Next »
        </button>
      </Container>
    );
  }
}
