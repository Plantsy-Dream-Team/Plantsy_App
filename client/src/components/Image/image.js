import React from "react";
import './image.css';

const image = ({ name, image, click, plantId}) => (
    <div onClick={(e) => click(e, plantId)}>
        <img src={'/api/images/' + image} alt={name} />
    </div>
);

export default image;

