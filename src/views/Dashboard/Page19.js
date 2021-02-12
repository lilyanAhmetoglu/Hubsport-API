import React, { Component } from "react";
import {
  Container,
  DropdownButton,
  Dropdown,
  ButtonGroup,
} from "react-bootstrap";

class Page19 extends Component {
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
    return (
      <Container>
        <h3>Telefonat beenden / Prozess abschließen</h3>
        <p>
          <i> "Ich bedanke mich für das freundliche Telefonat und wünsche Ihnen
          einen schönen Tag/Woche/Wochenende/Urlaub."</i>
        </p>
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
        </DropdownButton>
        <button
          type="button"
          className="btn btn-success"
          onClick={this.continue}
        >
          Next »
        </button>
      </Container>
    );
  }
}

export default Page19;
