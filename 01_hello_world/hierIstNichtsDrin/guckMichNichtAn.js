import React, {Component} from 'react';
import './GuckMichNichtAn.css';

class GuckMichNichtAn extends Component {
    state = {
        name: 'Welt'
    };

    render() {
        return (
            <div className="App">
                <h1>Hallo, {this.state.name}!</h1>
                <input
                    onChange={(event) => {
                        this.setState({ name: event.target.value })
                    }}
                    value={this.state.name}
                />
            </div>
        );
    }
}

export default GuckMichNichtAn;
