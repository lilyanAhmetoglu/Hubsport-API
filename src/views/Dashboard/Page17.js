import React, { Component } from "react";
import { Form,Container } from "react-bootstrap";

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
    const { taskName, taskDate, handleChange,taskDesc } = this.props;
    return (
      <Container>
        <h3>Terminvereinbarung</h3>
        <p>
          Haben Sie einen präferierten Wochentag, an dem es Ihnen optimal passen
          würde? Haben Sie auch eine präferierte Uhrzeit?
        </p>

        <p>
          (Wenn Kunde nein sagt, A-B Frage stellen: Zwei Optionen aufzeigen)
          Kontrollieren, dass der Termin im Kalender steht
        </p>

        <p>
          Sie hatten Glück, ich konnte Ihnen noch einen freien Termin bei
          unserem Geschäftsführer "Mustermann" sichern. Er ist absoluter Experte
          und hat unsere Firma von Beginn an aufgebaut.
        </p>

        <p>
          <strong>Möglichkeiten der Absage durchgeben:</strong>
          Gibt es einen Grund, der Ihnen spontan einfällt, warum Sie den Termin
          nicht wahrnehmen könnten? Wenn ja welcher?
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
        <button type="button" className="btn btn-warning" onClick={this.back}>
          « Back
        </button>
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
