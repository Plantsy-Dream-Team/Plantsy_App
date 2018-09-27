import React from "react";
import './image.css';

const image = props => (
    <img className="cardImage card-img-bottom" src={'/api/images/' + props.image} alt={props.name}/>
);

export default image;
        
    