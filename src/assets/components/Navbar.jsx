import React from 'react';
import BrandLogo from "../../assets/img/company-logo.png";
import { Link } from 'react-router-dom';
// import logo from "../../assets/img"

function Navbar() {
  return (
    <header id='header' className='header'>
      <div className="company__info">
        <Link to={"/"}>
          <img src={BrandLogo} alt="brand logo" />
        </Link>
      </div>
      <nav className="header__nav">
        <ul className="nav__lists">
          <li className="nav__list-item">
            <Link to={"/"} >Home</Link>
          </li>
          <li className="nav__list-item">
            <Link to={"/about"} >About</Link>
          </li>
          <li className="nav__list-item">
            <Link to={"/contact"} >Contact</Link>
          </li>
          <li className="nav__list-item">
            <Link to={"/news"} >News</Link>
          </li>
        </ul>
      </nav>
      <div className="header__connect">
        <Link className='header__connect-link button__primary --white' to={"/"} >Get Started</Link>
      </div>
    </header>
  )
}

export default Navbar