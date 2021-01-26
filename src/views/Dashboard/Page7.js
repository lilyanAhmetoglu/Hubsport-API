import React, { Component } from "react";

class Page7 extends Component {
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
                    Unwissenheitsframe
                </h1>
                <p1>
                  "Haben Sie ein paar Minuten, damit wir kurz über Ihren Film sprechen können?"
                </p1>
                <p2> "Ja" vom Interessenten abholen</p2>
                <p3> "Erzählen Sie mir doch bitte kurz in ein zwei Sätzen, was Sie vorhaben und welches Ziel Sie mit Ihrem 
                    Film erreichen wollen?"
                </p3>
                <table>
                    <td>
                        <p2>
                            1.1 Notizen hier einfügen go to page 8
                            
                            
                        </p2>
                    </td>

                 </table>
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
    export default Page7;