import React, { Component } from "react";
import { NearMeOutlined } from "@material-ui/icons";
import { Form } from "react-bootstrap";

class Page9 extends Component {

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
    const { question3, handleChange } = this.props;
    return (
      <div>
        <h1>Fragen stellen</h1>
        <p>
          <strong>Weiche Fragen</strong>
        </p>
        <p>
          <strong>Frage 1:</strong>
          "Bis wann würden Sie denn Ihren Film gerne realisieren?"
        </p>

        <p>
          <strong>
            Kunde: z.B. "Egal", "Weiß ich noch nicht", "In den nächsten drei
            Monaten":
          </strong>
        </p>

        <p>
          "Wenn wir also mit der Konzeption in den nächsten 4 Wochen starten
          würden, wäre das für Sie möglich?"
        </p>

        <p>
          <strong>Frage 2:</strong>
          "Auf welchen Kanälen soll der Film gezeigt bzw. veröffentlicht
          werden?"{" "}
        </p>

        <p>
          <strong>
            (Immer mit dazu sagen, wenn Kunde fragt, wofür wir diese Info
            brauchen):
          </strong>
        </p>

        <p>
          "Wir benötigen diese Information, damit wir für Sie zur
          Veröffentlichung Ihres Films, auch die richtige Musiklizenz auswählen
          können."
        </p>

        <p>
          <strong>Frage 3:</strong>
          "Beinhaltet Ihr Plan auch zusätzlich noch kleine Videos für die
          Vermarktung auf Social Media? Diese kleinen Teaser ermöglichen Ihnen
          einen noch stärkereen Fokus auf spezielle Bereiche in Ihrem
          Unternehmen." [Ja,abholen]
        </p>

        <p>
          <strong>
            Social Media Paket (optional, wenn Kunde noch nicht ganz überzeugt
            ist):
          </strong>
        </p>

        <p>
          "Wir haben ein Social Media Paket ins Leben gerufen, wo Sie zusätzlich
          zu Ihrem Masterfilm noch drei zusätzliche kleine Snippets für die
          Vermarktung auf Social Media bekommen würden, ist das grundsätzlich
          ein Thema für Sie?"
        </p>

        <p>
          <strong>
            Mögl. Einwand Kunde:"Grundsätzlich ja, aber ist natürlich abhängig
            von den Kosten"
          </strong>
        </p>

        <p>
          "Ich würde es mir erst einmal als Option vermerken und wrden es uns
          dann im zweiten Schritt noch einmal genauer anschauen, ja?" [Ja,
          abholen]
        </p>

        <p>
          <strong>Harte Fragen:</strong>
        </p>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>
            {" "}
            "Wie viel Budget haben Sie aktuell für die Realisierung Ihres Films
            zur Verfügung?"
          </Form.Label>
          <Form.Control
            as="select"
            name="question3"
            value={question3}
            onChange={handleChange("question3")}
          >
            <option value="">Auswählen</option>
            <option value="Warum willst du das wissen">
              Warum willst du das wissen?
            </option>
            <option value="Unser Budget beträgt">
              Unser Budget beträgt xx €
            </option>
          </Form.Control>
        </Form.Group>
        <button type="button" className="btn btn-warning" onClick={this.back}>
          « Back
        </button>
        {this.props.question3 === "Warum willst du das wissen" && (
        <button
          type="button"
          className="btn btn-success"
          onClick={this.continue}
        >
          Next »
        </button>
        )}
         {this.props.question3 === "Unser Budget beträgt" && (
        <button
          type="button"
          className="btn btn-success"
          onClick={() => this.page(11)}
        >
          Next »
        </button>
        )}
      </div>
    );
  }
}

export default Page9;
