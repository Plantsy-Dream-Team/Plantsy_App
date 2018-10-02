import React from 'react';
import './plantcard.css';

const PlantCard = props => (

<div>
    <img class = "bgImage"
    src={'/api/images/' + props.image} alt={props.name}>
    <div class = "proPic">
        <div class = "proName">Profile Name</div>
    </div>
    <div class = "title">{props.name}</div>
    <div class = "infoBox">{props.description}
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        {props.comments.map(comment => <p>{comment.comment}</p>)}
    </div>
    </img>
</div>
  
);

export default PlantCard;