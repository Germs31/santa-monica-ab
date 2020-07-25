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
                <Img className="gallery-img" fluid={data.elCoDamage.childImageSharp.fluid} />
                <Img className="gallery-img" fluid={data.detailSection.childImageSharp.fluid} />
                <Img className="gallery-img" fluid={data.cornerSpray.childImageSharp.fluid} />
                <Img className="gallery-img" fluid={data.backSpray.childImageSharp.fluid} />
                <Img className="gallery-img" fluid={data.frontShop.childImageSharp.fluid} />
                <Img className="gallery-img" fluid={data.frontRightShop.childImageSharp.fluid} />
                <Img className="gallery-img" fluid={data.middleShopTwo.childImageSharp.fluid} />
            </div>
        </Layout>
    )
}

export const query = graphql`
    {
        backShop: file(relativePath: { eq: "back-shop.jpg" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        elCoDamage: file(relativePath: { eq: "el-co-damage.jpg" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        rarriImage: file(relativePath: { eq: "rarri.jpg" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        detailSection: file(relativePath: { eq: "detail-section.jpg" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        cornerSpray: file(relativePath: { eq: "corner-spray.jpg" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        frontShop: file(relativePath: { eq: "shop-front.jpg" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        frontRightShop: file(relativePath: { eq: "front-right-shop.jpg" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        backSpray: file(relativePath: { eq: "spray-room-back.jpg" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        middleShopTwo: file(relativePath: { eq: "middle-shop-two.jpg" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`

export default gallery
