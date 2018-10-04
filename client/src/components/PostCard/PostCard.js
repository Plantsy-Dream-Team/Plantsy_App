import React from 'react';
import './PostCard.css';

const PostCard = props => (

    <div className = "formModal">

        <div className = "bgImage">
        <div className = "upperBox">
            {props.children}
        <div className = "cardTitle2">Post a Plant</div>
        </div>
        <form>
            <h3>Plant Type:</h3>
            <input class = "inputBox" type = "text"/>
                {props.name}
            <h3>Description:</h3>
            <textarea class = "textBox">
                {props.description}
            </textarea>
            <input class = "submitBtn" type = "submit" value = "Submit"/>
          </form>      
        </div>
    </div>

);

export default PostCard;