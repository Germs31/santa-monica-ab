import React from "react"
import { Link } from "gatsby"

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
  </Layout>
)

export default IndexPage
