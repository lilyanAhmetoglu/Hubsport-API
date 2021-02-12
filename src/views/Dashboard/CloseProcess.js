import React, { Component } from "react";
import {
  Form,
  Container,
  DropdownButton,
  Dropdown,
  ButtonGroup,
} from "react-bootstrap";
export default class CloseProcess extends Component {
  page = (number) => {
    this.props.goToStep(number);
  };
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
      domain,
      email,
      phone,
      handleChange,
    } = this.props;
    return (
      <Container>
        <h3>Kontaktinformation</h3>
        <p>Bitte fülle alle bekannten Kontaktdaten aus</p>
        <Form.Group>
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
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
          <Form.Label>Website:</Form.Label>
          <Form.Control
            type="text"
            placeholder=" URL"
            value={domain}
            onChange={handleChange("domain")}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>E-Mail:</Form.Label>
          <Form.Control
            type="email"
            placeholder="E-Mail"
            value={email}
            onChange={handleChange("email")}
            required
          />
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

        <DropdownButton
          as={ButtonGroup}
          title="« Back"
          id="bg-nested-dropdown"
          variant="warning"
        >
          <Dropdown.Item onClick={() => this.page(1)}>Schritt 1</Dropdown.Item>
          <Dropdown.Item onClick={() => this.page(2)}>Schritt 2</Dropdown.Item>
        </DropdownButton>
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
