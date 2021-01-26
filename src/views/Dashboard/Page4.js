import React, { Component } from "react";

class Page4 extends Component {
    
    render() {
        return (
            
            
            <div>
                <h1>
                    Einleitung
                </h1>
                <p1>
                    Hallo [HERR oder FRAU], hier ist [Max Mustermann] von der "Muster GmbH". Ich grüße Sie.
                    Sie haben sich bei uns gemeldet, um herauszufinden, ob Ihnen unsere Dienstleistungen im Bereich Video
                    weiterhelfen können, ist das richtig?
                </p1>
                <table>
                    <td>
                        <p2>
                            1. Nein,ich habe mich nicht beworben.
                            <button type="button">go to Page 5</button>
                            
                        </p2>
                    </td>
                    <td>
                            <p3>2. Ja.
                                <button type="button">go to Page 7</button>
                            </p3>
                    </td>
                    <td>
                            <p3>
                                3. Ich habe keine Zeit.
                                <button type="button">go to Page X</button>
                            </p3>
                    </td>



                    
                </table>

               
             </div>
                
                    

                
        )
    }
}

export default Page4;


    