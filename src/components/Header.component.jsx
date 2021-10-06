import React from 'react'
import {smoothScrollTo} from "../utils/utils"
import "../styles/components/header.styles.scss";
import "../styles/components/logo.styles.scss";

const Header = () => {


    const onProjectsClick = () => smoothScrollTo("section-projects")
    const onContactClick = () => smoothScrollTo("section-contact")
    const onHomeClick = () => smoothScrollTo("section-hero")

    return (
        <header className="header">
            <div>
                <Logo />
            </div>

            <nav className="header__nav">
                <ul>
                    <li className="header__nav-item"><a onClick={onHomeClick}>Home</a></li>
                    <li className="header__nav-item"><a onClick={onProjectsClick}>Projects</a></li>
                    <li className="header__nav-item"><a onClick={onContactClick}>Contact Me</a></li>
                </ul>
            </nav>
        </header>
    )
}


const Logo = () => (
    <div className="logo">
        <span className="logo__first-letter">E</span>
        <span className="logo__second-letter">S</span>
    </div>
)

export default Header;