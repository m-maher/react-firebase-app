import React from 'react'

const ProjectSummary = ({project}) => {
    return(
        <section className="project-summary my-4">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.content}</p>
                </div>
            </div>
        </section>   
    )
}

export default ProjectSummary