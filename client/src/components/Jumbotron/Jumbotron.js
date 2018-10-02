import React from "react";

const Jumbotron = ({ children }) => (
  <div class = "jumbo">  {children}
        <div class = "proPic">
            <div class = "proName">Profile Name</div>
        </div>
        <div class = "title">Plantsy
            <input class = "btnL" type = "submit" value = "Logout"/> 
            <input class = "btnL" type = "submit" value = "Search"/>
            <input class = "btnL" type = "submit" value = "Profile"/>
            <input class = "btnL" type = "submit" value = "Home"/>
        </div>
    </div>
);

export default Jumbotron;
