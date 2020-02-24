import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

class Menu extends Component {
    render() {
        let menu;
        return(
            <div id="menu">
                <div id="options">
                    <Button variant="link">Filtrar</Button>
                    <Button variant="link">Imágen</Button>
                </div>
                <div>
                    <h6>Filtrar validaciones y recomendaciones</h6>
                </div>
                <Accordion defaultActiveKey="0">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            Industria
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>Blank</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            Nombre empresa
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                        <Card.Body>Blank</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="2">
                            Puesto
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                        <Card.Body>Blank</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="3">
                            Tamaño empresa
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="3">
                        <Card.Body>Blank</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
                <h6 id="url">URL PARA USAR COMO ENLACE</h6>
                <InputGroup.Text id="basic-addon3">
                    https://www.yesthem.com/neomarketing/marketing/<br/>ayudaconinstagram
                </InputGroup.Text>    
            </div>
        )
    }
}

export default Menu;