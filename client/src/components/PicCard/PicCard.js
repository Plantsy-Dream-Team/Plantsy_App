import React from 'react';
import "./PicCard.css";

const PicCard = props => (
  <div>
     <div class = "proPic">
        <div className="img-container">
            <img alt={props.name} src={'/api/images/' + props.image} />
        </div>
        <div class = "proName">{props.name}</div>
    </div>
  </div>
);

export default PicCard;