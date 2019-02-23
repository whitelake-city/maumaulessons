import React, {Component} from "react";
import {KartenVorderseite} from "../karten/kartenVorderseite";

export class SpielerKarten extends Component {
    /**
     * Aufgabe 3
     *
     * In dieser Aufgabe sollen alle Karten von dir angezeigt werden. Die angezeigten Karten sollen klickbar sein und den nächsten
     * Zug von dir auslösen. Da du allerdings nicht immer am Zug sein kannst, darf dieser Klick nur dann ausgeführt werden, wenn du
     * auch wirklich an der Reihe bist.
     *
     * a) Zeige alle deine Karten an. Jede Karte muss folgende Eigenschaften gesetzt bekommen. Diese können einfach kopiert werden.
     * key={idx}
     * api={this.props.api}
     * position={idx}
     * spielId={this.props.spiel.id}
     * spielerId={this.props.spiel.spieler.id}
     * istGueltigerZug={this.istGueltigerZug}
     *
     * b) Füge der angezeigten Karte folgende weiteren Eigenschaften hinzu:
     * karte = die aktuelle Karte
     * amZug = ob du wirklich am Zug bist
     *
     * c) Schreibe die Funktion "istGueltigerZug" zu Ende. Damit ein Zug gülitg ist muss eine der folgenden Regeln erfüllt sein.
     * * Es darf nur Wert auf Wert gelegt werden (z.B. 8 auf 8, Dame auf Dame)
     * * Es darf nur Farbe auf Farbe gelegt werden (z.B. Pik auf Pik)
     * * Wenn eine 7 gelegt wurde darf nur eine 7 gelegt werden, aber keine Karte der gleichen Farbe mit einem anderen Wert.
     *
     * Wörterbuch:
     * wenn = if
     * sonst = else
     * wahr = true
     * falsch = false
     * und = and (Symbol "&&")
     * oder = or (Symbol "||")
     * Schlüssel = key
     * zurückgeben = return
     */

    istGueltigerZug = (kartenPosition) => {
       return false; // TODO führe hier die Prüfung durch ob der Zug ein gültiger Zug ist
    };

    render() {
        return (
            <div className={"spieler"}>
                <h1 className={"name"}>{this.props.spiel.spieler.name}</h1>
                {/* TODO zeige hier alle Karten für Aufgabe 3.a an */}
            </div>
        );
    }
}