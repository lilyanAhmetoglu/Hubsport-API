import React, { Component } from "react";

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
                <p1>"Ich bedanke mich für das freundliche Telefonat und wünsche Ihnen einen schönen
                    Tag/Woche/Wochenende/Urlaub."
                </p1>
                <table>
                    <td>
                        <p2>
                            Telefonat beenden / Prozess abschließen
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

export default Page19;