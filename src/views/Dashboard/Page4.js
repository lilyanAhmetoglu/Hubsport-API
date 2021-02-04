import React, { Component } from "react";
import { Form ,Container } from "react-bootstrap";

class Page4 extends Component {
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
    const { question1, handleChange } = this.props;
    return (
      <Container>
        <h3>Einleitung</h3>
        <p>
          Hallo [HERR oder FRAU], hier ist [Max Mustermann] von der "Muster
          GmbH". Ich grüße Sie.
        </p>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>
            Sie haben sich bei uns gemeldet, um herauszufinden, ob Ihnen unsere
            Dienstleistungen im Bereich Video weiterhelfen können, ist das
            richtig?
          </Form.Label>
          <Form.Control
            as="select"
            name="question1"
            value={question1}
            onChange={handleChange("question1")}
          >
            <option value="">Auswählen</option>
            <option value="Nein">Nein, ich habe mich nicht beworben</option>
            <option value="Ja">Ja </option>
            <option value="Ich habe keine Zeit">Ich habe keine Zeit</option>
          </Form.Control>
        </Form.Group>
        <button type="button" className="btn btn-warning" onClick={this.back}>
          « Back
        </button>
        {this.props.question1 === "Nein" && (
          <button
            type="button"
            className="btn btn-success"
            onClick={this.continue}
          >
            Next »
          </button>
        )}
        {this.props.question1 === "Ja" && (
          <button
            type="button"
            className="btn btn-success"
            onClick={() => this.page(7)}
          >
            Next »
          </button>
        )}
        {this.props.question1 === "Ich habe keine Zeit" && (
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

export default Page4;
