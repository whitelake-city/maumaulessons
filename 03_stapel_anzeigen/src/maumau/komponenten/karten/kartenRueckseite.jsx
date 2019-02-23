import React, { Component } from "react";

export class KartenRueckseite extends Component {


    /**
     * Wie versprochen muss auch hier etwas angepasst werden.
     * 
     * Aufgabe 4b:
     * Die Funktion beiClick muss ergänzt werden. 
     *  1) Es muss verhindert werden, dass das Standardverhalten beim Klicken ausgeführt wird
     *  2) Wenn die Funktion 'beiClick' (unter props) nicht gleich undefined ist, soll diese aufgerufen werden. 
     * 
     * Außerdem muss die Render Funktion angepasst werden. Siehe Beschreibung in der Funktion render
     * 
     * Aufgabe 4c:
     * 
     * Die Komponente wird auch an anderen Stellen benutzt, daher muss sie je nachdem ob die property stapelGroesse gesetzt ist entweder:
     * Ein Bild mit der Kartenrueckseite anzeigen und die Anzahl der verbleibenden Karten auf dem Stapel
     * ODER einfach nur ein Bild mit dem Stapel
     */

    beiClick = (event) => {
        
    };

    render() {
        /**
         * Für Aufgabe 4b reicht es zunächst nur das Bild der Kartenrueckseite anzuzeigen
         * 
         * Für Aufgabe 4c:
         * Wenn this.props.stapelGroesse:
         *      Dann zeigen Bild mit Kartenrueckseite und die Anzahl der verbleibenden Karten an
         * Sonst:
         *      Zeige nur das Bild mit der Kartenrueckseite an
         */
        return (
            <div>
                KartenRueckseite
            </div>
        )
    }
}