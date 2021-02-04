import React, { Component } from "react";
import { Form,Container } from "react-bootstrap";

class Page12 extends Component {
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
    const { question5, handleChange } = this.props;
    return (
      <Container>
        <h3>Sobald eine Summe genannt wurde:</h3>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>
            {" "}
            "Und diesen Betrag sind Sie auch wirklich bereit für Ihren Film zu
            investieren?"
          </Form.Label>
          <Form.Control
            as="select"
            name="question5"
            value={question5}
            onChange={handleChange("question5")}
          >
            <option value="">Auswählen</option>
            <option value="Ja">Ja</option>
            <option value="Nein"> Nein, eigentlich ungern</option>
          </Form.Control>
        </Form.Group>
        <button type="button" className="btn btn-warning" onClick={this.back}>
          « Back
        </button>
        {this.props.question5 === "Ja" && (
          <button
            type="button"
            className="btn btn-success"
            onClick={() => this.page(16)}
          >
            Next »
          </button>
        )}
        {this.props.question5 === "Nein" && (
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

export default Page12;
