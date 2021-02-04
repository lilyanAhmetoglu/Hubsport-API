import React, { Component } from "react";
import {Container} from "react-bootstrap";

class Page15 extends Component {
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
    return (
      <Container>
        <h3>Bei Nicht-Eignung Absage und Frage nach Empfehlung</h3>
        <p>
          "Tut mir leid, aber aktuell können wir Ihnen da leider nicht helfen.
          Darf ich Ihnen noch eine kurze Frage stellen:
        </p>

        <p>
          Wen kennen Sie denn noch, für den ein Film/Video interessant sein
          könnte? Wenn Sie wen kennen würde, wer wäre das?"
        </p>
        <p>Bitte Namen des potenziellen Interessenten angeben</p>
        <div className="Notizen">
          <p>
            <strong>Notizen</strong>{" "}
          </p>
        </div>


        <button type="button" className="btn btn-warning" onClick={this.back}>
          « Back
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => this.page(19)}
        >
          Next »
        </button>
      </Container>
    );
  }
}

export default Page15;
