import React, {useState} from 'react'
import "../styles/components/contactSection.styles.scss"
import {FaEnvelopeOpenText} from "react-icons/fa"

const ContactSection = () => {

    const [formData, setFormData] = useState({
        email: "",
        message: ""
    })

    const onChange = (e) => {
        
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        //send to google forms

        const requestData = new FormData();
        requestData.append("entry.1087599000", formData.email)
        requestData.append("entry.1951716230", formData.message)

        fetch("https://docs.google.com/forms/u/0/d/e/1FAIpQLSdfdPmE-DhITNAFpcB2d0TDtYfML7UmvzSriwEQt_ptHxOLew/formResponse", {
            headers: {
                 'Content-Type': 'application/json',
            },
            method: "POST",
            mode: "no-cors",
            body: requestData
        }).then((res) => {
            console.log(res)
        }).catch(error => {
            console.log(error)
        })
    }

    return (
    <div className="section section__contact" id="section-contact">
        <div className="contact-section-layout">
            <div className="contact-form">

                <div>
                    <h3 className="contact-form__title">Contact Me</h3>
                    <div className="contact-form__my-email"><FaEnvelopeOpenText /> ejfschmittel@gmail.com</div>
                </div>
                <form className="contact-form__form" onSubmit={onSubmit}>
                    <div className="contact-form__field">
                        <label className="contact-form__label">Email</label>
                        <input className="contact-form__email" type="email" value={formData.email} name="email" onChange={onChange}/>
                    </div>
                    <div className="contact-form__field">
                        <label className="contact-form__label">Message</label>
                        <textarea className="contact-form__message" name="message" value={formData.message} name="message" onChange={onChange}/>
                    </div>
                    <button className="contact-form__send-btn">Send</button>           
                </form>
            </div>
        </div>
    </div>
)}

export default ContactSection