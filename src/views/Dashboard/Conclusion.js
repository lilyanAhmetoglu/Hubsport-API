import React, { Component } from "react";
import {
  Container,
  DropdownButton,
  Dropdown,
  ButtonGroup,
} from "react-bootstrap";
export default class Conclusion extends Component {
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
    const {
      name,
      domain,
      contactperson,
      companyName,
      phone,
      kind,
      email,
      newold,
      note1,
      note2,
      note3,
      question1,
      question2,
      question3,
      question4,
      question5,
      question6,
      question7,
      taskName,
      taskDate,
      taskDesc,
    } = this.props;

    return (
      <div>
        <h3>Zusammenfassung</h3>
        <p> Wen möchtest du anrufen?</p>
        <b>{newold}</b>
        <hr />
        <br />
        <p>Um was für eine Art Anruf handelt es sich?</p>
        <b>{kind}</b>
        <hr />
        <br />
        {newold === "new" && (
          <div>
            <p>Full Name : {name}</p>
            <p>Companny Name : {companyName}</p>
            <p>Postion : {domain}</p>
            <p>Email Address : {email}</p>
            <p>Phone Number : {phone}</p>
            <hr />
          </div>
        )}
        <br />
        <h6>Einleitung</h6>
        <p>
          {" "}
          Sie haben sich bei uns gemeldet, um herauszufinden, ob Ihnen unsere
          Dienstleistungen im Bereich Video weiterhelfen können, ist das
          richtig?
        </p>
        <br />
        <b>{question1}</b>
        <br />
        <hr />
        <h6>Ich habe mich icht beworben</h6>
        <p>
          {" "}
          "Ja, das kann ich gut verstehen, also wir sind "Musterfirma" eine
          Filmproduktionsfirma aus "Ort" und haben uns auf die Medienberatung
          spezialisiert. Ich lasse Ihnen nach dem Gespräch gerne noch einmal
          unsere Website zukommen und im Fachgespräch lernen Sie uns dann
          richtig kennen."
        </p>
        <br />
        <b>{question2}</b>
        <br />
        <hr />
        <p>
          „Erzählen Sie mir doch bitte kurz in ein zwei Sätzen, was Sie vorhaben
          und welches Ziel Sie mit Ihrem Film erreichen wollen?“
        </p>
        <br />
        <b>{note1}</b>
        <br />
        <hr />
        <p>„Welches der genannten Punkte ist für Sie am relevantesten?“</p>
        <br />
        <b>{note2}</b>
        <br />
        <hr />
        <h6>Fragen stellen</h6>
        <br />
        <b>{question3}</b>
        <br />
        <hr />
        <h6>
          Wenn nach diesen Behandlungen keine Aussage vom Kunden kommt oder das
          Budget zu niedrig ist:
        </h6>
        <p>
          "Wir haben in der Vergangenheit festgestellt, dass eine Investition
          zwischen 3.900 EUR - 8.500 notwendig ist, um den von Ihnen
          beschriebenen Film zu realisieren."
        </p>
        <br />
        <b>{question4}</b>
        <br />
        <hr />
        <h6>Sobald eine Summe genannt wurde:</h6>
        "Und diesen Betrag sind Sie auch wirklich bereit für Ihren Film zu
        investieren?"
        <br />
        <b>{question5}</b>
        <br />
        <hr />
        <h6>Das ist aber teuer.../ oder andere Einwände</h6>
        "Diese erste Einschätzung ist erstmal ein geschätzter Preisrahmen. In
        welchem Bereich des eben genannten Rahmens, sehen Sie sich denn?"
        <br />
        <b>{question6}</b>
        <br />
        <hr />
        <h6>Wenn dies nicht möglich ist, dann:</h6>
        <p>
          "Zusätzlich bieten wir unseren Kunden noch eine Kompaktlösung an, die
          bei einer Investitionssumme von 2.900 EUR liegt, ist das für Sie
          möglich?"
        </p>
        <br />
        <b>{question7}</b>
        <br />
        <hr />
        <p>Bitte Namen des potenziellen Interessenten angeben</p>
        <br />
        <b>{note3}</b>
        <br />
        <hr />
        <p>Task Name</p>
        <b>{taskName}</b>
        <p>Task Date</p>
        <b>{taskDate}</b>
        <p>Task description</p>
        <b>{taskDesc}</b>
        <hr />
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
          <Dropdown.Item onClick={() => this.page(5)}>Schritt 5</Dropdown.Item>
          <Dropdown.Item onClick={() => this.page(6)}>Schritt 6</Dropdown.Item>
          <Dropdown.Item onClick={() => this.page(7)}>Schritt 7</Dropdown.Item>
          <Dropdown.Item onClick={() => this.page(8)}>Schritt 8</Dropdown.Item>
          <Dropdown.Item onClick={() => this.page(9)}>Schritt 9</Dropdown.Item>
          <Dropdown.Item onClick={() => this.page(10)}>
            Schritt 10
          </Dropdown.Item>{" "}
          <Dropdown.Item onClick={() => this.page(11)}>
            Schritt 11
          </Dropdown.Item>
          <Dropdown.Item onClick={() => this.page(12)}>
            Schritt 12
          </Dropdown.Item>
          <Dropdown.Item onClick={() => this.page(13)}>
            Schritt 13
          </Dropdown.Item>
          <Dropdown.Item onClick={() => this.page(14)}>
            Schritt 14
          </Dropdown.Item>
          <Dropdown.Item onClick={() => this.page(15)}>
            Schritt 15
          </Dropdown.Item>
          <Dropdown.Item onClick={() => this.page(16)}>
            Schritt 16
          </Dropdown.Item>
          <Dropdown.Item onClick={() => this.page(17)}>
            Schritt 17
          </Dropdown.Item>
          <Dropdown.Item onClick={() => this.page(18)}>
            Schritt 18
          </Dropdown.Item>
          <Dropdown.Item onClick={() => this.page(19)}>
            Schritt 19
          </Dropdown.Item>
        </DropdownButton>
      </div>
    );
  }
}
