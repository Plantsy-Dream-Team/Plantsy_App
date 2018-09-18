import React from "react";
import './image.css';

const image = props => (
    <img src={'api/images/' + props.image} alt='plant'/>
);

export default image;
        
    