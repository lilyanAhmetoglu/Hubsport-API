import React, { Component } from "react";

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

                <p1>
                    "Wir haben in der Vergangenheit festgestellt, dass eine Investition zwischen 3.900 EUR-8.500 EUR
                    notwendig ist, um den von Ihnen beschriebenen Film zu realisieren."
                    </p1>
                    <Form.Label>
            {" "}
             "Ist das für Sie möglich?"
                    </Form.Label>
                    <Form.Control>
                <option value="">Auswählen</option>
                <option value="">Ja<button type="button">go to Page 12</button></option>
                <option value="">"Das ist aber teuer..."oder andere Einwände<button type="button">go to Page 13</button></option>
                <option value="">Nein das ist nicht möglich<button type="button">go to Page 14</button></option>
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
    