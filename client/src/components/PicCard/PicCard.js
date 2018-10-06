import React from 'react';
import "./PicCard.css";


const PicCard = ({ name, image, click, plant }) => (
  <div onClick={(e) => plant ? click(e, plant[0]) : null} >
    <div className="proPic">
      <div className="img-container">
        <img alt={name} src={'/api/images/' + image} />
      </div>
      <div className="proName">{name}</div>
    </div>
  </div>
);

export default PicCard;