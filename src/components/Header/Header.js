import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {useState} from "react"
import logo from '../../images/white-logo.png'
import '../Header/Header.scss';
import {MdLocationOn, MdPhone, MdAccessTime} from 'react-icons/md'


const Header = ({ siteTitle }) => {
  const [isOpen, setIsOpen] = useState(false)
  console.log(isOpen)

  window.onresize = () => (window.innerWidth > 900 && isOpen) && setIsOpen(false)


  return (
    <header>
      <div className="nav-container">
        <div className="logo">
          <img src={logo}/>
          <Link to="/">
            <h2>Santa Monica Auto body</h2> 
          </Link>
        </div>
        <div className="nav">
          <nav>
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/service">Services</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Hamburger setIsOpen={setIsOpen} isOpen={isOpen} />
      </div>
      <div className="nav-contact">
        <div className="hours">
            <MdLocationOn className="nav-icon"/>
            <p>Mon - Fri: 9Am - 6pm</p>
        </div>
        <div className="address">
          <MdAccessTime className="nav-icon"/>
          <a target="_blank" href="https://www.google.com/maps/place/5262+Washington+Blvd,+Los+Angeles,+CA+90016/">5262 Washington Blvd, Los Angeles, CA 90016</a>
        </div>
        <div className="phone">
          <MdPhone className="nav-icon"/>
          <a href="tel:+13239374064">(323) 937-4064</a>
        </div>
      </div>
      <div className={isOpen ? " mobile-overlay show" : "mobile-overlay hide"} onClick={() => setIsOpen(!isOpen)}>
        <div class="overlay-contact">
          <div className="overlay-contact-ctx">
           <MdPhone className="overlay-icon"/>
            <a href="tel:+13239374064">(323) 937-4064</a>
          </div>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/service">Services</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

const Hamburger = ({setIsOpen,isOpen}) => {
  console.log(isOpen)
  return( 
    <div className={isOpen ? "hamburger-container open" : "hamburger-container closed"} onClick={() => setIsOpen(!isOpen)}>
      <div className="hamburger"></div>
      <div className="hamburger"></div>
      <div className="hamburger"></div>
    </div> 
  )
}



Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
