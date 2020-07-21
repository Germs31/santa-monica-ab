import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackShop from '../images/back-shop.jpg'
import {Link} from 'gatsby'
import '../pages/style/About/about.scss'
const about = () => {
    return (
        <Layout>
            <SEO title="About"/>
            <div className="about-banner">
                <div className="about-banner-text">
                    <h1>About Us</h1>
                </div>
            </div>
            <div className="about-content">
                <div className="about-text">
                    <h3><span className="first-word">Our </span>History</h3>
                    <p>We have been in business since 1986. Starting in Santa Monica California in early 86 a few months later we moved to where we are now. We have been at this location since March of 1986. Most of our customers are recommended by other customers. Come and see why we have been recommended for all our auto collision and paint jobs. We offer free estimates.</p>
                    <button>
                        <Link to="/contact">Free Estimate</Link>
                    </button>
                </div>

                <div className="about-content-img">
                    <img src={BackShop}/>
                </div>
            </div>
        </Layout>
    )
}

export default about
