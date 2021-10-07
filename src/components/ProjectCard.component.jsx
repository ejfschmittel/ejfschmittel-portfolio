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
            <h3 className="project-card__title">{project.title}</h3>
            <div className="project-card__img-container" style={{backgroundImage: `url('${project.image}')`}}>
               
            </div>
            <div className="project-card__tech">
                {tech.map(techString => (
                    <div className="project-card__tech-bubble" >{techString}</div>
                ))}
            </div>

            <div className="project-card__info">

                <p className="project-card__description">{project.subtitle}</p>


                <div className="project-card__actions">

                    {project.githubLink &&
                    <a className="project-card__btn project-card__btn-github" href={project.githubLink}>
                        <FaGithub />
                        View Code
                    </a>
                    }
                    {project.webLink &&
                    <a className="project-card__btn project-card__btn-website" href={project.webLink}>
                        <FaGlobe />
                        View Demo
                    </a>
                    }
                </div>
            </div>
        </div>
    )
}
export default ProjectCard