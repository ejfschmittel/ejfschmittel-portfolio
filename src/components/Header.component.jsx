import React, {useState} from 'react'
import {smoothScrollTo} from "../utils/utils"
import "../styles/components/header.styles.scss";
import "../styles/components/logo.styles.scss";

const Header = () => {

    const [navOpen, setNavOpen] = useState(false);
    

    const toggleNav = () => {
        setNavOpen(!navOpen)
    }

    const onProjectsClick = () => { setNavOpen(false); smoothScrollTo("section-projects");}
    const onContactClick = () => { setNavOpen(false); smoothScrollTo("section-contact");}
    const onHomeClick = () => { setNavOpen(false); smoothScrollTo("section-hero");}

    return (
        <header className="header">
            <div>
                <Logo />
            </div>

            <nav className={`header__nav ${navOpen ? "header__nav--open" : ""}`}>

                <button className="header__menu-btn" onClick={toggleNav}>

                    <div className="header__btn-bars">
                    <div className="header__btn-bar header__btn-bar--1"></div>
                    <div className="header__btn-bar header__btn-bar--2"></div>
                    <div className="header__btn-bar header__btn-bar--3"></div>
                    </div>
                </button>

              


                <ul className="header__nav-links">
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