import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Recomendation = () => (
    <Card style={{ width: '25rem' }}>
        <Card.Img variant="top" src={require("../../assets/2.png")} />
        <Card.Body>
            <Card.Title>Recomendaciones</Card.Title>
                <Card.Text>
                    "El trato era más cercano y las cosas más rápidas"<br/>
                    "Son los son los más cercanos a la hora de recibir y comentar informes"<br/>
                    14 recomendaciones de clientes
                </Card.Text>
            <Button variant="primary">220 Clientes Encuestados</Button>
        </Card.Body>
    </Card>
)

export default Recomendation;