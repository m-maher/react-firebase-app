import React from 'react'

const ProjectSummary = ({project}) => {
    return(
        <div className="card">
            <img src="..." className="card-img-top" alt="img" />
            <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.content}</p>
            </div>
        </div>
    )
}

export default ProjectSummary