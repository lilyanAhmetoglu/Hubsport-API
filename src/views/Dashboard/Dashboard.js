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

export default class Dashboard extends Component {
  state = {
    step: 1,
    // step 1
    companyName: "",
    companyDiscription: "",
    name: "",
    surname: "",
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
    //step17 + step 18
    taskName: "",
    taskDate: "",
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

  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
    if (input === "company") {
      console.log("this is company");
      Server.getCompanyContacts(e.target.value).then((res) => {
        let respoo = JSON.parse(res.data.body);
        const contacts = respoo.contacts;
        this.setState({ contacts });
      });
    }
  };

  showStep = () => {
    const {
      step,
      companyName,
      companyDiscription,
      name,
      surname,
      newold,
      kind,
      email,
      phone,
      introduction,
      contactperson,
      company,
      meeting_with_expert,
      later_email,
      task_note,
      task_deadline,
      contacts,
      companies,
      question1,
      question2,
      question3,
      question4,
      question5,
      question6,
      question7,
      taskName,
      taskDate,
    } = this.state;

    if (step === 1)
      return (
        <CallCondition
          nextStep={this.nextStep}
          handleChange={this.handleChange}
          newold={newold}
          name={name}
          surname={surname}
          company={company}
          kind={kind}
          email={email}
          phone={phone}
          contactperson={contactperson}
          contacts={contacts}
          companies={companies}
          companyName={companyName}
          companyDiscription={companyDiscription}
        />
      );
    if (step === 2)
      return (
        <Intorduction
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          introduction={introduction}
          contactperson={contactperson}
          meeting_with_expert={meeting_with_expert}
          later_email={later_email}
          task_note={task_note}
          task_deadline={task_deadline}
        />
      );
    if (step === 3)
      return (
        <CloseProcess
          handleChange={this.handleChange}
          prevStep={this.prevStep}
          nextStep={this.nextStep}
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
      return <Page6 prevStep={this.prevStep} nextStep={this.nextStep} />;
    if (step === 7)
      return <Page7 prevStep={this.prevStep} nextStep={this.nextStep} />;
    if (step === 8)
      return <Page8 prevStep={this.prevStep} nextStep={this.nextStep} />;
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
      return <Page10 prevStep={this.prevStep} nextStep={this.nextStep} />;
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
        />
      );
    if (step === 16)
      return <Page16 prevStep={this.prevStep} nextStep={this.nextStep} />;
    if (step === 17)
      return (
        <Page17
          prevStep={this.prevStep}
          nextStep={this.nextStep}
          handleChange={this.handleChange}
          goToStep={this.goToStep}
          taskName={this.taskName}
          taseDate={this.taskDate}
        />
      );
    if (step === 18)
      return (
        <Page18
          prevStep={this.prevStep}
          nextStep={this.nextStep}
          taskName={this.taskName}
          taseDate={this.taskDate}
          handleChange={this.handleChange}
        />
      );
    if (step === 19)
      return <Page19 prevStep={this.prevStep} nextStep={this.nextStep} />;
    if (step === 20)
      return (
        <Conclusion
          newold={newold}
          name={name}
          surname={surname}
          kind={kind}
          company={company}
          companyName={companyName}
          companyDiscription={companyDiscription}
          email={email}
          phone={phone}
          contactperson={contactperson}
          introduction={introduction}
          contactperson={contactperson}
          meeting_with_expert={meeting_with_expert}
          later_email={later_email}
          task_note={task_note}
          task_deadline={task_deadline}
          prevStep={this.prevStep}
          nextStep={this.nextStep}
        />
      );
  };
  componentDidMount() {
    // const query = new URLSearchParams(this.props.location.search);
    //onst code = query.get("code");
    //console.log("ee");
    Server.getCompanies().then((res) => {
      let respoo = JSON.parse(res.data.body);
      console.log(respoo);
      const companies = respoo.companies;
      this.setState({ companies });
    });
    Server.getContacts().then((res) => {
      let respoo = JSON.parse(res.data.body);
      const contacts = respoo.contacts;
      this.setState({ contacts });
    });
  }
  render() {
    const { step } = this.state;

    return (
      <div className="container">
        <div className="row ">
          <div className="col-md-8 ">
            <div className="theform">
              <h6> Step {step} of 20.</h6>

              <div className="App">
                <div className="App-title">Timers Demo</div>
                <div className="Timers">
                  <Stopwatch />
                </div>
              </div>

              {this.showStep()}
            </div>
          </div>
          <div className="col-md-4">
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Notizen</Form.Label>
              <Form.Control as="textarea" rows={25} />
            </Form.Group>
          </div>
        </div>
      </div>
    );
  }
}
