import React, {Component} from "react";
import {KartenRueckseite} from "../karten/kartenRueckseite";
import {KartenVorderseite} from "../karten/kartenVorderseite";

export class KartenStapel extends Component {

    /**
     * Aufgabe 4
     * 
     * Bei dieser Aufgabe müssen verschiedene React Komponenten miteinander kombiniert werden.
     * 
     * Ein Kartenstapel besteht aus einem Stapel zum Ziehen und einem Stapel zum Ablegen. Die Komponente zum
     * Ablegen heißt KartenVorderseite die zum Ziehen KartenRueckseite.
     * 
     * Aufgabe 4a:
     * Fügt die beiden Stapel zum ziehen und ablegen hinzu. Hierzu müsst ihr erst einmal nur diese Komponente (KartenStapel) anpassen!
     * 
     * Aufgabe 4b:
     * Passe die Komponente Kartenvorderseite an. Diese soll die zuletzt abgelegt Karte anzeigen. Eine Karte hat immer eine Art und einen Wert.
     * Passe die Information über die Eigenschaft "karte" weiter. Den Wert den du Weitergeben musst, findest du unter props.spiel.gelegt
     * 
     * Aufgabe 4c:
     * Fügt hinzu, dass bei einem Klick auf die Komponente Kartenrueckseite, eine Karte gezogen wird.
     * Hinweis: Ihr müsst dazu nicht nur die Kartenstrapel Komponente sondern auch die KartenRueckseite Komponente anpassen!
     * Passe die Funktion zieheKarte als property an die Komponente Kartenrueckseite weiter.
     * Die Funktion zieheKarte muss erst noch zu Ende geschrieben werden. Wir haben euch schon mal etwas beschrieben, was 
     * die Funktion machen muss.
     * 
     * 
     * Aufgabe 4d:
     * Es wäre schön, wenn man sehen könnte wie viele Karten sich noch auf dem Stapel zum Ziehen befinden
     * Auch hier muss sowohl diese als auch die Komponente Katenrueckseite angepasst werden. 
     * Passe den Wert von props.spiel.stapel als stapelGroesse an die Komponente Kartenrueckseite weiter.
     */


    zieheKarte = () => {
        /**
         * Wenn der Spieler am Zug ist:
         *      rufe die Funktion zieheKarte unter this.props.api auf.
         *      Die Funktion benötigt die id des Spiels und die id des Spielers
         */
    };

    render() {
        return (
            <div className={"kartenstapel"}>
               {/**
                * Hier muss die Kartenvorder und rueckseite hin (Ablegen und Ziehen)
               */}
            </div>
        );
    }
}