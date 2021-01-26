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
    if (step === 5)
      return <Page4 prevStep={this.prevStep} nextStep={this.nextStep} />;
    if (step === 6)
     return <Page5 prevStep={this.prevStep} nextStep={this.nextStep} />;
    if (step === 7) 
    return <Page6 prevStep={this.prevStep} nextStep={this.nextStep} />;
    if (step === 8) 
    return <Page7 prevStep={this.prevStep} nextStep={this.nextStep} />;
    if (step === 9) 
    return <Page8 prevStep={this.prevStep} nextStep={this.nextStep} />;
    if (step === 10) 
    return <Page9 prevStep={this.prevStep} nextStep={this.nextStep} />;
    if (step === 11)
     return <Page10 prevStep={this.prevStep} nextStep={this.nextStep} />;
    if (step === 12) 
    return <Page11 prevStep={this.prevStep} nextStep={this.nextStep} />;
    if (step === 13) 
    return <Page12 prevStep={this.prevStep} nextStep={this.nextStep} />;
    if (step === 14) 
    return <Page13 prevStep={this.prevStep} nextStep={this.nextStep} />;
    if (step === 15) 
    return <Page14 prevStep={this.prevStep} nextStep={this.nextStep} />;
    if (step === 16)
    return <Page15 prevStep={this.prevStep} nextStep={this.nextStep} />;
    if (step === 17) 
    return <Page16 prevStep={this.prevStep} nextStep={this.nextStep} />;
    if (step === 18) 
    return <Page17 prevStep={this.prevStep} nextStep={this.nextStep} />;
    if (step === 19)
     return <Page18 prevStep={this.prevStep} nextStep={this.nextStep} />;
    if (step === 20) 
    return <Page19 prevStep={this.prevStep} nextStep={this.nextStep} />;
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
          <div className="col-md-12 ">
            <div className="theform">
              <h6> Step {step} of 4.</h6>

              {this.showStep()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
