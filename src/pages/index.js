import React from "react"
import { Link } from "gatsby"


import Layout from "../components/layout"
import SEO from "../components/seo"

import './style/Index/index.scss';

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
    <div className="mission-statment">

    </div>
    <div className="service">

    </div>
  </Layout>
)

export default IndexPage
