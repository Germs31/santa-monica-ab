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
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>

                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>

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
