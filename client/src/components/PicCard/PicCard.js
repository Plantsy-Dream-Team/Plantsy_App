import React from 'react';
import "./PicCard.css";

const PicCard = props => (
  <div>
     <div className = "proPic">
        <img alt={props.name} src={props.image} />
        <div class = "proName">{props.name}</div>
    </div>
  </div>
);

export default PicCard;