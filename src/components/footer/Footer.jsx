import React from 'react'
import {NavLink} from "react-router-dom"
import { FaFacebookF, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";
// IMAGES
import SiteLogo from "../../images/footer-logo.svg"

const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="footer__content">
              <div className="footer__title">
                <img src={SiteLogo} alt="site logo" />
                <h2>Bespoke software solutions</h2>
                <ul>
                  <a href="https://www.facebook.com/" target='_blank'>
                    <FaFacebookF className='footer__title-socials'/>
                  </a>
                  <a href="https://www.youtube.com/" target='_blank'>
                    <FaYoutube/>
                  </a>
                  <a href="https://www.instagram.com/" target='_blank'>
                    <FaInstagram/>
                  </a>
                  <a href="https://www.twitter.com/" target='_blank'>
                    <FaTwitter/>
                  </a>
                </ul>
              </div>
              <div className="footer__lists">
                <ul className="footer-list">
                  <h3>Company</h3>
                  <NavLink className={"header__right__list-item"} to={"/aboutus"}>About Us</NavLink>
                  <NavLink className={"header__right__list-item"} to={"/careers"}>Careers</NavLink>
                  <NavLink className={"header__right__list-item"} to={"/services"}>Services</NavLink>
                  <NavLink className={"header__right__list-item"} to={"/blog"}>Blog</NavLink>
                </ul>
                <ul className="footer-list">
                  <h3>Connect</h3>
                  <li>hi@finsweet.com</li>
                  <li>+(123) 456-7890</li>
                </ul>
              </div>
              <form className="footer-form">
                <h3>Join Newsletter</h3>
                <input type="email" placeholder='Type email here' />
                <button>Subscribe</button>
              </form>
            </div>
            <div className="footer__bottom">
              <p>© All rights reserved – Finsweet</p>
              <div>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms & Conditions</a>
              </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer