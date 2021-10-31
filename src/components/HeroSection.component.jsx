import React from 'react'
import SpaceBackground from './SpaceBackground.component'
import {smoothScrollTo} from "../utils/utils"
import {speedUp, slowDown} from "../pixijs/BackgroundAnimation"
import "../styles/components/heroSection.styles.scss";


const HeroSection = () => {

    const onProjectsClick = () => smoothScrollTo("section-projects")

    const onMouseOut = () => {
        console.log("mouse out")
        slowDown()
    }

    const onMouseOver = () => {
        console.log("mouse over")
        speedUp()
    }

    return (
        <div className="section section__hero" id="section-hero">
            <SpaceBackground />
            <div className="hero-section__overlay"></div>
            <div className="hero-section animation animation--fadeInTop">
                <h1 className="hero-section__title">Elias Schmittel</h1>
                <h2 className="hero-section__subtitle">Web Developer</h2>
                <p></p>
                <button className="hero-section__button" onClick={onProjectsClick} onMouseOut={onMouseOut} onMouseOver={onMouseOver}>
                    View Projects
                </button>
            </div>
        </div>
    )
}

export default HeroSection