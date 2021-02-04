import React, { Component } from "react";
import { Form,Container } from "react-bootstrap";

class Page14 extends Component {
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
    const { question7, handleChange } = this.props;
    return (
      <Container>
        <h3>Wenn dies nicht möglich ist, dann:</h3>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>
            {" "}
            "Zusätzlich bieten wir unseren Kunden noch eine Kompaktlösung an,
            die bei einer Investitionssumme von 2.900 EUR liegt, Ist das für Sie
            möglich?""
          </Form.Label>
          <Form.Control
            as="select"
            name="question7"
            value={question7}
            onChange={handleChange("question7")}
          >
            <option value="">Auswählen</option>
            <option value="Ja">Ja</option>
            <option value="Nein">Nein</option>
          </Form.Control>
        </Form.Group>
        <button type="button" className="btn btn-warning" onClick={this.back}>
          « Back
        </button>
        {this.props.question7 === "Ja" && (
          <button
            type="button"
            className="btn btn-success"
            onClick={() => this.page(12)}
          >
            Next »
          </button>
        )}
        {this.props.question7 === "Nein" && (
          <button
            type="button"
            className="btn btn-success"
            onClick={() => this.page(15)}
          >
            Next »
          </button>
        )}
      </Container>
    );
  }
}

export default Page14;
