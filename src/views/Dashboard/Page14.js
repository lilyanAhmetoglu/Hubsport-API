import React, { Component } from "react";

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
        <Form.Control>
            <option value="">Auswählen</option>
            <option value="">Ja<button type="button">go to Page 12</button></option>
            <option value="">Nein<button type="button">go to Page 15</button></option>
            
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