import React, { Component } from "react";
import { NearMeOutlined } from "@material-ui/icons";
import { Form } from "react-bootstrap";

class Page16 extends Component {
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
                    Entscheidende Frage
                </h1>
                <p>"Werden Sie am Ende allein entscheiden, oder gibt esnoch jemanden, mit dem Sie sich 
                    abstimmen müssen?"</p>

                <p>(Wenn er nicht der alleinige Entscheider ist, muss der zweite Entscheider ebenfalls im Gespräch mit
                    dabei sein)
                    </p> 


                <p>"Im nächsten Gespräch wird einer unserer Strategieberater Ihnen eine mögliche Strategie vorstellen
                    und erklären wie die nächsten Schritte aussehen würden."
                </p>
                
                        <p>
                            Next
                            <button type="button">go to Page 19</button>
                            
                        </p>
                   
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

export default Page16;