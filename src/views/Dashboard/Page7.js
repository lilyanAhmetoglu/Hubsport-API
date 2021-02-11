import React, { Component } from "react";

import {
  Container,
  DropdownButton,
  Dropdown,
  ButtonGroup,
} from "react-bootstrap";

class Page7 extends Component {
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
    return (
      <Container>
        <h3>Unwissenheitsframe</h3>
        <p>
          "Haben Sie ein paar Minuten, damit wir kurz über Ihren Film sprechen
          können?" ["Ja"abholen]
        </p>

        <p>
          {" "}
          "Erzählen Sie mir doch bitte kurz in ein zwei Sätzen, was Sie vorhaben
          und welches Ziel Sie mit Ihrem Film erreichen wollen?"
        </p>
        <div className="Notizen">
          <p>
            <strong>Notizen</strong>{" "}
          </p>
        </div>
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
export default Page7;
