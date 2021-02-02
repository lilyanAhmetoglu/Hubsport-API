import React, { Component } from "react";
import { NearMeOutlined } from "@material-ui/icons";
import { Form } from "react-bootstrap";

class Page13 extends Component {
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
    const { question6, handleChange } = this.props;
    return (
      <div>
        <h1>Das ist aber teuer... / oder andere Einwände</h1>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>
            {" "}
            Diese erste Einschätzung ist erstmal ein geschätzter Preisrahmen. In
            welchem Bereich des eben genannten Rahmens, sehen Sie sich denn?
          </Form.Label>
          <Form.Control
            as="select"
            name="question6"
            value={question6}
            onChange={handleChange("question6")}
          >
            <option value="">Auswählen</option>
            <option value="Bei Nennung der Summe">Bei Nennung der Summe</option>
            <option value="Nein">Nein, eigentlich ungern</option>
          </Form.Control>
        </Form.Group>
        <button type="button" className="btn btn-warning" onClick={this.back}>
          « Back
        </button>
        {this.props.question6 === "Bei Nennung der Summe" && (
          <button
            type="button"
            className="btn btn-success"
            onClick={this.back}
          >
            Next »
          </button>
        )}
        {this.props.question6 === "Nein" && (
          <button
            type="button"
            className="btn btn-success"
            onClick={this.continue}
          >
            Next »
          </button>
        )}
      </div>
    );
  }
}

export default Page13;
