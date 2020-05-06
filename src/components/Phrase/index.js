import React, { Component } from 'react';
import './index.css';

class Phrase extends Component {

    constructor(props) {
        super(props)
        this.state = {
            phrase: props.phrase
        }

    }
    render() {
        return (
            <div className='container-phrase'>
                <h3>{this.state.phrase}</h3>
            </div>
        );
    }
}

export default Phrase;