import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"

import "../pages/style/Gallery/Gallery.scss"
const gallery = () => {
    return (
        <Layout>
            <SEO title="gallery"/>
            <div className="gallery-landing">
                <div className="gallery-landing-text">
                    <h1>Gallery</h1>
                </div>
            </div>
        </Layout>
    )
}

export default gallery
