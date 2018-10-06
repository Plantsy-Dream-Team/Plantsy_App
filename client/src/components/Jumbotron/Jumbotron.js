import './Jumbotron.css';
import React from "react";

const Jumbotron = ({ handlePostAPlantClick, children, logOut, goHome }) => (
  <div className = "jumbo">
      <input className = "btnP" type = "submit" value = "Post a Plant" onClick={handlePostAPlantClick}></input>
      {children}

      <div class = "title">Plantsy  </div>
          <input className = "btnLog" onClick={logOut} value = "Logout"/> 
          <input className = "btnL" type = "submit" value = "Profile"/>
          <input className = "btnL" type = "submit" onClick={goHome} value = "Home"/>
          <input className = "btnS" type = "Text" placeholder = "Search"/>

    </div>
);

export default Jumbotron;
