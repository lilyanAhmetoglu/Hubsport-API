import React, { Component } from "react";

class Page5 extends Component {
  render() {
    return (
      <div>
        <h1>Ich habe micht nicht beworben</h1>
        <p1>
          Sie möchten doch einen Imagefilm/Produktfilm/Erklärfilm [Film des
          Kunden bei der Eintragung], oder? Wenn <strong>"NEIN!" dann:</strong>{" "}
          Video ist aber grundsätzlich noch Thema bei Ihnen, oder?
        </p1>
        <p2>
          <strong>Mögliche Einwände im Gespräch:</strong> "Ich kenne euch
          eigentlich gar nicht"
        </p2>
        <p3>
          "Ja, das kann ich gut verstehen, also wir sind "Musterfirma" eine
          FIlmproduktionsfirma aus "Ort" und haben uns auf die Medienberatung
          spezialisiert. Ich lasse Ihnen nach dem Gespräch gerne noch einmal
          unsere Website zukommen und im Fachgespräch lernen Sie uns dann
          richtig kennen."
        </p3>
        <table>
          <td>
            <p4>
              1. Ja.
              <button type="button">go to Page 7</button>
            </p4>
          </td>
          <td>
            <p5>
              {" "}
              1.3. Ich wollte mich erstmal nach dem Preis erkundigen.
              <button type="button">go to Page 6</button>
            </p5>
          </td>
          <td>
            <p6>
              1.4. Nein.
              <button type="button">go to Page 18</button>
            </p6>
          </td>
        </table>
      </div>
    );
  }
}

export default Page5;
