import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Image Gallery</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/downloads">Downloads</Link>
        <Link to="/favorites">Favorites</Link>
      </nav>
      <div className="search-container">
        <input type="text" placeholder="Search images..." />
        <button>Search</button>
      </div>
    </header>
  );
};

export default Header;
