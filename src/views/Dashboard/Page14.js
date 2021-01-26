import React, { Component } from "react";

class Page14 extends Component {
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
                    Wenn dies nicht möglich ist, dann:
                </h1>
                <p1>"Zusätzlich bieten wir unseren Kunden noch eine Kompaktlösung an, die bei einer
                    Investitionssumme von 2.900 EUR liegt, ist das für Sie möglich?
                </p1>
                
                <table>
                    <td>
                        <p1>
                            1.1 Ja
                            <button type="button">go to Page 12</button>
                            
                        </p1>
                    </td>
                    <td>
                            <p2>2. Nein
                                <button type="button">go to Page 15</button>
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

export default Page14;