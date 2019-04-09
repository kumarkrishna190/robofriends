import React, { Component } from 'react';

class Hello extends Component {
    render() {
        return (
            <div class='f1 tc'>
            <h1>Hello world</h1>
            <p>{this.props.greeti}</p>
            </div>
            );
    }
}

export default Hello;