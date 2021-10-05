import React from 'react'
import SpaceBackground from './SpaceBackground.component'
import "../styles/components/heroSection.styles.scss";

const HeroSection = () => (
    <div className="section section__hero">
        <SpaceBackground />
        <div className="hero-section">
            <h3 className="hero-section__title">Elias Schmittel</h3>
            <h5 className="hero-section__subtitle">Webdeveloper</h5>
            <p></p>
            <button className="hero-section__button">View Projects</button>
        </div>
    </div>
)

export default HeroSection