import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

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

    </div>

    <div className="service-section">

    </div>

    <div className="brands">

    </div>
  </Layout>
)

export default IndexPage
