import React, {Component} from 'react';
import './App.css';

class App extends Component {
    /**
     * Aufgabe 1:
     *
     * Füge der Seite ein Eingabefeld (input) hinzu. Dieses soll die Eingabe eines Namens ermöglichen.
     * Die Eingabe dieses Feldes soll dann statt "Welt" im Titel angezeigt werden.
     */

    render() {
        return (
            <div className="App">
                <h1>Hallo, Welt!</h1>
            </div>
        );
    }
}

export default App;
