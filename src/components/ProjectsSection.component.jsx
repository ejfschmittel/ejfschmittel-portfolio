import React from 'react'
import ProjectsOverview from './ProjectsOverview.component'
import projects from "../data/projects.data.json"

const ProjectsSection = () => (
    <div className="section section__projects" id="section-projects">
        <ProjectsOverview projects={projects} />
    </div>
)

export default ProjectsSection