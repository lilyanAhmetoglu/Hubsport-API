import React, { Component } from "react";
import {
  Form,
  Container,
  DropdownButton,
  Dropdown,
  ButtonGroup,
} from "react-bootstrap";

class Page17 extends Component {
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
    const { taskName, taskDate, handleChange, taskDesc } = this.props;
    return (
      <Container>
        <h3>Terminvereinbarung</h3>
        <p>
          <i>
            Haben Sie einen präferierten Wochentag, an dem es Ihnen optimal
            passen würde? Haben Sie auch eine präferierte Uhrzeit?
          </i>
        </p>

        <p>
          (Wenn Kunde nein sagt, A-B Frage stellen: Zwei Optionen aufzeigen)
          Kontrollieren, dass der Termin im Kalender steht
        </p>

        <p>
          <i>
            {" "}
            Sie hatten Glück, ich konnte Ihnen noch einen freien Termin bei
            unserem Geschäftsführer "Mustermann" sichern. Er ist absoluter
            Experte und hat unsere Firma von Beginn an aufgebaut.
          </i>
        </p>

        <p>
          <strong>Möglichkeiten der Absage durchgeben:</strong>
          <i>
            Gibt es einen Grund, der Ihnen spontan einfällt, warum Sie den
            Termin nicht wahrnehmen könnten? Wenn ja welcher?
          </i>
        </p>

        <p>
          Vorbereitende Fragen stellen, um zu gewährleisten, dass die Person
          auch auftauchen wird.
        </p>

        <Form.Group>
          <Form.Label>Aufgabe erstellen</Form.Label>
          <Form.Control
            type="text"
            value={taskName}
            placeholder="Task Name"
            onChange={handleChange("taskName")}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Terminvereinbarung</Form.Label>
          <Form.Control
            type="datetime-local"
            value={taskDate}
            placeholder="Task date and time"
            onChange={handleChange("taskDate")}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            value={taskDesc}
            placeholder="Task Description"
            onChange={handleChange("taskDesc")}
          />
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
          <Dropdown.Item onClick={() => this.page(14)}>
            Schritt 14
          </Dropdown.Item>
          <Dropdown.Item onClick={() => this.page(15)}>
            Schritt 15
          </Dropdown.Item>
          <Dropdown.Item onClick={() => this.page(16)}>
            Schritt 16
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

export default Page17;
