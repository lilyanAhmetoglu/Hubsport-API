import React, { Component } from "react";
import { NearMeOutlined } from "@material-ui/icons";
import { Form } from "react-bootstrap";

class Page7 extends Component {
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
        <h1>Unwissenheitsframe</h1>
        <p>
          "Haben Sie ein paar Minuten, damit wir kurz über Ihren Film sprechen
          können?" ["Ja"abholen]
        </p>

        <p>
          {" "}
          "Erzählen Sie mir doch bitte kurz in ein zwei Sätzen, was Sie vorhaben
          und welches Ziel Sie mit Ihrem Film erreichen wollen?"
        </p>
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
          onClick={this.continue}
        >
          Next »
        </button>
      </div>
    );
  }
}
export default Page7;
