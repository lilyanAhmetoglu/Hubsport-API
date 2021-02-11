import React, { Component,DropdownButton,
  Dropdown,
  ButtonGroup, } from "react";

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
      company,
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
        <br/>
        {newold === "new" && (
          <div>
            <p>Full Name : {name}</p>
            <p>Companny Name : {companyName}</p>
            <p>Postion : {domain}</p>
            <p>Email Address : {email}</p>
            <p>Phone Number : {phone}</p>
          </div>
        )}
        <hr />
        {newold === "new" && (
          <div>
            <p>Company Name : {company}</p>
            <p>Contact Person : {contactperson}</p>
          </div>
        )}
        <hr />
        <br />
        <h6>Einleitung</h6>
        Sie haben sich bei uns gemeldet, um herauszufinden, ob Ihnen unsere
        Dienstleistungen im Bereich Video weiterhelfen können, ist das richtig?
        <br />
        <b>{question1}</b>
        <br />
        <h6>Ich habe mich icht beworben</h6>
        "Ja, das kann ich gut verstehen, also wir sind "Musterfirma" eine
        Filmproduktionsfirma aus "Ort" und haben uns auf die Medienberatung
        spezialisiert. Ich lasse Ihnen nach dem Gespräch gerne noch einmal
        unsere Website zukommen und im Fachgespräch lernen Sie uns dann richtig
        kennen."
        <br />
        <b>{question2}</b>
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
        "Wir haben in der Vergangenheit festgestellt, dass eine Investition
        zwischen 3.900 EUR - 8.500 notwendig ist, um den von Ihnen beschriebenen
        Film zu realisieren."
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
        "Zusätzlich bieten wir unseren Kunden noch eine Kompaktlösung an, die
        bei einer Investitionssumme von 2.900 EUR liegt, ist das für Sie
        möglich?"
        <br />
        <b>{question7}</b>
        <hr />
        <hr />
        <div>Task Name</div>
        <b>{taskName}</b>
        <div>Task Date</div>
        <b>{taskDate}</b>
        <div>Task description</div>
        <b>{taskDesc}</b>
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
