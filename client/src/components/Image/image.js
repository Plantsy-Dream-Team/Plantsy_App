import React from "react";
import './image.css';
import plantAPI from "../../utils/plantAPI";

const image = ({ name, image, click, plantId}) => (
    <div onClick={(e) => click(e, plantId)}>
        <img src={'/api/images/' + image} alt={name} />
    </div>
);

export default image;

