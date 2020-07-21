import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from 'gatsby'

import "../pages/style/Service/Service.scss"

import Elco from "../images/el-co-damage.jpg"
import SprayRoom from "../images/spray-room-back.jpg"
const service = () => {
    return (
        <Layout>
            <SEO title="service"/>
            <div className="service-landing">
                <div className="service-landing-text">
                    <h1>Service</h1>
                </div>
            </div>

            <div className="common-questions">
                <div className="common-questions-title">
                    <h3>F.A.Q's</h3>
                </div>
                <div className="common-questions-card-container">
                    <div className="common-questions-card">
                        <div className="common-questions-card-title">
                            <h3>Common Question 1</h3>
                        </div>
                        <div className="common-questions-card-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className="common-questions-card">
                        <div className="common-questions-card-title">
                            <h3>Common Question 2</h3>
                        </div>
                        <div className="common-questions-card-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className="common-questions-card">
                        <div className="common-questions-card-title">
                            <h3>Common Question 3</h3>
                        </div>
                        <div className="common-questions-card-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="auto-body-repair">
                <div className="auto-body-repair-content">
                    <h3><span className="first-word">Auto</span> Body Repair</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="auto-body-repair-img">
                    <img src={Elco}/>
                </div>
            </div>

            <div className="auto-body-repair">
                <div className="auto-body-repair-img">
                    <img src={SprayRoom}/>
                </div>
                <div className="auto-body-repair-content">
                    <h3>Paint</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>

            <div className="contact-banner">
                <h3>Schedule Free Estimate</h3>
                <Link to="/contact">
                    <button>Contact</button>
                </Link>
            </div>
        </Layout>
    )
}

export default service
