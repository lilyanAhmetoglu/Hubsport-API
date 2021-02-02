import React, { Component } from "react";
import { Form } from "react-bootstrap";

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
      <div>
        <h1>
          Wenn nach diesen Behandlungen keine Aussage vom Kunden kommt oder das
          Budget zu niedrig ist:
        </h1>

        <p>
          "Wir haben in der Vergangenheit festgestellt, dass eine Investition
          zwischen 3.900 EUR-8.500 EUR notwendig ist, um den von Ihnen
          beschriebenen Film zu realisieren."
        </p>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label> "Ist das für Sie möglich?"</Form.Label>
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
        <button type="button" className="btn btn-warning" onClick={this.back}>
          « Back
        </button>
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
      </div>
    );
  }
}

export default Page11;
