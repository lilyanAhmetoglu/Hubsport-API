import React, { Component } from "react";
import { NearMeOutlined } from "@material-ui/icons";
import { Form } from "react-bootstrap";

class Page12 extends Component {
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
        <h1>Sobald eine Summe genannt wurde:</h1>

        <Form.Label>
          {" "}
          "Und diesen Betrag sind Sie auch wirklich bereit für Ihren Film zu
          investieren?"
        </Form.Label>
        <Form.Control as="select">
          <option value="">Auswählen</option>
          <option value="">Ja</option>
          <option value="">  Nein, eigentlich ungern</option>
        </Form.Control>

        <button type="button" className="btn btn-warning" onClick={this.back}>
          « Back
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={this.continue}
        >
          Next »
        </button>
      </div>
    );
  }
}

export default Page12;
