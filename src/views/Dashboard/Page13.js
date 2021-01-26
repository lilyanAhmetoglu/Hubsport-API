import React, { Component } from "react";
import { NearMeOutlined } from "@material-ui/icons";
import { Form } from "react-bootstrap";

class Page13 extends Component {
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
                   Das ist aber teuer... / oder andere Einwände
                </h1>
                <Form.Label>
            {" "}
        Diese erste Einschätzung ist erstmal ein geschätzter Preisrahmen. In welchem Bereich des eben genannten
        Rahmens, sehen Sie sich denn?
        </Form.Label>
        <Form.Control as="select">
            <option value="">Auswählen</option>
            <option value="">Bei Nennung der Summe</option>
            <option value="">Nein, eigentlich ungern</option>
            
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

export default Page13;