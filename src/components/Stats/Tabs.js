import React from 'react';
import Button from 'react-bootstrap/Button';

const Tabs = ({ getBtnId }) => {
    return (
        <div 
            className="btnGroup"
            onClick={getBtnId}
        >
            <Button id="0" variant="link">Filtrar</Button>
            <Button id="1" variant="link">Imágen</Button>
        </div>
    );
};

export default Tabs;