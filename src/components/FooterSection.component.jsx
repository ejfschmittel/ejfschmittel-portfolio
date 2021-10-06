import React from 'react'

import {FaGithub, FaLinkedin} from "react-icons/fa"
import "../styles/components/footer.styles.scss";

const FooterSection = () => (
    <footer className="section section__footer">
        <div className="footer">
            <div className="footer__copyright">
                Copyright © 2021 Elias Schmittel
            </div>
            <div className="footer__socials">
                <a href="https://github.com/ejfschmittel/"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/elias-schmittel-0759b3109/"><FaLinkedin /></a>
            </div>
        </div>
    </footer>
)

export default FooterSection