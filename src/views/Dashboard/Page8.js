import React, { Component } from "react";

import {
  Container,
  Form,
  DropdownButton,
  Dropdown,
  ButtonGroup,
} from "react-bootstrap";

class Page8 extends Component {
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
    const { note2, handleChange } = this.props;
    return (
      <Container>
        <h3>Beratungsgespräch</h3>
        <p>
          <strong>Wenn Website noch nicht bekannt:</strong>
        </p>
        <p>
          <i>
            "Haben Sie eine Website, die wir uns vorab schon einmal anssehen
            können?"
          </i>
        </p>
        <p>
          <strong>Wenn Kunde noch kein Ziel vor Augen hat:</strong>{" "}
        </p>
        <p>
          <i>"Wir haben in der Vergangenheit die Erfahrung gemacht"</i>
        </p>
        <ul>
          <li>
            <i>dass unsere Kunden eine höhere SIchtbarkeit anstreben!"</i>
          </li>
          <li>
            <i>dass unsere Kunden sich vom Markt abheben wollen"</i>
          </li>
          <li>
            <i>dass unsere Kunden attraktiver für Bewerber seien wollen"</i>
          </li>
          <li>
            <i>
              {" "}
              dass unsere Kunden eine bessere Wahrnehmung gegenüber Ihren Kunden
              anstreben"
            </i>
          </li>
        </ul>
        <p>
          <i>"Welches der genannten Punkte ist für Sie am relevantesten?"</i>
        </p>
        <div className="Notizen">
          <Form.Group>
            <Form.Label>Notizen</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder=" Notizen hier einfügen"
              value={note2}
              onChange={handleChange("note2")}
            />
          </Form.Group>
        </div>

        <p> <strong>Vorgesprächs-Frame </strong></p>

        <p>
          <i>
            {" "}
            "In diesem Gespräch geht es darum heraus zu finden welches Produkt
            genau zu Ihren Ansprüchen passt, damit wir auch die optimale Lösung
            für Sie auswählen können"
          </i>
        </p>

        <p>
        <strong> Experten-Frame (optional, wenn Kunde noch nicht ganz überzeugt ist) </strong>
        </p>

        <p>
          <i>
            "Anhand der Informationen, die Sie mir in diesem Gespräch mitgeben,
            kann ich dann sehr genau einschätzen, wie wir Ihnen weiterhelfen
            können und welches das passende produkt für Sie ist."
          </i>
        </p>

        <p>
          <i>
            {" "}
            "Deshalb stelle ich Ihnen nachfolgend ein paar Fragen, in Ordnung?"
            [Ja, abholen]
          </i>
        </p>
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
export default Page8;
