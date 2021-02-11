import React, { Component } from "react";
import {
  Form,
  Container,
  DropdownButton,
  Dropdown,
  ButtonGroup,
} from "react-bootstrap";

class Page14 extends Component {
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
    const { question7, handleChange } = this.props;
    return (
      <Container>
        <h3>Wenn dies nicht möglich ist, dann:</h3>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>
            {" "}
            "Zusätzlich bieten wir unseren Kunden noch eine Kompaktlösung an,
            die bei einer Investitionssumme von 2.900 EUR liegt, Ist das für Sie
            möglich?""
          </Form.Label>
          <Form.Control
            as="select"
            name="question7"
            value={question7}
            onChange={handleChange("question7")}
          >
            <option value="">Auswählen</option>
            <option value="Ja">Ja</option>
            <option value="Nein">Nein</option>
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
          <Dropdown.Item onClick={() => this.page(13)}>
            Schritt 13
          </Dropdown.Item>
        </DropdownButton>
        {this.props.question7 === "Ja" && (
          <button
            type="button"
            className="btn btn-success"
            onClick={() => this.page(12)}
          >
            Next »
          </button>
        )}
        {this.props.question7 === "Nein" && (
          <button
            type="button"
            className="btn btn-success"
            onClick={() => this.page(15)}
          >
            Next »
          </button>
        )}
      </Container>
    );
  }
}

export default Page14;
