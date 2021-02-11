import React, { Component } from "react";
import { Form, Container } from "react-bootstrap";

export default class Intorduction extends Component {
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
      handleChange,
      contactperson,
      company,
      contacts,
      companies,
    } = this.props;
    return (
      <Container>
        <h3>Bestehender Kontakt</h3>
        <p>
          Wenn du schon weißt, wen du anrufen möchtest, wähle bitte deine
          Kontaktperson, (sofern du keine konkrete Ansprechperson hast, klicke
          „next“)
        </p>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>1.Welches Unternehmen möchtest du anrufen?</Form.Label>
          <Form.Control
            as="select"
            value={company}
            onChange={handleChange("company")}
          >
            <option value="">Auswählen</option>
            {companies.map((company, index) => (
              <option
                key={index}
                value={company.companyId}
                onClick={this.onClickHandler}
              >
                {" "}
                {Object.values(company.properties)[0].value}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>
          2.Welchen Ansprechpartner möchtest du kontaktieren? 
          </Form.Label>
          <Form.Control
            as="select"
            value={contactperson}
            onChange={handleChange("contactperson")}
          >
            <option value="">Auswählen</option>
            {contacts.map((contact, index) => (
              <option key={index} value={contact.vid}>
                {Object.values(contact.properties)[0].value}{" "}
                {Object.values(contact.properties)[2].value}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <button type="button" className="btn btn-warning" onClick={this.back}>
          « Back
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => this.page(4)}
        >
          Next »
        </button>
      </Container>
    );
  }
}
