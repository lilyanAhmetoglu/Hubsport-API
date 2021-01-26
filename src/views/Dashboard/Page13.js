import React, { Component } from "react";

class Page13 extends Component {
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
                   Das ist aber teuer... / oder andere Einwände
                </h1>
                <p1>"Diese erste Einschätzung ist erstmal ein geschätzter Preisrahmen. In welchem Bereich
                    des eben genannten Rahmens, sehen Sie sich denn?"
                </p1>
                
                <table>
                    <td>
                        <p1>
                            1.1 Bei Nennung der Summe
                            <button type="button">go to Page 12</button>
                            
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

export default Page13;