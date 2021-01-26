import React, { Component } from "react";

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
        <Form.Control>
            <option value="">Auswählen</option>
            <option value="">Bei Nennung der Summe<button type="button">go to Page 12</button></option>
            <option value="">Nein, eigentlich ungern<button type="button">go to Page 14</button></option>
            
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