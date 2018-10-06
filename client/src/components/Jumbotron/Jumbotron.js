import './Jumbotron.css';
import React from "react";

const Jumbotron = ({ handlePostAPlantClick, children, logOut }) => (
  <div className = "jumbo">
      <input className = "btnP" type = "submit" value = "Post a Plant" onClick={handlePostAPlantClick}></input>
      {children}
      <input class = "btnL" type = "submit" value = "Search"/>
      <div class = "title">Plantsy
          <input className = "btnL" onClick={logOut} value = "Logout"/> 
          <input className = "btnL" type = "submit" value = "Profile"/>
          <input className = "btnL" type = "submit" value = "Home"/>
      </div>
    </div>
);

export default Jumbotron;
