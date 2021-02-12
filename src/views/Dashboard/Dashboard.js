import React, { Component } from "react";
import Server from "../../services/server";
import CallCondition from "./CallCondition";
import CloseProcess from "./CloseProcess";
import Intorduction from "./Intorduction";
import Conclusion from "./Conclusion";
import Page4 from "./Page4";
import Page5 from "./Page5";
import Page6 from "./Page6";
import Page7 from "./Page7";
import Page8 from "./Page8";
import Page9 from "./Page9";
import Page10 from "./Page10";
import Page11 from "./Page11";
import Page12 from "./Page12";
import Page13 from "./Page13";
import Page14 from "./Page14";
import Page15 from "./Page15";
import Page16 from "./Page16";
import Page17 from "./Page17";
import Page18 from "./Page18";
import Page19 from "./Page19";
import { Form } from "react-bootstrap";
import Stopwatch from "../Timer/Components/Stopwatch";
import { Editor } from "@tinymce/tinymce-react";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.handleEditorChange = this.handleEditorChange.bind(this);
  }
  state = {
    step: 1,
    note: "",
    companyId: "",
    // step 1
    companyName: "",
    companyDiscription: "",
    name: "",
    domain: "",
    email: "",
    newold: "",
    kind: "",
    email: "",
    phone: "",
    company: "",
    contactperson: "",
    contacts: [],
    companies: [],
    // step 2
    introduction: "",
    meeting_with_expert: "",
    later_email: "",
    task_note: "",
    task_deadline: "",
    //step 4
    question1: "",
    //step 5
    question2: "",
    //step7
    note1:"",
    //step8
    note2:"",
    //step 9
    question3: "",
    //step 11
    question4: "",
    //step 12
    question5: "",
    //step 13
    question6: "",
    //step 14
    question7: "",
    //step15
    note3:"",
    //step17 + step 18
    taskName: "",
    taskDate: "",
    taskDesc: "",
  };
  goToStep = (number) => {
    const { step } = this.state;
    this.setState({
      step: number,
    });
  };
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };
  handleEditorChange(note, editor) {
    this.setState({ note });
  }
  handleChanges(e, name) {
    this.setState({ [name]: e.target.value });
  }
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
    if (input === "company") {
      this.setState({ companyId: e.target.value });
      console.log("this is company");
      Server.getCompanyContacts(e.target.value).then((res) => {
        let respoo = JSON.parse(res.data.body);
        const contacts = respoo.contacts;
        this.setState({ contacts });
      });
    }
  };
  handleSubmit = (event) => {
    event.preventDefault();
    var date = new Date(this.state.taskDate);
    if (this.state.newold === "new") {
      const contact = {
        properties: [
          { property: "email", value: this.state.email },
          { property: "firstname", value: this.state.name },
          { property: "phone", value: this.state.phone },
          { property: "website", value: this.state.domain },
          {
            property: "company",
            value: this.state.companyName,
          },
        ],
      };
      Server.createContact(contact)
        .then((res) => res) // convert response
        .then((data) => {
          let contactId = data.data.body.vid;
          const note = {
            engagement: {
              active: true,
              ownerId: 1,
              type: "NOTE",
              timestamp: Date.now(),
            },
            associations: {
              contactIds: [contactId],
              companyIds: [],
              dealIds: [],
              ownerIds: [],
              ticketIds: [],
            },
            metadata: {
              body: this.state.note,
            },
          };
          const task = {
            engagement: {
              active: true,
              ownerId: 1,
              type: "TASK",
              timestamp: date.getTime(),
            },
            associations: {
              contactIds: [contactId],
              companyIds: [],
              dealIds: [],
              ownerIds: [],
              ticketIds: [],
            },
            metadata: {
              body: this.state.taskDesc,
              subject: this.state.taskName,
              status: "NOT_STARTED",
              forObjectType: "CONTACT",
            },
          };
          Server.createNote(note)
            .then((res) => res) // convert response
            .then((data) => {
              let status = data.data.statusCode;
              status === 200
                ? Server.createTask(task)
                    .then((res) => res)
                    .then((data) => {
                      let status = data.data.statusCode;
                      console.log(status);
                    })
                    .catch((err) => {
                      console.log(err);
                      alert(err);
                    })
                : console.log("please fill out the company");
            })
            .catch((err) => {
              console.log(err);
              alert(err);
            });
        });
    } else if (this.state.newold === "old") {
      const note = {
        engagement: {
          active: true,
          ownerId: 1,
          type: "NOTE",
          timestamp: Date.now(),
        },
        associations: {
          contactIds: [],
          companyIds: [this.state.companyId],
          dealIds: [],
          ownerIds: [],
          ticketIds: [],
        },
        metadata: {
          body: this.state.note,
        },
      };
      const task = {
        engagement: {
          active: true,
          ownerId: 1,
          type: "TASK",
          timestamp: date.getTime(),
        },
        associations: {
          contactIds: [],
          companyIds: [this.state.companyId],
          dealIds: [],
          ownerIds: [],
          ticketIds: [],
        },
        metadata: {
          body: this.state.taskDesc,
          subject: this.state.taskName,
          status: "NOT_STARTED",
          forObjectType: "CONTACT",
        },
      };
      Server.createNote(note)
        .then((res) => res) // convert response
        .then((data) => {
          let status = data.data.statusCode;
          status === 200
            ? Server.createTask(task)
                .then((res) => res)
                .then((data) => {
                  let status = data.data.statusCode;
                  if (status !== 200) {
                    alert("task couldn't be created");
                  }
                })
            : alert("note couldn't be created");
        })
        .catch((err) => {
          console.log(err);
          alert(err);
        });
    } else {
      alert("please choose the call type");
    }
  };
  showStep = () => {
    const {
      step,
      companyName,
      companyDiscription,
      name,
      domain,
      newold,
      kind,
      email,
      phone,
      introduction,
      contactperson,
      company,
      contacts,
      companies,
      question1,
      question2,
      question3,
      question4,
      question5,
      question6,
      question7,
      note1,
      note2,
      note3,
      taskName,
      taskDate,
      taskDesc,
    } = this.state;

    if (step === 1)
      return (
        <CallCondition
          nextStep={this.nextStep}
          handleChange={this.handleChange}
          goToStep={this.goToStep}
          newold={newold}
          introduction={introduction}
        />
      );
    if (step === 2)
      return (
        <Intorduction
          goToStep={this.goToStep}
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          company={company}
          contactperson={contactperson}
          contacts={contacts}
          companies={companies}
        />
      );
    if (step === 3)
      return (
        <CloseProcess
          handleChange={this.handleChange}
          prevStep={this.prevStep}
          nextStep={this.nextStep}
          goToStep={this.goToStep}
          name={name}
          newold={newold}
          domain={domain}
          companyName={companyName}
          email={email}
          phone={phone}
        />
      );

    if (step === 4)
      return (
        <Page4
          question1={question1}
          handleChange={this.handleChange}
          prevStep={this.prevStep}
          nextStep={this.nextStep}
          goToStep={this.goToStep}
        />
      );

    if (step === 5)
      return (
        <Page5
          question2={question2}
          prevStep={this.prevStep}
          nextStep={this.nextStep}
          handleChange={this.handleChange}
          goToStep={this.goToStep}
        />
      );
    if (step === 6)
      return (
        <Page6
          prevStep={this.prevStep}
          nextStep={this.nextStep}
          goToStep={this.goToStep}
        />
      );
    if (step === 7)
      return (
        <Page7
          prevStep={this.prevStep}
          nextStep={this.nextStep}
          goToStep={this.goToStep}
          note1={note1}
          handleChange={this.handleChange}
        />
      );
    if (step === 8)
      return (
        <Page8
          prevStep={this.prevStep}
          nextStep={this.nextStep}
          goToStep={this.goToStep}
          note2={note2}
          handleChange={this.handleChange}
        />
      );
    if (step === 9)
      return (
        <Page9
          prevStep={this.prevStep}
          nextStep={this.nextStep}
          question3={question3}
          handleChange={this.handleChange}
          goToStep={this.goToStep}
        />
      );
    if (step === 10)
      return (
        <Page10
          prevStep={this.prevStep}
          nextStep={this.nextStep}
          goToStep={this.goToStep}
        />
      );
    if (step === 11)
      return (
        <Page11
          prevStep={this.prevStep}
          nextStep={this.nextStep}
          question4={question4}
          handleChange={this.handleChange}
          goToStep={this.goToStep}
        />
      );
    if (step === 12)
      return (
        <Page12
          prevStep={this.prevStep}
          nextStep={this.nextStep}
          question5={question5}
          handleChange={this.handleChange}
          goToStep={this.goToStep}
        />
      );
    if (step === 13)
      return (
        <Page13
          prevStep={this.prevStep}
          nextStep={this.nextStep}
          question6={question6}
          handleChange={this.handleChange}
          goToStep={this.goToStep}
        />
      );
    if (step === 14)
      return (
        <Page14
          prevStep={this.prevStep}
          nextStep={this.nextStep}
          question7={question7}
          handleChange={this.handleChange}
          goToStep={this.goToStep}
        />
      );
    if (step === 15)
      return (
        <Page15
          prevStep={this.prevStep}
          nextStep={this.nextStep}
          handleChange={this.handleChange}
          goToStep={this.goToStep}
          note3={note3}
        />
      );
    if (step === 16)
      return (
        <Page16
          prevStep={this.prevStep}
          nextStep={this.nextStep}
          goToStep={this.goToStep}
        />
      );
    if (step === 17)
      return (
        <Page17
          prevStep={this.prevStep}
          nextStep={this.nextStep}
          handleChange={this.handleChange}
          goToStep={this.goToStep}
          taskName={this.taskName}
          taskDate={this.taskDate}
          taskDesc={this.taskDesc}
        />
      );
    if (step === 18)
      return (
        <Page18
          prevStep={this.prevStep}
          nextStep={this.nextStep}
          goToStep={this.goToStep}
          taskName={this.taskName}
          taseDate={this.taskDate}
          taskDesc={this.taskDesc}
          handleChange={this.handleChange}
        />
      );
    if (step === 19)
      return (
        <Page19
          prevStep={this.prevStep}
          nextStep={this.nextStep}
          goToStep={this.goToStep}
        />
      );
    if (step === 20)
      return (
        <Conclusion
          newold={newold}
          name={name}
          domain={domain}
          kind={kind}
          company={company}
          companyName={companyName}
          companyDiscription={companyDiscription}
          email={email}
          phone={phone}
          contactperson={contactperson}
          question1={question1}
          question2={question2}
          question3={question3}
          question4={question4}
          question5={question5}
          question6={question6}
          question7={question7}
          note1={note1}
          note2={note2}
          note3={note3}
          taskName={taskName}
          taseDate={taskDate}
          taskDesc={taskDesc}
          goToStep={this.goToStep}
          prevStep={this.prevStep}
          nextStep={this.nextStep}
        />
      );
  };
  componentDidMount() {
    Server.getCompanies()
      .then((res) => {
        let respoo = JSON.parse(res.data.body);
        console.log(respoo);
        const companies = respoo.companies;
        this.setState({ companies });
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
    Server.getContacts()
      .then((res) => {
        let respoo = JSON.parse(res.data.body);
        const contacts = respoo.contacts;
        this.setState({ contacts });
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  }
  render() {
    const { step, note } = this.state;
    return (
      <div className="container">
        <div className="row ">
          <div className="col-md-8 ">
            <div className="theform">
              <h6> Schritt {step} von 20.</h6>
              <div className="App">
                <div className="Timers">
                  <Stopwatch />
                </div>
              </div>

              {this.showStep()}
            </div>
          </div>
          <div className="col-md-4">
            <form onSubmit={this.handleSubmit}>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Notizen</Form.Label>
                <Editor
                  value={note}
                  init={{
                    height: 1000,
                    menubar: false,
                  }}
                  onEditorChange={this.handleEditorChange}
                />
              </Form.Group>
              <input type="submit" value="Submit" className="btn btn-primary" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
