import React from 'react';
import './plantcard.css';

const PlantCard = ({ name, children, description, modal, health, close, id, deletePlant }) => (

    <div class={`modal ${modal} ${health}`} onClick={close}>
        <div className="upperBox">
            <div className="dropdown">
                <span>edit</span>
                <div className="dropdown-content">
                    <p onClick={() => deletePlant(id)}>delete</p>
                </div>
            </div>
            {children}
            <div className="cardTitle">{name}</div>
            <input className="btnC" type="submit" value="Comments" />
        </div>
        <div className="infoBox">
            <div className="textBox">

                {description}
            </div>
        </div>
    </div>
);

export default PlantCard;