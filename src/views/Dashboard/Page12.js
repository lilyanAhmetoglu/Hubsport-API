import React, { Component } from "react";

class Page12 extends Component {
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
                    "Und diesen Betrag sind Sie auch wirklich bereit für Ihren Film zu investieren?"
                </h1>
                
                <table>
                    <td>
                        <p1>
                            1.1 Ja
                            <button type="button">go to Page 16</button>
                            
                        </p1>
                    </td>
                    <td>
                            <p2>2. Nein, eigentlich ungern
                                <button type="button">go to Page 14</button>
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

export default Page12;