import React from "react"
import { Link } from "gatsby"


import Layout from "../components/layout"
import SEO from "../components/seo"

import './style/Index/index.scss';

import logo from "../images/trans-cars.png"
import repair from "../images/repair.png"
import paint from "../images/pistol.png"
import transport from "../images/transport.png"
import mercury from "../images/mercury-logo.png";
import stateFarm from "../images/state-farm-logo.png";
import tripleA from "../images/aaa-logo.png"

import bmw from "../images/bmw-logo.png";
import ford from "../images/ford-logo.png";
import honda from "../images/honda-logo.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="landing">
      <div className="landing-content">
        <h1>Los Angeles Auto Collision & Paint</h1>
        <h3>All insurances welcomed</h3>
        <button>
          <Link to="/contact">Free Estimate</Link>
        </button>
      </div>
    </div>


    <div className="mission-statement">
      <div className="mission-statement-content">
        <div className="mission-statement-content-title">
          <h4><span className="first-word">Our</span> commitment to you</h4>
        </div>
        <div className="mission-statement-content-paragraph">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
      <div className="mission-statement-img-container">
        <img src={logo}/>
      </div>
    </div>


    <div className="service">
      <div className="service-header">
        <h3>Services</h3>
      </div>
      <div className="service-card-container">
        <div className="service-card">
          <div className="service-card-title">
            <div className="card-circle">
              <img src={repair}/>
            </div>
          </div>
          <div className="service-card-text">
            <h3>Repair</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>
        </div>
        <div className="service-card">
          <div className="service-card-title">
            <div className="card-circle">
              <img src={paint}/>
            </div>
          </div>
          <div className="service-card-text">
            <h3>Paint</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>
        </div>
        <div className="service-card">
          <div className="service-card-title">
            <div className="card-circle">
              <img src={transport}/>
            </div>
          </div>
          <div className="service-card-text">
            <h3>Collision</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>
        </div>
      </div>
    </div>

    <div className="partner">
      <div className="partner-insurance">
        <div class="partner-title">
          <h3>All Insurance Accepted</h3>
        </div>
        <div className="logo-container">
          <img className="mercury-logo" src={mercury}/>
          <img src={tripleA}/>
          <img className="state-farm" src={stateFarm}/>
        </div>
      </div>
      <div className="partner-car-brands">
        <div class="partner-title">
          <h3>Foriegn & Domestic</h3>
        </div>
        <div className="logo-container">
          <img className="honda-logo" src={honda}/>
          <img className="ford-logo" src={ford}/>
          <img className="bmw-logo" src={bmw}/>
        </div>
      </div>
    </div>

  </Layout>
)

export default IndexPage
