import React, { Component } from "react";
import { NearMeOutlined } from "@material-ui/icons";
import { Form } from "react-bootstrap";

class Page18 extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { taskName, taskDate, handleChange ,taskDesc} = this.props;
    return (
      <div>
        <h1>Kein Interresse an einem Film</h1>
        <p>
          "Dann muss ein Missverständnis vorliegen und unser Geschäftsführer
          wird sich noch einmal persönlich bei Ihnen melden, ist das in Ordnung
          für Sie?"
        </p>
        <Form.Group>
          <Form.Label>Aufgabe erstellen</Form.Label>
          <Form.Control
            type="text"
            value={taskName}
            placeholder="Task Name"
            onChange={handleChange("taskName")}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Terminvereinbarung</Form.Label>
          <Form.Control
            type="text"
            value={taskDate}
            placeholder="Task Name"
            onChange={handleChange("taskDate")}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            value={taskDesc}
            placeholder="Task Description"
            onChange={handleChange("taskDesc")}
          />
        </Form.Group>
        <button type="button" className="btn btn-warning" onClick={this.back}>
          « Back
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={this.continue}
        >
          Next »
        </button>
      </div>
    );
  }
}

export default Page18;
