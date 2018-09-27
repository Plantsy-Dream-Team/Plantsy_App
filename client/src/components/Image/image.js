import React from "react";
import './image.css';
import plantAPI from "../../utils/plantAPI";

const image = props => (
    <div onClick={props.click} data-plant-id={props.id}>
        <img src={'/api/images/' + props.image} alt={props.name} />
    </div>
);

export default image;

