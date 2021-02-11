import React, { Component } from "react";

import {
  Container,
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
    return (
      <Container>
        <h3>Beratungsgespräch</h3>
        <p>
          <strong>Wenn Website noch nicht bekannt:</strong>
        </p>
        <p>
          "Haben Sie eine Website, die wir uns vorab schon einmal anssehen
          können?"
        </p>
        <p>
          <strong>Wenn Kunde noch kein Ziel vor Augen hat:</strong>{" "}
        </p>
        <p>"Wir haben in der Vergangenheit die Erfahrung gemacht",</p>
        <ul>
          <li>dass unsere Kunden eine höhere SIchtbarkeit anstreben!"</li>
          <li>dass unsere Kunden sich vom Markt abheben wollen"</li>
          <li>dass unsere Kunden attraktiver für Bewerber seien wollen"</li>
          <li>
            dass unsere Kunden eine bessere Wahrnehmung gegenüber Ihren Kunden
            anstreben"
          </li>
        </ul>
        <p>"Welches der genannten Punkte ist für Sie am relevantesten?"</p>
        <div className="Notizen">
          <p>
            <strong>Notizen</strong>{" "}
          </p>
        </div>

        <h3>Vorgesprächs-Frame</h3>

        <p>
          "In diesem Gespräch geht es darum heraus zu finden welches Produkt
          genau zu Ihren Ansprüchen passt, damit wir auch die optimale Lösung
          für Sie auswählen können"
        </p>

        <h3>
          Experten-Frame (optional, wenn Kunde noch nicht ganz überzeugt ist)
        </h3>

        <p>
          "Anhand der Informationen, die Sie mir in diesem Gespräch mitgeben,
          kann ich dann sehr genau einschätzen, wie wir Ihnen weiterhelfen
          können und welches das passende produkt für Sie ist."
        </p>

        <p>
          "Deshalb stelle ich Ihnen nachfolgend ein paar Fragen, in Ordnung?"
          [Ja, abholen]
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
