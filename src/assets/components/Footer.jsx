import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='footer' id='footer'>
      <div className="container">
        <div className="footer__features">
          <Link to="#">
            <img className="footer__logo" src='/src/assets/img/company-logo.png'></img>
          </Link>
          <ul className="footer__nav">
            <li className="footer__link">
              <Link className="footer__link" to="/">Home</Link>
            </li>
            <li className="footer__link">
              <Link className="footer__link" to="/about">About</Link>
            </li>
            <li className="footer__link">
              <Link className="footer__link" to="/contact">Contact</Link>
            </li>
            <li className="footer__link">
              <Link className="footer__link" to="/news">News</Link>
            </li>
          </ul>

          <ul className="footer__social-links">
            <li className='footer__social-link'>
              <Link to={"#"}>
                <img src="/src/assets/img/Facebook.png" alt="" />
              </Link>
            </li>
            <li className='footer__social-link'>
              <Link to={"#"}>
                <img src="/src/assets/img/Instagram.png" alt="" />
              </Link>
            </li>
            <li className='footer__social-link'>
              <Link to={"#"}>
                <img src="/src/assets/img/Twitter.png" alt="" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer__bottom">
          <p className='footer__copyright'>© 2021 Company</p>
          <ul className="footer__nav">
            <li className="footer__link">
              <Link className="footer__link" to="#">Privacy Policy</Link>
            </li>
            <li className="footer__link">
              <Link className="footer__link" to="#">Terms of Service</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer