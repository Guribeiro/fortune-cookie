import React, { Component } from 'react';
import './index.css'


class Button extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: props.name,
            onClick: props.changeMessage
        }
    }

    render() {
        return (
            <div className='container-button'>
                <button
                    className='hvr-rotate'
                    onClick={this.state.onClick}
                >
                    {this.state.name}
                </button>
            </div>
        );
    }
}

export default Button;