import React, { Component } from "react";
import { NearMeOutlined } from "@material-ui/icons";
import { Form } from "react-bootstrap";

class Page18 extends Component {
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
                  Kein Interresse an einem Film
                </h1>

                <p>"Dann muss ein Missverständnis vorliegen und unser Geschäftsführer wird sich noch
                    einmal persönlich bei Ihnen melden, ist das in Ordnung für Sie?"
                </p>

                <table>
                    <td>
                        <p>
                            Bei "Ja" Task erstellen:"Rückruf"
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

export default Page18;