import React from 'react';
import "./PlantPicCard.css";

const PlantPicCard = props => (
  <div>
     <div class = "plantPic">
        <div className="img-container">
            <img alt={props.name} src={props.image} />
        </div>
        <div class = "proName">{props.name}</div>
    </div>
  </div>
);

export default PlantPicCard;