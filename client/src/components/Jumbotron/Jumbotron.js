import './Jumbotron.css';
import React from "react";

const Jumbotron = ({ handlePostAPlantClick, children, logOut }) => (
  <div className = "jumbo">
      <input className = "btnP" type = "submit" value = "Post a Plant" onClick={handlePostAPlantClick}></input>
      {children}

      <div class = "title">Plantsy  </div>
          <input className = "btnL" onClick={logOut} value = "Logout"/> 
          <input className = "btnL" type = "submit" value = "Profile"/>
          <input className = "btnL" type = "submit" value = "Home"/>
          <input className = "btnS" type = "Text" placeholder = "Search"/>

    </div>
);

export default Jumbotron;
