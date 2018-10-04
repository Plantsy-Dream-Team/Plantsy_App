import React from 'react';
import './PostCard.css';

const PostCard = props => (

    <div className = "formModal">
        <div className = "bgImage">
        <div className = "upperBox">
            
        <div className = "cardTitle2">Post a Plant</div>
        </div>
        <form>
            <h3>Plant Name:</h3>
            <input className = "inputBox" type = "text"/>
                
            <h3>Plant Info:</h3>
            <textarea className = "textBox">
                
            </textarea>
            <input className = "submitBtn" type = "submit" value = "Submit"/>
          </form>      
        </div>
    </div>

);

export default PostCard;