import React from 'react'
import { Link } from 'gatsby'

import {AiFillInstagram, AiFillGoogleCircle, AiFillFacebook} from 'react-icons/ai'

import logo from '../images/white-logo.png'

const Footer = () => {
    return (
        <footer>
          <div className="footer-content">
            <div className="logo-container">
              <img style={{height: '150px', width: "150px"}} src={logo}/>
              <h3>Auto Collision & Paint</h3>
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

            <div className="footer-operation">
              <h3>Shop Information</h3>
              <div className="underline"></div>
              <p>Location</p>
              <a href="https://www.google.com/maps/place/5262+Washington+Blvd,+Los+Angeles,+CA+90016" target="_blank">
                <p>Washington Blvd</p>
                <p>Los Angeles, CA 90016</p>
              </a>

              <p>Phone Number</p>
              <a href="tel:+13239374064">(323) 937-4064</a>

              <p>Hours</p>
              <p>Mon-Fri: 9:00am-6:00pm</p>
            </div>

            <div className="footer-nav">
              <h4>Navigation</h4>
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

          </div>


          <div className="copy-right">
            © {new Date().getFullYear()},
            <Link to="/"> Santa Monica Auto Body</Link>
          </div>
        </footer>
    )
}

export default Footer
