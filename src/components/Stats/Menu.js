import React, { Component } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Selector from './Selector';

class Menu extends Component {
    render() {
        let menu;
        return(
            <div id="menu">
                <Selector/>             
                <h6 id="url">URL PARA USAR COMO ENLACE</h6>
                <InputGroup.Text id="basic-addon3">
                    https://www.yesthem.com/neomarketing/marketing/<br/>ayudaconinstagram
                </InputGroup.Text>    
            </div>
        )
    }
}

export default Menu;