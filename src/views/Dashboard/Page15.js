import React, { Component } from "react";

class Page15 extends Component {
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
                    Bei Nicht-Eignung Absage und Frage nach Empfehlung
                </h1>
                <p1>"Tut mir leid, aber aktuell können wir Ihnen da leider nicht helfen. Darf ich Ihnen noch eine kurze Frage stellen:</p1>

                   <p2>Wen kennen Sie denn noch, für den ein Film/Video interessant sein könnte?
                     Wenn Sie wen kennen würde, wer wäre das?"
                </p2>
                <p3>Bitte Namen des potenziellen Interessenten angeben</p3>
                <div class="Notizen">
                <p><strong>Notizen</strong> </p>
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

export default Page15;