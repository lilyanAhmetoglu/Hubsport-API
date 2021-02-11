import React, { Component } from "react";
import {
  Form,
  Container,
  DropdownButton,
  Dropdown,
  ButtonGroup,
} from "react-bootstrap";

class Page5 extends Component {
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
    const { question2, handleChange } = this.props;
    return (
      <Container>
        <h3>Ich habe micht nicht beworben</h3>
        <p>
          Sie möchten doch einen Imagefilm/Produktfilm/Erklärfilm [Film des
          Kunden bei der Eintragung], oder? Wenn <strong>"NEIN!" dann:</strong>{" "}
          Video ist aber grundsätzlich noch Thema bei Ihnen, oder?
        </p>

        <p>
          <strong>Mögliche Einwände im Gespräch:</strong> "Ich kenne euch
          eigentlich gar nicht"
        </p>
        <p>
          "Ja, das kann ich gut verstehen, also wir sind "Musterfirma" eine
          FIlmproduktionsfirma aus "Ort" und haben uns auf die Medienberatung
          spezialisiert. Ich lasse Ihnen nach dem Gespräch gerne noch einmal
          unsere Website zukommen und im Fachgespräch lernen Sie uns dann
          richtig kennen."
        </p>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>
            {" "}
            Video ist aber grundsätzlich noch Thema bei Ihnen, oder?
          </Form.Label>
          <Form.Control
            as="select"
            name="question2"
            value={question2}
            onChange={handleChange("question2")}
          >
            <option value="">Auswählen</option>
            <option value="Ja">Ja</option>
            <option value="Ich wollte mich erstmal nach dem Preis erkundigen">
              Ich wollte mich erstmal nach dem Preis erkundigen
            </option>
            <option value="Nein">Nein</option>
          </Form.Control>
        </Form.Group>
        <DropdownButton
          as={ButtonGroup}
          title="« Back"
          id="bg-nested-dropdown"
          variant="warning"
        >
          <Dropdown.Item onClick={() => this.page(1)}>Schritt 1</Dropdown.Item>
          <Dropdown.Item onClick={() => this.page(2)}>Schritt 2</Dropdown.Item>
          <Dropdown.Item onClick={() => this.page(3)}>Schritt 3</Dropdown.Item>
          <Dropdown.Item onClick={() => this.page(4)}>Schritt 4</Dropdown.Item>
        </DropdownButton>
        {this.props.question2 === "Ja" && (
          <button
            type="button"
            className="btn btn-success"
            onClick={() => this.page(7)}
          >
            Next »
          </button>
        )}
        {this.props.question2 ===
          "Ich wollte mich erstmal nach dem Preis erkundigen" && (
          <button
            type="button"
            className="btn btn-success"
            onClick={this.continue}
          >
            Next »
          </button>
        )}
        {this.props.question2 === "Nein" && (
          <button
            type="button"
            className="btn btn-success"
            onClick={() => this.page(18)}
          >
            Next »
          </button>
        )}
      </Container>
    );
  }
}

export default Page5;
