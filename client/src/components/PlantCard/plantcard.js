import React from 'react';
import './plantcard.css';

const PlantCard = props => (


    <div class = "modal">

        <img class = "bgImage"
        src={'/api/images/' + props.image} alt={props.name}>
        <div class = "upperBox">
            {props.children}
            <div class = "cardTitle">{props.name}</div>
            <input class = "btnC" type = "submit" value = "Comments"/> 
        </div>
        <div class = "infoBox"> 
            <div class = "textBox">
                {props.description}
            </div>
        </div>
        </img>
    </div>

);

export default PlantCard;