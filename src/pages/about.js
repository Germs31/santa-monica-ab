import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
const about = () => {
    return (
        <Layout>
            <SEO title="About"/>
            <div className="about-page">
                <div className="about-banner">
                    <div className="about-banner-text">
                        <h1>Our History</h1>
                    </div>
                </div>
                <div className="about-text">
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </div>
            </div>
        </Layout>
    )
}

export default about
