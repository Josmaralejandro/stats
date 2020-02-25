import React, { Component } from 'react';
import Filtrar from './Filtrar';
import Imagen from './Imagen';

class Options extends Component {

    render() {
        const panels = [
            <Filtrar/>,
            <Imagen/>
        ];

        const correctPanel = panels[this.props.panelIndex];

        return (
            <div className="panel-box">
                {correctPanel}
            </div>
        );
    }
}

export default Options;