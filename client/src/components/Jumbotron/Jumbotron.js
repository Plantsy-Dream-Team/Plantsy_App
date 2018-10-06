import './Jumbotron.css';
import React from "react";

const Jumbotron = ({ children }) => (
  <div className = "jumbo">
      <input className = "btnP" type = "submit" value = "Post a Plant"></input>
      {children}
      <div class = "title">Plantsy  </div>
          <input className = "btnL" type = "submit" value = "Logout"/> 
          <input className = "btnL" type = "submit" value = "Profile"/>
          <input className = "btnL" type = "submit" value = "Home"/>
          <input className = "btnS" type = "Text" placeholder = "Search"/>

    </div>
);

export default Jumbotron;
