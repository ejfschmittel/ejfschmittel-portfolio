import React from 'react'
import "../styles/components/header.styles.scss";
import "../styles/components/logo.styles.scss";

const Header = () => (
    <header className="header">
        <div>
            <Logo />
        </div>

        <nav className="header__nav">
            <ul>
                <li className="header__nav-item"><a>Projects</a></li>
                <li className="header__nav-item"><a>Contact Me</a></li>
                <li className="header__nav-item"><a></a></li>
            </ul>
        </nav>
    </header>
)


const Logo = () => (
    <div className="logo">
        <span className="logo__first-letter">E</span>
        <span className="logo__second-letter">S</span>
    </div>
)

export default Header;