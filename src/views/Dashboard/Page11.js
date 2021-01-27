import React, { Component } from "react";
import { NearMeOutlined } from "@material-ui/icons";
import { Form } from "react-bootstrap";

 class Page11 extends Component {
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
                    Wenn nach diesen Behandlungen keine Aussage vom Kunden kommt oder das Budget zu
                    niedrig ist:
                </h1>

                <p>
                    "Wir haben in der Vergangenheit festgestellt, dass eine Investition zwischen 3.900 EUR-8.500 EUR
                    notwendig ist, um den von Ihnen beschriebenen Film zu realisieren."
                    </p>
                    <Form.Label>
            {" "}
             "Ist das für Sie möglich?"
                    </Form.Label>
                    <Form.Control as="select">
                <option value="">Auswählen</option>
                <option value="">Ja</option>
                <option value="">"Das ist aber teuer..."oder andere Einwände</option>
                <option value="">Nein das ist nicht möglich</option>
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

export default Page11;
    