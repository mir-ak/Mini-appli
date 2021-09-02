import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className='header'>
      <NavLink
        className="App-link"
        to='/'>
        Accueil
      </NavLink>
    </div>
  );
};

export default Header;
