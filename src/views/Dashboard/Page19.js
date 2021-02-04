import React, { Component } from "react";
import { Container } from "react-bootstrap";

class Page19 extends Component {
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
        <h3>Telefonat beenden / Prozess abschließen</h3>
        <p>
          "Ich bedanke mich für das freundliche Telefonat und wünsche Ihnen
          einen schönen Tag/Woche/Wochenende/Urlaub."
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

export default Page19;
