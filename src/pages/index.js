import React from "react"
import { Link } from "gatsby"


import Layout from "../components/layout"
import SEO from "../components/seo"

import './style/index/index.scss';

import transcars from "../images/trans-cars.png"
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
          <p>Our mission is to provide all of our customers with quality auto body repair. We work on everything from collision repair to car painting. We provide competative rates and accept all insurance claims. Here at Santa Monica Auto Body, we strive for perfection to make sure that you are happy with our work. Contact us for a Free Estimate</p>
          <button class="mission-button">
            <Link to="/contact">Free Estimate</Link>
          </button>
        </div>
      </div>
      <div className="mission-statement-img-container">
        <img src={transcars} alt="4 brand name cars with a transparent background"/>
      </div>
    </div>

    <div className="learn-more">
      <div className="learn-more-content">
        <h3>Common Questions</h3>
        <p>We understand that most people have questions about the process and "the can and the can't do's" here. So we would like to provide answers to some common questions that we have encountered. To provide better service, please send us a message or call and we will be happy to answer you questions.</p>
      </div>
      <div className="learn-more-button">
        <button>
          <Link to="/about">Learn More</Link>
        </button>
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
              <img src={repair} alt="tool icon"/>
            </div>
          </div>
          <div className="service-card-text">
            <h3>Repair</h3>
            <p>We work with Auto Collision Repairs, Auto Dent Repairs, Cosmetic Damage Repairs, Car Restoration, with a team of professionals that have been in the auto body industry for over 32 years. </p>
          </div>
        </div>
        <div className="service-card">
          <div className="service-card-title">
            <div className="card-circle">
              <img src={paint} alt="spray gun icon"/>
            </div>
          </div>
          <div className="service-card-text">
            <h3>Paint</h3>
            <p>Our auto painter provides you with the precision and care for your vehicle. we carry factory paint to custom paints. </p>
          </div>
        </div>
        <div className="service-card">
          <div className="service-card-title">
            <div className="card-circle">
              <img src={transport} alt="car icon"/>
            </div>
          </div>
          <div className="service-card-text">
            <h3>Restoration</h3>
            <p>Here at Santa Monica Auto Body we accept all insurance claims but we dont stop there. we accept all job and do our best give you the best rate.</p>
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
          <img className="mercury-logo" src={mercury} alt="mercury insurance logo"/>
          <img src={tripleA} alt="triple a insurance logo"/>
          <img className="state-farm" src={stateFarm} alt="state farm insurance logo"/>
        </div>
      </div>
      <div className="partner-car-brands">
        <div class="partner-title">
          <h3>Foriegn & Domestic</h3>
        </div>
        <div className="logo-container">
          <img className="honda-logo" src={honda} alt="honda logo"/>
          <img className="ford-logo" src={ford} alt="ford logo" />
          <img className="bmw-logo" src={bmw} alt="bmw logo" />
        </div>
      </div>
    </div>

    <div className="banner">
      <div className="banner-content">
        <h3>Schedule a free estimate Toaday</h3>

        <button>
          <Link to="/contact">Contact</Link>
        </button>
      </div>
    </div>

    <div className="map">
      <iframe className="google-map" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=5262%20washington%20blvd%20Los%20Angeles+(santa%20monica%20auto%20body)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
      
      <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=f1e9373d53db3ae060c9f3ab142593bc7e58117f'></script>
    </div>


  </Layout>
)

export default IndexPage
