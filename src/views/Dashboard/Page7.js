import React, { Component } from "react";

import {
  Container,
  Form,
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
    const { note1, handleChange } = this.props;
    return (
      <Container>
        <h3>Unwissenheitsframe</h3>
        <p>
          <i>
            {" "}
            "Haben Sie ein paar Minuten, damit wir kurz über Ihren Film sprechen
            können?" ["Ja"abholen]
          </i>
        </p>

        <p>
          {" "}
          <i>
            {" "}
            "Erzählen Sie mir doch bitte kurz in ein zwei Sätzen, was Sie
            vorhaben und welches Ziel Sie mit Ihrem Film erreichen wollen?"
          </i>
        </p>
        <div className="Notizen">
          <Form.Group>
            <Form.Label>Notizen</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder=" Notizen hier einfügen"
              value={note1}
              onChange={handleChange("note1")}
            />
          </Form.Group>
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
