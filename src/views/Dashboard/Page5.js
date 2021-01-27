import React, { Component } from "react";
import { NearMeOutlined } from "@material-ui/icons";
import { Form } from "react-bootstrap";

class Page5 extends Component {
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
        <h1>Ich habe micht nicht beworben</h1>
        <p>
          Sie möchten doch einen Imagefilm/Produktfilm/Erklärfilm [Film des Kunden bei der Eintragung], oder? 
          Wenn <strong>"NEIN!" dann:</strong>{" "} Video ist aber grundsätzlich noch Thema bei Ihnen, oder?
        </p>

        <p>
          <strong>Mögliche Einwände im Gespräch:</strong> "Ich kenne euch eigentlich gar nicht"
        </p>
        <p>
          "Ja, das kann ich gut verstehen, also wir sind "Musterfirma" eine FIlmproduktionsfirma aus "Ort" und haben uns auf die Medienberatung
          spezialisiert. Ich lasse Ihnen nach dem Gespräch gerne noch einmal unsere Website zukommen und im Fachgespräch lernen Sie uns dann
          richtig kennen."
        </p>
        <Form.Label>
            {" "}
        Video ist aber grundsätzlich noch Thema bei Ihnen, oder?
        </Form.Label>
        <Form.Control as="select">
            <option value="">Auswählen</option>
            <option value="">Ja</option>
            <option value="">Ich wollte mich erstmal nach dem Preis erkundigen</option>
            <option value="">Nein</option>
        </Form.Control>
        
        <button type="button" className="btn btn-warning" onClick={this.back}>
          « Back
        </button>
        <button type="button" className="btn btn-success" onClick={this.continue}>
          Next »
        </button>
      </div>
    );
  }
}

export default Page5;
