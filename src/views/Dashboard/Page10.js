import React, { Component } from "react";

 class Page10 extends Component {
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
                    Warum willst du das wissen?
                </h1>
                <p1>
                    "Damit ich Sie bestmöglich beraten kann, muss ich wissen, wie viel Sie aktuell tatsächlich
                    investieren können, weil [konzeption, Equipment, Personal etc.] ja auch entsprechend Geld kostet und 
                    so eine Strategie am Ende nur umsetzbar ist, wenn Sie auch investieren können."
                </p1>
                <table>
                    <td>
                        <p2>
                            1.1 Next
                            <button type="button">go to Page 11</button>
                            
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

export default Page10;
    