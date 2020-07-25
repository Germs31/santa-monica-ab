import React from 'react'
import { Link } from 'gatsby'

import {AiFillInstagram, AiFillFacebook} from 'react-icons/ai'
import {MdLocationOn, MdPhone, MdAccessTime} from 'react-icons/md'
import {FaYelp} from 'react-icons/fa'


import '../Footer/Footer.scss';
import logo from '../../images/white-logo.png'

const Footer = () => {
    return (
        <footer>
          <div className="footer-content">
            <div className="logo-container">
              <img src={logo} alt="santa moncia auto body logo"/>
              <h3>Auto Collision & Paint</h3>
            </div>

            <div className="footer-nav">
              <h3>Navigation</h3>
              <ul>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/service">Service</Link>
                </li>
                <li>
                  <Link to="/gallery">Gallery</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            <div className="footer-operation">
              <h3>Shop Information</h3>
              <div className="footer-location">
                <MdLocationOn className="footer-opt-icons"/>
                <a href="https://www.google.com/maps/place/5262+Washington+Blvd,+Los+Angeles,+CA+90016" rel="noreferrer" target="_blank">
                  <p>Washington Blvd</p>
                  <p>Los Angeles, CA 90016</p>
                </a>
              </div>

              <div className="footer-phone">
                <MdPhone className="footer-opt-icons"/>
                <a href="tel:+13239374064">(323) 937-4064</a>
              </div>

              <div className="footer-hours">
                <MdAccessTime className="footer-opt-icons"/>
                <p>Mon-Fri: 9:00am-6:00pm</p>
              </div>
            </div>

            <div className="social-media">
              <div className="icon-container">
                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/SantaMonicaAutoBodyRepair/">
                  <AiFillFacebook className="footer-icon"/>
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.yelp.com/biz/santa-monica-auto-body-los-angeles">
                  <FaYelp className="footer-icon"/>
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/santamonica_autobody/?hl=en">
                  <AiFillInstagram className="footer-icon"/>
                </a>
              </div>
              <div className="underline"></div>
              <h4>Check us out</h4>
            </div>

          </div>


          <div className="copy-right">
            <Link to="/">© {new Date().getFullYear()}, Santa Monica Auto Body</Link>
          </div>
        </footer>
    )
}

export default Footer
