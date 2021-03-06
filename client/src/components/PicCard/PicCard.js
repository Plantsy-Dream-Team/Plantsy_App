import React from 'react';
import "./PicCard.css";


const PicCard = ({ name, image, click, plant }) => (
  <div onClick={(e) => plant ? click(e, plant[0]) : null} >
    <div className="proPic">
      <div className="img-container">
        <img className='plantPicture' alt={name} src={'/api/images/' + image} />
      </div>
    </div>
  </div>
);

export default PicCard;