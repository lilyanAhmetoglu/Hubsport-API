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
    const {
      name,
      companyName,
      position,
      email,
      phone,
      handleChange,
      newold,
    } = this.props;
    return (
      <Container>
        <h3>Kontaktinformation</h3>
        <p>Bitte fülle alle bekannten Kontaktdaten aus</p>
        <Form.Group>
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="name"
            value={name}
            onChange={handleChange("name")}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Unternehmen:</Form.Label>
          <Form.Control
            type="text"
            value={companyName}
            placeholder="Unternehmen "
            onChange={handleChange("companyName")}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Position:</Form.Label>
          <Form.Control
            type="text"
            placeholder=" position"
            value={position}
            onChange={handleChange("position")}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>E-Mail:</Form.Label>
          {newold === "new" && (
            <Form.Control
              type="email"
              placeholder="E-Mail"
              value={email}
              onChange={handleChange("email")}
              required
            />
          )}
          {newold === "old" && (
            <Form.Control
              type="email"
              placeholder="E-Mail"
              value={email}
              onChange={handleChange("email")}
            />
          )}
        </Form.Group>
        <Form.Group>
          <Form.Label>Telefonnummer :</Form.Label>
          <Form.Control
            type="text"
            placeholder="Telefonnummer "
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
