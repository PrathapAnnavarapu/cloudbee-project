import { MdMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { TiSocialFacebook, TiSocialTwitter, TiSocialLinkedin, TiSocialGooglePlus, TiSocialInstagram } from "react-icons/ti";
const Contact = () => {
    return (
        <section className="contact-main-section">
            <h2>Contact <span>Me</span></h2>
            < div className="contact-details">
            <div >
                <h4> Let's work Together</h4>
                <h5> <MdMail className='contact-icons'/>  prathapannavarpu78@gmail.com</h5>
                <h5> <FaPhoneAlt className='contact-icons'/>  +91 8499854599</h5>
                <div className="social-media-icons">
                    <a href="#" className="anchor-image"><TiSocialFacebook /></a>
                    <a href='#' className="anchor-image"><TiSocialTwitter /></a>
                    <a href="https://www.linkedin.com/in/prathap-annavarapu178/" blank='self' className="anchor-image"><TiSocialLinkedin className='icons' /></a>
                    <a href="#" className="anchor-image"><TiSocialGooglePlus className='icons' /></a>
                    <a href="#" className="anchor-image"><TiSocialInstagram className='icons' /></a>
                </div>
            </div>
            <form >
                <input type='text' placeholder="First Name" />
                <input type='text' placeholder="Last Name" />
                <input type='text' placeholder="Subject" />
                <textarea placeholder="Enter Your Message" />
                <button type="button" className="more-about-button btn">Submit</button>
            </form>
        </div>
        </section>
    )
}

export default Contact