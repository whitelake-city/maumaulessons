import React, {Component} from "react";
import {KartenVorderseite} from "../karten/kartenVorderseite";

export class SpielerKarten extends Component {
    /**
     * Aufgabe 4
     * Nicht schummeln ;-)
     */
    istGueltigerZug = (kartenPosition) => {
       return false; // TODO führe hier die Prüfung durch ob der Zug ein gültiger Zug ist
    };

    render() {
        return (
            <div className={"spieler"}>
                <h1 className={"name"}>{this.props.spiel.spieler.name}</h1>
            </div>
        );
    }
}