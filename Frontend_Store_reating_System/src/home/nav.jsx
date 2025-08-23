import React from 'react';
import { Link } from 'react-router-dom';
import  '../style/nav.css';

let Nav = () => {
  return (
    <div className="container-fluid nav1 d-flex">

      <ul className="nav">

        <li className="nav-item">
          <Link to="/" >Home </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" >Login</Link>
        </li>
        
      </ul>

    </div>
  );
};

export default Nav;
