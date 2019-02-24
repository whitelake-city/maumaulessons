import React from 'react';
import {SpielerKarten} from "./komponenten/spielerkarten/spieler";
import {Mitspieler} from "./komponenten/mitspielerkarten/mitspieler";
import {KartenStapel} from "./komponenten/kartenstapel/kartenstapel";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

export class MauMau extends React.Component {
    constructor(props) {
        super(props);

        if (!props.spiel.id) {
            this.props.sucheSpiel(this.props.match.params.spielerId);
        }

        this.props.api.warteAufSpielStatus(this.props.spiel.id,this.props.spiel.spieler.id, this.props.aktualisiereSpiel);
    }

    geheZumStart = () => {
        return this.props.history.push(`/`);
    };

    /**
     * Aufgabe 5:
     *
     * Füge Benachrichtungen über den Ausgang des Spiels hinzu. Jede dieser Benachrichtungen soll sowohl einen Titel, eine Nachricht und
     * einen Button beinhalten. Die Nachricht soll dich abhängig vom Ausgang des Spiels ermutigen ein neues Spiel anzufangen. Der Button
     * soll bei einem Klick unter Verwendung der Funktion "geheZumStart" auf die Willkommensseite weiterleiten.
     *
     * Hinweis:
     * Die zu verwenden Komponenten heißen Modal, ModalBody, ModalFooter, ModalHeader
     */

    render() {
        return (
            <div className={'maumau'}>
                <Mitspieler mitspieler={this.props.spiel.mitspieler}/>
                <KartenStapel
                    spiel={this.props.spiel}
                    api={this.props.api}
                />
                <SpielerKarten
                    spiel={this.props.spiel}
                    api={this.props.api}
                />

                {/* TODO - füge hier die Benachrichtigung über den Ausgangs des Spiels */}
            </div>
        );
    }
}