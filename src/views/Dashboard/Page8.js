import React, { Component } from "react";
import { NearMeOutlined } from "@material-ui/icons";
import { Form } from "react-bootstrap";

class Page8 extends Component {
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
        <h1>Beratungsgespräch</h1>
        <p>
          <strong>Wenn Website noch nicht bekannt:</strong>
        </p>
        <p>
          "Haben Sie eine Website, die wir uns vorab schon einmal anssehen
          können?"
        </p>
        <p>
          <strong>Wenn Kunde noch kein Ziel vor Augen hat:</strong>{" "}
        </p>
        <p>
          "Wir haben in der Vergangenheit die Erfahrung gemacht",
         
        </p>
        <ul>
            <li>dass unsere Kunden eine höhere SIchtbarkeit anstreben!"</li>
            <li>dass unsere Kunden sich vom Markt abheben wollen"</li>
            <li>dass unsere Kunden attraktiver für Bewerber seien wollen"</li>
            <li>
              dass unsere Kunden eine bessere Wahrnehmung gegenüber Ihren Kunden
              anstreben"
            </li>
          </ul>
        <p>"Welches der genannten Punkte ist für Sie am relevantesten?"</p>
        <div className="Notizen">
          <p>
            <strong>Notizen</strong>{" "}
          </p>
        </div>

        <h2>
          <strong>Vorgesprächs-Frame</strong>
        </h2>

        <p>
          "In diesem Gespräch geht es darum heraus zu finden welches Produkt
          genau zu Ihren Ansprüchen passt, damit wir auch die optimale Lösung
          für Sie auswählen können"
        </p>

        <h3>
          <strong>
            Experten-Frame (optional, wenn Kunde noch nicht ganz überzeugt ist)
          </strong>
        </h3>

        <p>
          "Anhand der Informationen, die Sie mir in diesem Gespräch mitgeben,
          kann ich dann sehr genau einschätzen, wie wir Ihnen weiterhelfen
          können und welches das passende produkt für Sie ist."
        </p>

        <p>
          "Deshalb stelle ich Ihnen nachfolgend ein paar Fragen, in Ordnung?"
          [Ja, abholen]
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
      </div>
    );
  }
}
export default Page8;
