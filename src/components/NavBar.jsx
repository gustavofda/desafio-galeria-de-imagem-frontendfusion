import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Início</Link>
      <Link to="/downloads">Downloads</Link>
      <Link to="/favorites">Favoritos</Link>
    </nav>
  );
};

export default NavBar;
