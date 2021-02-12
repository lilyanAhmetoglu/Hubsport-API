import React, { Component } from "react";
import {
  Container,
  Form,
  DropdownButton,
  Dropdown,
  ButtonGroup,
} from "react-bootstrap";

class Page15 extends Component {
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
    const { note3, handleChange } = this.props;
    return (
      <Container>
        <h3>Bei Nicht-Eignung Absage und Frage nach Empfehlung</h3>
        <p>
          <i>"Tut mir leid, aber aktuell können wir Ihnen da leider nicht helfen.
          Darf ich Ihnen noch eine kurze Frage stellen: Wen kennen Sie denn noch, für den ein Film/Video interessant sein
          könnte? Wenn Sie wen kennen würde, wer wäre das?"</i> 
        </p>
        <p>Bitte Namen des potenziellen Interessenten angeben</p>
        <div className="Notizen">
          <Form.Group>
            <Form.Label>Notizen</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder=" Notizen hier einfügen"
              value={note3}
              onChange={handleChange("note3")}
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
          <Dropdown.Item onClick={() => this.page(14)}>
            Schritt 14
          </Dropdown.Item>
        </DropdownButton>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => this.page(19)}
        >
          Next »
        </button>
      </Container>
    );
  }
}

export default Page15;
