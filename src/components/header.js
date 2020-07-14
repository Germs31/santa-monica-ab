import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {useState} from "react"
import logo from '../images/logo.png'

const Header = ({ siteTitle }) => {
  const [isOpen, setIsOpen] = useState(false)
  console.log(isOpen)

  window.onresize = () => (window.innerWidth > 900 && isOpen) && setIsOpen(false)


  return (
    <header>
      <div className="nav-container">
        <div className="logo">
          <Link to="/">
            <img style={{height: '100px', width: '100px'}} src={logo}/>
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
      <div className={isOpen ? " mobile-overlay show" : "mobile-overlay hide"}>
        <nav>
          <ul>
            <li>
              <Link>About</Link>
            </li>
            <li>
              <Link>Services</Link>
            </li>
            <li>
              <Link>Gallery</Link>
            </li>
            <li>
              <Link>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

const Hamburger = ({setIsOpen,isOpen}) => {
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
