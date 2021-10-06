import React from 'react'
import "../styles/components/contactSection.styles.scss"
import {FaEnvelopeOpenText} from "react-icons/fa"

const ContactSection = () => (
    <div className="section section__contact" id="section-contact">
        <div className="contact-section-layout">
            <div className="contact-form">

                <div>
                    <h3 className="contact-form__title">Contact Me</h3>
                    <div className="contact-form__my-email"><FaEnvelopeOpenText /> ejfschmittel@gmail.com</div>
                </div>
                <form className="contact-form__form">
                    <div className="contact-form__field">
                        <label className="contact-form__label">Email</label>
                        <input className="contact-form__email" type="email" />
                    </div>
                    <div className="contact-form__field">
                        <label className="contact-form__label">Message</label>
                        <textarea className="contact-form__message" name="message" />
                    </div>
                    <button className="contact-form__send-btn">Send</button>
                </form>
            </div>
        </div>
    </div>
)

export default ContactSection