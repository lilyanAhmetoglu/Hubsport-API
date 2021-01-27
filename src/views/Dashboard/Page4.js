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
        <p>
          Hallo [HERR oder FRAU], hier ist [Max Mustermann] von der "Muster GmbH". Ich grüße Sie.
        </p>
        <Form.Label>
            {" "}
        Sie haben sich bei uns gemeldet, um herauszufinden, ob Ihnen unsere Dienstleistungen im Bereich Video
        weiterhelfen können, ist das richtig?
        </Form.Label>
        <Form.Control as="select">
            <option value="">Auswählen</option>
            <option value="">Nein, ich habe mich nicht beworben</option>
            <option value="">Ja </option>
            <option value="">Ich habe keine Zeit</option>
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
