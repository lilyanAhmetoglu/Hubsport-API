import React, { Component } from "react";
import {
  Form,
  Container,
  DropdownButton,
  Dropdown,
  ButtonGroup,
} from "react-bootstrap";

class Page11 extends Component {
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
    const { question4, handleChange } = this.props;
    return (
      <Container>
        <h3>keine Aussage vom Kunden / Budget zu niedrig</h3>

        <p>
          "Wir haben in der Vergangenheit festgestellt, dass eine Investition
          zwischen 3.900 EUR-8.500 EUR notwendig ist, um den von Ihnen
          beschriebenen Film zu realisieren."
        </p>
        <p>
          <i>"Ist das für Sie möglich?"</i>
        </p>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Control
            as="select"
            name="question4"
            value={question4}
            onChange={handleChange("question4")}
          >
            <option value="">Auswählen</option>
            <option value="Ja">Ja</option>
            <option value="Das ist aber teuer">
              "Das ist aber teuer..."oder andere Einwände
            </option>
            <option value="Nein das ist nicht möglich">
              Nein das ist nicht möglich
            </option>
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
          </Dropdown.Item>
        </DropdownButton>
        {this.props.question4 === "Ja" && (
          <button
            type="button"
            className="btn btn-success"
            onClick={this.continue}
          >
            Next »
          </button>
        )}
        {this.props.question4 === "Das ist aber teuer" && (
          <button
            type="button"
            className="btn btn-success"
            onClick={() => this.page(13)}
          >
            Next »
          </button>
        )}
        {this.props.question4 === "Nein das ist nicht möglich" && (
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

export default Page11;
