import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"

import "../pages/style/Contact/Contact.scss"
const contact = () => {
    return (
        <Layout>
            <SEO title="contact"/>
            <div className="contact-landing">
                <div className="contact-landing-text">
                    <h1>Contact</h1>
                </div>
            </div>

            <div className="contact-header">
                <div className="contact-header-title">
                    <h3><span className="first-word">Q</span>uestions ?</h3>
                </div>
                <div className="contact-header-paragraph">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim tortor at auctor urna. Cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo. Sodales neque sodales ut etiam sit. At erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Fermentum odio eu feugiat pretium nibh. Maecenas sed enim ut sem viverra aliquet eget sit. Placerat orci nulla pellentesque dignissim enim sit amet venenatis urna. Sit amet tellus cras adipiscing enim eu. Consequat nisl vel pretium lectus quam id. Augue mauris augue neque gravida in fermentum et sollicitudin. Non enim praesent elementum facilisis leo vel fringilla est. Mauris sit amet massa vitae tortor condimentum lacinia quis. Cras ornare arcu dui vivamus arcu felis. Eu ultrices vitae auctor eu augue ut lectus. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus. Faucibus pulvinar elementum integer enim neque volutpat. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo.</p>
                </div>
            </div>

            <div className="contact-content">
                <div className="contact-content-map">
                    <iframe className="google-map" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=5262%20washington%20blvd%20Los%20Angeles+(santa%20monica%20auto%20body)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        
                    <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=f1e9373d53db3ae060c9f3ab142593bc7e58117f'></script>
                </div>

                <div className="contact-content-form">
                    <form
                    action="https://formspree.io/santamonicaautobody@gmail.com"
                    method="POST"
                    >
                        <label>
                            Your email:
                        </label>
                            <input type="text" name="_replyto" />
                        <label>
                            Your message:
                        </label>
                            <textarea name="message"></textarea>


                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default contact
