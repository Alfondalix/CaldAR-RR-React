import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="navigation">
      <i class="fas fa-copyright logo"></i>
      <div className="search">
        <input type="text" placeholder="Search.." />
        <i className="fas fa-search"></i>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li>
            <i className="far fa-envelope"></i>
          </li>
          <li>
            <i className="far fa-bell"></i>
          </li>
          <li>
            <i className="far fa-user"></i>
          </li>
          <li>
            <span className="user-name">User Admin</span>
          </li>
          <li>
            <i className="fas fa-sign-out-alt"></i>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
