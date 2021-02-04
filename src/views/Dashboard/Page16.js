import React, { Component } from "react";
import { Container } from "react-bootstrap";

class Page16 extends Component {
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
        <h3>Entscheidende Frage</h3>
        <p>
          "Werden Sie am Ende allein entscheiden, oder gibt esnoch jemanden, mit
          dem Sie sich abstimmen müssen?"
        </p>

        <p>
          (Wenn er nicht der alleinige Entscheider ist, muss der zweite
          Entscheider ebenfalls im Gespräch mit dabei sein)
        </p>

        <p>
          "Im nächsten Gespräch wird einer unserer Strategieberater Ihnen eine
          mögliche Strategie vorstellen und erklären wie die nächsten Schritte
          aussehen würden."
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

export default Page16;
