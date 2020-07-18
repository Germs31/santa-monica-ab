import React from 'react'
import { Link } from 'gatsby'

import {AiFillInstagram, AiFillGoogleCircle, AiFillFacebook} from 'react-icons/ai'
import {MdLocationOn, MdPhone, MdAccessTime} from 'react-icons/md'


import '../Footer/Footer.scss';
import logo from '../../images/white-logo.png'

const Footer = () => {
    return (
        <footer>
          <div className="footer-content">
            <div className="logo-container">
              <img src={logo}/>
              <h3>Auto Collision & Paint</h3>
            </div>

            <div className="footer-nav">
              <h3>Navigation</h3>
              <div className="underline"></div>
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
              <div className="underline"></div>
              <div className="footer-location">
                <MdLocationOn className="footer-opt-icons"/>
                <a href="https://www.google.com/maps/place/5262+Washington+Blvd,+Los+Angeles,+CA+90016" target="_blank">
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
                <AiFillFacebook className="footer-icon"/>
                <AiFillGoogleCircle className="footer-icon"/>
                <AiFillInstagram className="footer-icon"/>
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