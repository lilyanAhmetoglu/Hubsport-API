import React, { Component } from "react";

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
                
                <p1>"Dann muss ein Missverständnis vorliegen und unser Geschäftsführer wird sich noch
                    einmal persönlich bei Ihnen melden, ist das in Ordnung für Sie?"
                </p1>

                <table>
                    <td>
                        <p2>
                            Bei "Ja" Task erstellen:"Rückruf"
                            <button type="button">go to Page 19</button>
                            
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

export default Page18;