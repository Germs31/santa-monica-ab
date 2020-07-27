import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby";
import Img from 'gatsby-image'

import "../pages/style/Gallery/Gallery.scss"


const gallery = ({ data }) => {
    return (
        <Layout>
            <SEO title="gallery"/>
            <div className="gallery-landing">
                <div className="gallery-landing-text">
                    <h1>Gallery</h1>
                </div>
            </div>
            <div className="gallery-images">
                <Img className="gallery-img" fluid={data.backShop.childImageSharp.fluid} />
                <Img className="gallery-img" fluid={data.rarri.childImageSharp.fluid} />
                <Img className="gallery-img" fluid={data.middleShop.childImageSharp.fluid} />
                <Img className="gallery-img" fluid={data.office.childImageSharp.fluid} />
                <Img className="gallery-img" fluid={data.sprayRoom.childImageSharp.fluid} />
            </div>
        </Layout>
    )
}

export const query = graphql`
    {
        backShop: file(relativePath: { eq: "back-shop.png" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        rarri: file(relativePath: { eq: "rarri.png" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        middleShop: file(relativePath: { eq: "middle-shop-two.png" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        office: file(relativePath: { eq: "office.png" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        sprayRoom: file(relativePath: { eq: "spray-room-back.png" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`

export default gallery
