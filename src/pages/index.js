import React from "react"
import { Link } from "gatsby"
import {MdLocationOn, MdPhone, MdAccessTime} from 'react-icons/md'


import Layout from "../components/layout"
import SEO from "../components/seo"

import transCars from "../images/trans-cars.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="banner">
      <div className="banner-text">
        <h1>Santa Monica Auto Body</h1>
        <button className="banner-btn">
          <Link className="banner-link" to="/">Contact</Link>
        </button>
      </div>
    </div>

    <div className="operation-information">
      <div className="phone">
        <MdPhone className="opt-icons"/>
        <div className="phone-text">
          <h3>Phone Number</h3>
          <p>(323) 937-4064</p>
        </div>
      </div>
      <div className="location">
        <MdLocationOn className="opt-icons"/>
        <div className="location-text">
          <h3>Location</h3>
          <p>5262 Washington Blvd</p>
          <p> Los Angeles, CA 90016</p>
        </div>
      </div>
      <div className="hours">
        <MdAccessTime className="opt-icons"/>
        <div className="opt-text">
          <h3>Hours</h3>
          <p>Monday - Friday: 9:00am - 6:00pm</p>
        </div>
      </div>
    </div>

    <div className="mission-statment">
      <div className="statment-word-container">
        <div className="statment-words">
          <h2><span className="first-word">Our</span> commitment to you</h2>
          <div className="underline"></div>
        </div>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
      </div>
      <div className="transparnt-image">
        <img style={{height: '100%', width: '100%'}} src={transCars} />
      </div>
    </div>

    <div className="service-section">

    </div>


    <div className="brands">

    </div>

    <div className="map-container">
      <iframe className="map"  frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=1200&amp;height=500&amp;hl=en&amp;q=%205262%20Washington%20Blvd%20Los%20Angeles+(Santa%20Monica%20Auto%20Body)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> 
      <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=f2d5999ed47c3af38848855b1d5087c2e364a30b'></script>

    </div>
  </Layout>
)

export default IndexPage
