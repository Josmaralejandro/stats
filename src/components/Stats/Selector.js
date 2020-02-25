import React, { Component } from 'react';
import Tabs from './Tabs';
import Options from './Options';

class Selector extends Component {
     constructor(props) {
        super(props);
           this.state = {
               panelIndex: 0
        };
     }

    getBtnId = (e) => {
        if(e.target && e.target.nodeName == "BUTTON") {
            console.log(e.target);
            this.setState({
                panelIndex: Number(e.target.id)
            });
        }
    };

    render() {
        return (
            <div className="container">
                <Tabs
                    getBtnId={this.getBtnId}
                />
                <Options
                    panelIndex={this.state.panelIndex}
                />
            </div>
        )
    }
}

export default Selector;