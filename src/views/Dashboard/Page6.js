import React, { Component } from "react";
import { Container } from "react-bootstrap";
class Page6 extends Component {
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
      <Container>
        <h3>
          Ich wollte mich eigentlich nur erstmal nach dem Preis erkundigen.
        </h3>
        <p>
          "Herr/Frau XXX, dazu kommen wir auch noch in diesem Gespräch. Wir
          benötigen lediglich vorab noch ein paar Informationen, um den genauen
          Rahmen festzulegen".
        </p>

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
      </Container>
    );
  }
}
export default Page6;
