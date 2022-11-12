import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { IoIosPerson } from 'react-icons/io';

const NavBar = () => (
  <nav className="menuNav">
    <h1 className="menuTitle">
      Bookstore
      {' '}
      <span>CMS</span>
    </h1>
    <div className="menuContainer">
      <ul className="menuList">
        <li><Link className="menui vertical" to="/">Books</Link></li>
        <li><Link className="menui vertical end" to="/Categories">Categories</Link></li>
      </ul>
    </div>
    <button className="headerbutton" type="button">
      <IconContext.Provider value={{ color: 'blue', size: '1.3rem' }}>
        <IoIosPerson />
      </IconContext.Provider>
    </button>
  </nav>
);

export default NavBar;
