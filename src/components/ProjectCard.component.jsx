import React from 'react'
import "../styles/components/projectCard.styles.scss";
import {FaGithub, FaGlobe} from "react-icons/fa"



const getTechColor = (name) => {
    return "red";
}


const ProjectCard = ({project}) => {

    const tech = project.tech.split(",");

    return (
        <div className="project-card">
            <div className="project-card__img-container">
                <img src={project.image} className="project-card__img" />
            </div>
            <div className="project-card__tech">
                {tech.map(techString => (
                    <div className="project-card__tech-bubble" style={{backgroundColor: getTechColor(techString)}}>{techString}</div>
                ))}
            </div>

            <div className="project-card__info">

                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__description">{project.subtitle}</p>


                <div className="project-card__actions">
                    <button className="project-card__btn project-card__btn-github">
                        <FaGithub />
                        View Code
                    </button>
                    <button className="project-card__btn project-card__btn-website">
                        <FaGlobe />
                        View Demo
                    </button>
                </div>
            </div>
        </div>
    )
}
export default ProjectCard