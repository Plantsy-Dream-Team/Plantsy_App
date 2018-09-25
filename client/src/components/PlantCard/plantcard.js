import React from 'react';
import './plantcard.css';

const PlantCard = props => (
    <div>
        <div className="plantCard card">
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
            </div>
            <img className="cardImage card-img-bottom" src={'/api/images/' + props.image} alt={props.name}/>
            <div className="card-body">
                <p className="card-text">{props.description}</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                <br></br>
                {props.comments.map(comment => <p>{comment.comment}</p>)}
            </div>
        </div>
    </div>
);

export default PlantCard;