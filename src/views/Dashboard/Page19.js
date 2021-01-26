import React, { Component } from "react";
import { NearMeOutlined } from "@material-ui/icons";
import { Form } from "react-bootstrap";

class Page19 extends Component {
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
                  Telefonat beenden / Prozess abschließen
                </h1>

                <p>"Ich bedanke mich für das freundliche Telefonat und wünsche Ihnen einen schönen
                    Tag/Woche/Wochenende/Urlaub."
                </p>

                <table>
                    <td>
                        <p>
                            Telefonat beenden / Prozess abschließen
                            <button type="button">go to Page 19</button>
                            
                        </p>
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

export default Page19;