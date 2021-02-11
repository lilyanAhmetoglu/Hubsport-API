import React, { Component } from "react";
import {
  Form,
  Container,
  DropdownButton,
  Dropdown,
  ButtonGroup,
} from "react-bootstrap";

class Page13 extends Component {
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
    const { question6, handleChange } = this.props;
    return (
      <Container>
        <h3>Das ist aber teuer... / oder andere Einwände</h3>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>
            {" "}
            Diese erste Einschätzung ist erstmal ein geschätzter Preisrahmen. In
            welchem Bereich des eben genannten Rahmens, sehen Sie sich denn?
          </Form.Label>
          <Form.Control
            as="select"
            name="question6"
            value={question6}
            onChange={handleChange("question6")}
          >
            <option value="">Auswählen</option>
            <option value="Bei Nennung der Summe">Bei Nennung der Summe</option>
            <option value="Nein">Nein, eigentlich ungern</option>
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
          <Dropdown.Item onClick={() => this.page(12)}>
            Schritt 12
          </Dropdown.Item>
        </DropdownButton>
        {this.props.question6 === "Bei Nennung der Summe" && (
          <button type="button" className="btn btn-success" onClick={this.back}>
            Next »
          </button>
        )}
        {this.props.question6 === "Nein" && (
          <button
            type="button"
            className="btn btn-success"
            onClick={this.continue}
          >
            Next »
          </button>
        )}
      </Container>
    );
  }
}

export default Page13;
