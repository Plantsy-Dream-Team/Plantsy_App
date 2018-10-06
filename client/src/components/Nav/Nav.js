import React from "react";

const Nav = ({filterPlants}) => (

  <div className = "nav" >
    <div className = "navLink" onClick={() => filterPlants(['green'])}>Thriving</div>
    <div className = "navLink" onClick={() => filterPlants(['yellow','orange'])}>Needs Help</div>
    <div className = "navLink_R" onClick={() => filterPlants([])}>R.I.P</div>
  </div>
);


export default Nav;

