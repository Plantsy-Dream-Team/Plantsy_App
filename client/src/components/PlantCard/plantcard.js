import React from 'react';
import './plantcard.css';

const PlantCard = ({image, name, children, description, modal, health, close}) => (

    <div class={`modal ${modal} ${health}`} onClick={close}>
        <div className = "upperBox">
            {children}
            <div className = "cardTitle">{name}</div>
            <input className = "btnC" type = "submit" value = "Comments"/> 
        </div>
        <div className = "infoBox"> 
            <div className = "textBox">

                {description}
            </div>
        </div>
    </div>
);

export default PlantCard;