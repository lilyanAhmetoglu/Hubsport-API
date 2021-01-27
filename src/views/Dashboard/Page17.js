import React, { Component } from "react";
import { NearMeOutlined } from "@material-ui/icons";
import { Form } from "react-bootstrap";

class Page17 extends Component {
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
                    Terminvereinbarung
                </h1>
                <p>Haben Sie einen präferierten Wochentag, an dem es Ihnen optimal passen würde? 
                    Haben Sie auch eine präferierte Uhrzeit?
                </p>

                <p>(Wenn Kunde nein sagt, A-B Frage stellen: Zwei Optionen aufzeigen)
                    Kontrollieren, dass der Termin im Kalender steht
                </p>

                <p>Sie hatten Glück, ich konnte Ihnen noch einen freien Termin bei unserem Geschäftsführer "Mustermann" sichern.
                    Er ist absoluter Experte und hat unsere Firma von Beginn an aufgebaut.
                </p>

                <p><strong>Möglichkeiten der Absage durchgeben:</strong>
                  Gibt es einen Grund, der Ihnen spontan einfällt, warum Sie den Termin nicht wahrnehmen könnten? Wenn ja welcher?
                </p>

                <p>Vorbereitende Fragen stellen, um zu gewährleisten, dass die Person auch auftauchen wird.</p>

                <p>Aufgabe erstellen</p>
                <div class="Aufgabe erstellen">
                <p>  </p>
                    </div>
                    <div class="Terminvereinbarung">
                <p> </p>
                    </div>
                    <button type="button">go to Page 19</button>
                
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

export default Page17;