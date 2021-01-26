import React, { Component } from "react";

 class Page9 extends Component {
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
                    Fragen stellen
                </h1>
                <p1>
                    <strong>Weiche Fragen</strong>
                    </p1>  
                    <p2><strong>Frage 1:</strong> 
                    "Bis wann würden Sie denn Ihren Film gerne realisieren?"</p2>
                
                <p3><strong>Kunde: z.B. "Egal", "Weiß ich noch nicht", "In den nächsten drei Monaten":</strong></p3>
                 
                 <p4>"Wenn wir also mit der Konzeption in den nächsten 4 Wochen starten würden, wäre das für Sie 
                 möglich?"</p4>
                
                <p4><strong>Frage 2:</strong>
                "Auf welchen Kanälen soll der Film gezeigt bzw. veröffentlicht werden?" </p4>

                <p5><strong>(Immer mit dazu sagen, wenn Kunde fragt, wofür wir diese Info brauchen):</strong></p5>

                <p6>"Wir benötigen diese Information, damit wir für Sie zur Veröffentlichung Ihres Films, auch die richtige
                Musiklizenz auswählen können." 
                </p6>

                <p7><strong>Frage 3:</strong>
                "Beinhaltet Ihr Plan auch zusätzlich noch kleine Videos für die Vermarktung auf Social
                Media? Diese kleinen Teaser ermöglichen Ihnen einen noch stärkereen Fokus auf spezielle Bereiche in 
                Ihrem Unternehmen." [Ja,abholen]
                </p7>
                
                
                <p8><strong>Social Media Paket (optional, wenn Kunde noch nicht ganz überzeugt ist):</strong></p8>

                <p9>"Wir haben ein Social Media Paket ins Leben gerufen, wo Sie zusätzlich zu Ihrem Masterfilm noch drei
                zusätzliche kleine Snippets für die Vermarktung auf Social Media bekommen würden, ist das grundsätzlich 
                ein Thema für Sie?"
                </p9>

                <p10><strong>Mögl. Einwand Kunde:"Grundsätzlich ja, aber ist natürlich abhängig von den Kosten"</strong></p10>

                <p11>"Ich würde es mir erst einmal als Option vermerken und wrden es uns dann im zweiten Schritt noch
                einmal genauer anschauen, ja?" [Ja, abholen]
                 </p11>

                <p12><strong>Harte Fragen:</strong></p12>

                <Form.Label>
                {" "}
                "Wie viel Budget haben Sie aktuell für die Realisierung Ihres Films zur Verfügung?"
                </Form.Label>
                <Form.Control>
                    <option value="">Auswählen</option>
                    <option value="">Warum willst du das wissen?<button type="button">go to Page 10</button></option>
                    <option value="">Unser Budget beträgt xx €<button type="button">go to Page 11</button></option>
                
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

export default Page9;
    