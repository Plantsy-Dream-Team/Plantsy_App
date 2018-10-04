import React from 'react';
import './plantcard.css';

const PlantCard = props => (

    <div className = "modal">

        <div className = "bgImage">
       <img src={'/api/images/' + props.image} alt={props.name}></img>
        <div className = "upperBox">
            {props.children}
            <div className = "cardTitle">{props.name}</div>
            <input className = "btnC" type = "submit" value = "Comments"/> 
        </div>
        <div className = "infoBox"> 
            <div className = "textBox">
                {props.description}
            </div>
        </div>
        </div>
    </div>

);

export default PlantCard;