import React from 'react'
import ProjectCard from './ProjectCard.component'
import "../styles/components/projectsOverview.styles.scss";

const ProjectsOverview = ({projects}) => {
    return (
        <div className="projects-overview">
            {projects.map(project => {
                return <ProjectCard project={project} id={project.name}/>
            })}
        </div>
    )
}

export default ProjectsOverview