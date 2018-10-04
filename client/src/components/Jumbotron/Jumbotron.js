import './Jumbotron.css';
import React from "react";

const Jumbotron = ({ children }) => (
  <div className = "jumbo">
      <input className = "btnP" type = "submit" value = "Post a Plant"></input>
      {children}
      <div class = "title">Plantsy
          <input className = "btnL" type = "submit" value = "Logout"/> 
          <input className = "btnL" type = "submit" value = "Search"/>
          <input className = "btnL" type = "submit" value = "Profile"/>
          <input className = "btnL" type = "submit" value = "Home"/>
      </div>
    </div>
);

export default Jumbotron;
