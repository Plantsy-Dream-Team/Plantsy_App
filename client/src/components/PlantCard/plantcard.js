import React from 'react';
import './plantcard.css';

const PlantCard = ({image, name, children, description}) => (


    <div class = "modal">
        <img class = "bgImage"
        src={'/api/images/' + image} alt={name}>
        <div class = "upperBox">
            {children}
            <div class = "cardTitle">{name}</div>
            <input class = "btnC" type = "submit" value = "Comments"/> 
        </div>
        <div class = "infoBox"> 
            <div class = "textBox">
                {description}
            </div>
        </div>
        </img>
    </div>

);

export default PlantCard;