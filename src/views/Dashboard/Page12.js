import React, { Component } from "react";

class Page12 extends Component {
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
                    Sobald eine Summe genannt wurde:
                </h1>
                <Form.Label>
            {" "}
                "Und diesen Betrag sind Sie auch wirklich bereit für Ihren Film zu investierren?"
                    </Form.Label>
                  <Form.Control>
                <option value="">Auswählen</option>
                <option value="">Ja<button type="button">go to Page 16</button></option>
                <option value=""ben>Nein, eigentlich ungern<button type="button">go to Page 14</button></option>
                
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

export default Page12;