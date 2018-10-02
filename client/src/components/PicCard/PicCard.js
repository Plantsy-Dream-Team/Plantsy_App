import React from 'react';
import "./PicCard.css";


const PicCard = ({ name, image, click, plantId }) => (
  <div onClick={(e) => click(e, plantId)}>
    <div className="proPic">
      <div className="img-container">
        <img alt={name} src={'/api/images/' + image} />
      </div>
      <div className="proName">{name}</div>
    </div>
  </div>
);

export default PicCard;