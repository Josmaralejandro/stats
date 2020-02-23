import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class Menu extends Component {
    render() {
        let menu;
        return(
            <div>
                <div id="options">
                    <Button type="button" id="filtrar">Filtrar</Button>
                    <Button type="button" id="imagen">Imágen</Button>
                </div>
            </div>
        )
    }
}

export default Menu;