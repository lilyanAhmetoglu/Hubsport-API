import React, { Component } from "react";

 class Page8 extends Component {
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
                    Beratungsgespräch
                </h1>
                <p1>
                    <strong>Wenn Website noch nicht bekannt:</strong> "Haben Sie eine Website, die wir uns vorab schon einmal anssehen können?"
                </p1>
                <p2><strong>Wenn Kunde noch kein Ziel vor Augen hat:</strong> "Wir haben in der Vergangenheit die Erfahrung gemacht",</p2>
                <ol>
                    <li>dass unsere Kunden eine höhere SIchtbarkeit anstreben!"</li>
                    <li>dass unsere Kunden sich vom Markt abheben wollen"</li>
                    <li>dass unsere Kunden attraktiver für Bewerber seien wollen"</li>
                    <li>dass unsere Kunden eine bessere Wahrnehmung gegenüber Ihren Kunden anstreben"</li>
                </ol>
                <p2>"Welches der genannten Punkte ist für Sie am relevantesten?"</p2>
                
                <table>
                    <td>
                        <p3>
                            1.1 Ziel des Kunden einfügen
                            </p3>
                    </td>
                        
                            <p4><strong>Vorgesprächs-Frame</strong>
                            "In diesem Gespräch geht es darum heraus zu finden welches Produkt genau zu Ihren Ansprüchen passt,
                            damit wir auch die optimale Lösung für Sie auswählen können"
                            </p4>
                            <p5><strong>Experten-Frame (optional, wenn Kunde noch nicht ganz überzeugt ist)</strong>
                            "Anhand der Informationen, die Sie mir in diesem Gespräch mitgeben, kann ich dann sehr genau
                            einschätzen, wie wir Ihnen weiterhelfen können und welches das passende produkt für Sie ist."
                            
                            
                            "Deshalb stelle ich Ihnen nachfolgend ein paar Fragen, in Ordnung?"


                            "Ja" abholen
                            </p5>
                        
                        
                            <p6>
                                1.1. Next
                                <button type="button">go to Page 9</button>
                            </p6>
                        



                    
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
export default Page8;

    