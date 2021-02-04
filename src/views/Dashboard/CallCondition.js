import React, { Component } from "react";
import { Form, Container, Col, Row } from "react-bootstrap";
export default class CallCondition extends Component {
  constructor(props) {
    super(props);
    this.state = { newold: "new" };
  }
  page = (number) => {
    this.props.goToStep(number);
  };
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  handleChanges = (event) => {
    let { name, value } = event.target;
    this.setState({
      [name]: value,
    });
    console.log(value);
  };
  onClickHandler = (event) => {
    const value = event.target.innerHTML;
    console.log(value);
  };

  render() {
    const {

      handleChange,
      kind,
      newold,

    } = this.props;
    return (
      <Container>
        <h3>Anrufbedingungen</h3>

        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>1.Wen möchtest du anrufen?</Form.Label>
          <Form.Control
            as="select"
            name="newold"
            value={newold}
            onChange={handleChange("newold")}
          >
            <option value="">Choose</option>
            <option value="new">Neuer Kontak</option>
            <option value="old">Bestehendes Unternehmen</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Um was für eine Art Anruf handelt es sich?</Form.Label>
          <Form.Control
            as="select"
            name="kind"
            value={kind}
            onChange={handleChange("kind")}
          >
            <option value="">Choose</option>
            <option value="erstkontakt ">Erstkontakt </option>
            <option value="follow-up  ">Follow-up </option>
            <option value="kundenanruf ">Kundenanruf </option>
          </Form.Control>
        </Form.Group>


        {this.props.newold === "new" && (
          <button
            type="button"
            className="btn btn-success"
            onClick={() => this.page(3)}
          >
            Next »
          </button>
        )}
        {this.props.newold === "old" && (
          <button
            type="button"
            className="btn btn-success"
            onClick={this.continue}
          >
            Next »
          </button>
        )}
      </Container>
    );
  }
}
