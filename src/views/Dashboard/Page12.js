import React, { Component } from "react";
import {
  Form,
  Container,
  DropdownButton,
  Dropdown,
  ButtonGroup,
} from "react-bootstrap";

class Page12 extends Component {
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
    const { question5, handleChange } = this.props;
    return (
      <Container>
        <h3>Sobald eine Summe genannt wurde:</h3>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>
            <i>
              "Und diesen Betrag sind Sie auch wirklich bereit für Ihren Film zu
              investieren?"
            </i>
          </Form.Label>
          <Form.Control
            as="select"
            name="question5"
            value={question5}
            onChange={handleChange("question5")}
          >
            <option value="">Auswählen</option>
            <option value="Ja">Ja</option>
            <option value="Nein"> Nein, eigentlich ungern</option>
          </Form.Control>
        </Form.Group>
        <DropdownButton
          as={ButtonGroup}
          title="« Back"
          id="bg-nested-dropdown"
          variant="warning"
        >
          <Dropdown.Item onClick={() => this.page(1)}>Schritt 1</Dropdown.Item>
          <Dropdown.Item onClick={() => this.page(2)}>Schritt 2</Dropdown.Item>
          <Dropdown.Item onClick={() => this.page(3)}>Schritt 3</Dropdown.Item>
          <Dropdown.Item onClick={() => this.page(4)}>Schritt 4</Dropdown.Item>
          <Dropdown.Item onClick={() => this.page(5)}>Schritt 5</Dropdown.Item>
          <Dropdown.Item onClick={() => this.page(6)}>Schritt 6</Dropdown.Item>
          <Dropdown.Item onClick={() => this.page(7)}>Schritt 7</Dropdown.Item>
          <Dropdown.Item onClick={() => this.page(8)}>Schritt 8</Dropdown.Item>
          <Dropdown.Item onClick={() => this.page(9)}>Schritt 9</Dropdown.Item>
          <Dropdown.Item onClick={() => this.page(10)}>
            Schritt 10
          </Dropdown.Item>{" "}
          <Dropdown.Item onClick={() => this.page(11)}>
            Schritt 11
          </Dropdown.Item>
        </DropdownButton>
        {this.props.question5 === "Ja" && (
          <button
            type="button"
            className="btn btn-success"
            onClick={() => this.page(16)}
          >
            Next »
          </button>
        )}
        {this.props.question5 === "Nein" && (
          <button
            type="button"
            className="btn btn-success"
            onClick={() => this.page(14)}
          >
            Next »
          </button>
        )}
      </Container>
    );
  }
}

export default Page12;
