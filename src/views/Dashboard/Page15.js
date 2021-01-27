import React, { Component } from "react";
import { NearMeOutlined } from "@material-ui/icons";
import { Form } from "react-bootstrap";

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
                <p>"Tut mir leid, aber aktuell können wir Ihnen da leider nicht helfen. Darf ich Ihnen noch eine kurze Frage stellen:</p>

                   <p>Wen kennen Sie denn noch, für den ein Film/Video interessant sein könnte?
                     Wenn Sie wen kennen würde, wer wäre das?"
                </p>
                <p>Bitte Namen des potenziellen Interessenten angeben</p>
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