import React, { Component } from "react";

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
                <p1>Haben Sie einen präferierten Wochentag, an dem es Ihnen optimal passen würde? 
                    Haben Sie auch eine präferierte Uhrzeit?
                </p1>

                <p2>(Wenn Kunde nein sagt, A-B Frage stellen: Zwei Optionen aufzeigen)
                    Kontrollieren, dass der Termin im Kalender steht
                </p2>

                <p3>Sie hatten Glück, ich konnte Ihnen noch einen freien Termin bei unserem Geschäftsführer "Mustermann" sichern.
                    Er ist absoluter Experte und hat unsere Firma von Beginn an aufgebaut.
                </p3>

                <p4><strong>Möglichkeiten der Absage durchgeben:</strong>
                 Gibt es einen Grund, der Ihnen spontan einfällt, warum Sie den Termin nicht wahrnehmen könnten? Wenn ja welcher?
                </p4>

                <p5>Vorbereitende Fragen stellen, um zu gewährleisten, dass die Person auch auftauchen wird.</p5>

                <p6>Aufgabe erstellen</p6>
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