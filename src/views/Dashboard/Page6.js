import React, { Component } from "react";
import { NearMeOutlined } from "@material-ui/icons";
import { Form } from "react-bootstrap";

 class Page6 extends Component {
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
            
            
            <div>
                <h1>
                    Ich wollte mich eigentlich nur erstmal nach dem Preis erkundigen.
                </h1>
                <p>
                  "Herr/Frau XXX, dazu kommen wir auch noch in diesem Gespräch. 
                  Wir benötigen lediglich vorab noch ein paar Informationen, um den genauen Rahmen festzulegen".
                </p>
                <Form.Label>
            {" "}
             </Form.Label>
        <Form.Control as="select">
            <option value="">Next</option>
            
        </Form.Control>
        
                <button type="button" className="btn btn-warning" onClick={this.back}>
          « Back
        </button>
        <button type="button" className="btn btn-success" onClick={this.continue}>
          Next »
        </button>
             </div>
        )
     }
    }
    export default Page6;