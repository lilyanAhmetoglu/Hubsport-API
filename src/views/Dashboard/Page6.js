import React, { Component } from "react";

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
                <p1>
                  "Herr/Frau XXX, dazu kommen wir auch noch in diesem Gespräch. 
                  Wir benötigen lediglich vorab noch ein paar Informationen, um den genauen Rahmen festzulegen".
                </p1>
                <Form.Label>
            {" "}
             </Form.Label>
        <Form.Control>
            <option value="">Next<button type="button">go to Page 7</button></option>
            
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