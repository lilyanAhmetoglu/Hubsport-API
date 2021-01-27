import React, { Component } from "react";
import { NearMeOutlined } from "@material-ui/icons";
import { Form } from "react-bootstrap";

class Page14 extends Component {
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
                    Wenn dies nicht möglich ist, dann:
                </h1>
                <Form.Label>
            {" "}
       "Zusätzlich bieten wir unseren Kunden noch eine Kompaktlösung an, die bei einer Investitionssumme
       von 2.900 EUR liegt, Ist das für Sie möglich?""
        </Form.Label>
        <Form.Control as="select">
            <option value="">Auswählen</option>
            <option value="">Ja</option>
            <option value="">Nein</option>
            
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

export default Page14;