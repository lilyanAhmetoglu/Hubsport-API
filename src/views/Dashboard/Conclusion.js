import React, { Component } from "react";
import Server from "../../services/server";
export default class Conclusion extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const company = {
      properties: [
        { name: "name", value: this.props.companyName },
        { name: "description", value: this.props.companyDiscription },
      ],
    };
    const contact = {
      properties: [
        { property: "email", value: this.props.email },
        { property: "firstname", value: this.props.name },
        { property: "lastname", value: this.props.surname },
        { property: "phone", value: this.props.phone }
      ],
    };
    Server.createCompany(company).then((res) => {
      console.log("res is" + res);
      Server.createContact(contact).then((res)=> {
        console.log("contact res is" + res);
      })
    });
  
  };
  render() {
    const {
      name,
      surname,
      contactperson,
      companyName,
      companyDiscription,
      phone,
      kind,
      email,
      introduction,
      newold,
      company,
      meeting_with_expert,
      later_email,
      question1,
      question2,
      question3,
      question4,
      question5,
      question6,
      question7,
      taskName,
      taskDate,
      task_note,
      task_deadline,
    } = this.props;
    
    return (
      <div>
        <h4>Here is the information you entered:</h4>
        Who will you call?:
        <br />
        <b>{newold}</b>
        <hr />
        <h5>Call Condition</h5>
        {newold === "new" && (
          <div>
            <p>What kind of call will you do?</p>

            <b>{kind}</b>
            
            <hr />
            <p>Please enter company name:</p>

            <b>{companyName}</b>
            <hr />
            <p>Please enter company discription:</p>

            <b>{companyDiscription}</b>
            <hr />
            <p>Please enter customer name:</p>

            <b>{name}</b>
            <hr />
            <p>Please enter customer family name:</p>

            <b>{surname}</b>
            <hr />
            <p>Please enter customer email address:</p>

            <b>{email}</b>
            <hr />
            <p>Please enter customer phone number:</p>

            <b>{phone}</b>
            <hr />
          </div>
        )}
        {newold === "old" && (
          <div>
            <p>Please choose the company?</p>

            <b>{company}</b>
            <hr />
            <p>What kind of call will you do?</p>

            <b>{kind}</b>
            <hr />
            <p>
              If you already know who you will call, please chose your contact
              person (if you don't have a specific contact person go next):
            </p>

            <b>{contactperson}</b>
            <hr />
          </div>
        )}
        <br />
        <h5>Intoduction</h5>
        We would like to become your additional IT partner, but only if it
        really makes sense for you. I only have a quick question about this, is
        that okay with you?
        <br />
        <b>{introduction}</b>
        <hr />
        {introduction === "yes" && (
          <div>
            <p>
              If you would like to learn more about this product and see if it
              is suitable for your company, we can fix a meeting with one of our
              experts / CEO / Managers.
            </p>
            <b>{meeting_with_expert}</b>
            <hr />
            {meeting_with_expert === "appointment" && (
              <div>
                <p>Write a task note (you can find in: Hubspot Task)</p>

                <b>{task_note}</b>
                <hr />
                <p>Write a task note (you can find in: Hubspot Task)</p>

                <b>{task_deadline}</b>
                <hr />
              </div>
            )}
            {meeting_with_expert === "more_info" && (
              <div>
                <p>Could you give me your e-mail please?</p>

                <b>{later_email}</b>
                <hr />
              </div>
            )}
          </div>
        )}
        {introduction === "later" && (
          <div>
            <p>Could you give me your e-mail please?</p>
            <b>{later_email}</b>
          </div>
        )}
        {introduction === "appointment" && (
          <div>
            <p>Write a task note (you can find in: Hubspot Task)</p>

            <b>{task_note}</b>
            <hr />
            <p>Write a task note (you can find in: Hubspot Task)</p>

            <b>{task_deadline}</b>
            <hr />
          </div>
        )}
        <br />
        <h6>Einleitung</h6>
        Sie haben sich bei uns gemeldet, um herauszufinden, ob Ihnen
        unsere Dienstleistungen im Bereich Video weiterhelfen
        können, ist das richtig?
        <br />
        <b>{question1}</b>
        <div>
        <p>Nein, ich habe mich nicht beworben</p>
        <p>Ja</p>
        <p>Ich habe keine Zeit</p>
        </div>   
        <br />
        <h7>Ich habe mich icht beworben</h7>
        "Ja, das kann ich gut verstehen, also wir sind "Musterfirma" eine Filmproduktionsfirma aus "Ort" und
        haben uns auf die Medienberatung spezialisiert. Ich lasse Ihnen nach dem Gespräch gerne noch
        einmal unsere Website zukommen und im Fachgespräch lernen Sie uns dann richtig kennen."
        <br />
        <b>{question2}</b>
        <div>
        <p>Ja</p>
        <p>Ich wollte mich erstmal nach dem Preis erkundigen</p>
        <p>Nein</p>
        </div>   
        <br />
        <h7>Fragen stellen</h7>
        <br />
        <b>{question3}</b>
        <div>
        <p>Warum willst du das wissen?</p>
        <p>Unser Budget beträgt xx €</p>
        </div>   
        <br />
        <h7>Wenn nach diesen Behandlungen keine Aussage vom Kunden kommt oder das Budget zu niedrig ist:</h7>
        "Wir haben in der Vergangenheit festgestellt, dass eine Investition zwischen 3.900 EUR - 8.500 notwendig ist,
        um den von Ihnen beschriebenen Film zu realisieren."
        <br />
        <b>{question4}</b>
        <div>
        <p>Ja</p>
        <p>"Das ist aber teuer..." oder andere Einwände</p>
        <p>Nein, das ist nicht möglich</p>
        </div>
        <br />
        <h7>Sobald eine Summe genannt wurde:</h7>
        "Und diesen Betrag sind Sie auch wirklich bereit für Ihren Film zu investieren?"
        <br />
        <b>{question5}</b>
        <div>
        <p>Ja</p>
        <p>Nein, eigentlich ungern</p>
        </div>   
        <br />
        <h7>Das ist aber teuer.../ oder andere Einwände</h7>
        "Diese erste Einschätzung ist erstmal ein geschätzter Preisrahmen. In welchem Bereich
        des eben genannten Rahmens, sehen Sie sich denn?"
        <br />
        <b>{question6}</b>
        <div>
        <p>Bei Nennung der Summe</p>
        <p>Nein, eigentlich ungern</p>
        </div>     
        <br />
        <h7>Wenn dies nicht möglich ist, dann:</h7>
        "Zusätzlich bieten wir unseren Kunden noch eine Kompaktlösung an, die bei einer
        Investitionssumme von 2.900 EUR liegt, ist das für Sie möglich?"
        <br />
        <b>{question7}</b>
        <div>
        <p>Ja</p>
        <p>Nein</p>
        </div> 
        <div>Task Name</div>
         <b>{taskName}</b>
        <div>Task Date</div>
         <b>{taskDate}</b>
        <button type="button" className="btn btn-warning" onClick={this.back}>
          « Back
        </button>
        <button type="button" className="btn btn-primary" onClick={this.continue}>
          Next 
        </button>
      </div>
    );
  }
}
