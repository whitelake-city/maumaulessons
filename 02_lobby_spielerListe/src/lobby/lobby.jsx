import React, {Component} from "react";
import Container from "reactstrap/es/Container";
import {Row} from "reactstrap";
import Col from "reactstrap/es/Col";
import Button from "reactstrap/es/Button";

export class Lobby extends Component {
    constructor(props) {
        super(props);

        if (!props.spiel.id) {
            this.props.sucheSpiel(this.props.match.params.spielerId);
        } else {
            this.props.api.warteAufSpielStart(this.props.spiel.id, (spiel) => {
                this.props.starteSpiel(spiel);
                this.props.history.push(`/mau-mau/${spiel.spieler.id}`);
            });

            this.props.api.warteAufSpielerBereit(this.props.spiel.id, this.props.aktualisiereSpiel);
        }
    }

    spielerIstBereit = () => {
        this.props.api.spielerIstBereit(this.props.spiel.spieler.id, this.props.aktualisiereSpiel);
    };

    /**
     * Aufgabe 2:
     *
     * In dieser Aufgabe, soll eine Liste der Spieler angezeigt werden. Dazu sind bereits die Spieler von unserem Server geladen.
     * Ein Spieler, egal ob du selbst oder einer deiner Mitspieler, besitzt immer einen Namen und ein Merkmal "bereit". Dieses
     * Merkmal zeigt an ob ein Spieler bereit ist oder noch auf andere Mitspieler warten möchte.
     *
     * a) Wenn du die Lobby betrittst, möchtest du mit freundlich empfangen werden. Füge der Lobby einen Begrüßung hinzu.
     *
     * b) Die Liste der Spieler, sowohl du selbst als auch alle deine Mitspieler, soll wie folgt dargestellt werden:
     *
     * || Spieler:                     | Status:  ||
     * || Dein Name                    | wartet   ||
     * || Mitpsieler 1                 | bereit   ||
     * || ...                          | ...      ||
     *
     * Hinweis:
     * Deine Informationen findest du unter: this.props.spiel.spieler
     * Die Informationen über deine Mitpsieler findest du unter: this.props.spiel.mitspieler
     *
     * c) Zeige am Ende der Spielerliste einen Knopf (Button) an.
     *
     * Zusatzziel 1:
     * Die Wörter "Spieler" und "Status" sollen fettgedruckt dargestellt werden.
     *
     * Zusatzziel 2:
     * Der Knopf soll deaktiviert werden, sobald er einmal geklickt worden ist.
     *
     * Wörterbuch:
     * Zeile = row
     * Spalte = col (kurz für column)
     * Knopf = Button
     * abbilden = map
     */
    render() {
        return (
            <Container className={"lobby-wrapper"}>

            </Container>
        );
    }
}