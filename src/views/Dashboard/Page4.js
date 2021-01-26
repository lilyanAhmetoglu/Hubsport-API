import { NearMeOutlined } from "@material-ui/icons";
import React, { Component } from "react";
import { Form } from "react-bootstrap";

class Page4 extends Component {
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
      <div>
        <h1>Einleitung</h1>
        <p1>
          Hallo [HERR oder FRAU], hier ist [Max Mustermann] von der "Muster GmbH". Ich grüße Sie.
        </p1>
        <Form.Label>
            {" "}
        Sie haben sich bei uns gemeldet, um herauszufinden, ob Ihnen unsere Dienstleistungen im Bereich Video
        weiterhelfen können, ist das richtig?
        </Form.Label>
        <Form.Control>
            <option value="">Auswählen</option>
            <option value="">Nein, ich habe mich nicht beworben<button type="button">go to Page 5</button></option>
            <option value="">Ja<button type="button">go to Page 7</button></option>
            <option value="">Ich habe keine Zeit<button type="button">go to Page X</button></option>
        </Form.Control>
        <button type="button" className="btn btn-warning" onClick={this.back}>
          « Back
        </button>
        <button type="button" className="btn btn-success" onClick={this.continue}>
          Next »
        </button>
      </div>
    );
  }
}

export default Page4;
