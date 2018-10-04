import React from "react";

const Jumbotron = ({ children }) => (
  <div class = "jumbo">
      <input class = "btnP" type = "submit" value = "Post a Plant"></input>
      {children}
      <input class = "btnL" type = "submit" value = "Search"/>
      <div class = "title">Plantsy
          <input class = "btnL" type = "submit" value = "Logout"/> 
          <input class = "btnL" type = "submit" value = "Profile"/>
          <input class = "btnL" type = "submit" value = "Home"/>
      </div>
    </div>
);

export default Jumbotron;
