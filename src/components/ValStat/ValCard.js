import React from 'react';

const ValCard = (props) => (
    <div id='card'>
        <img id='avatar' src={props.image}/>
        <div id='details'>
            <h6 id='cardDetail'>{props.name}</h6>
            <h6 id='cardDetail'>{props.degree}</h6>
            <h6 id='cardDetail'>{props.area}</h6>
        </div>
    </div>
)

export default ValCard;