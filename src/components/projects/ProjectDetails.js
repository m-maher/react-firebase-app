import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id
    return(
        <div className="container">
            <div className="card">
                <img src="..." className="card-img-top" alt="img" />
                <div className="card-body">
                    <h5 className="card-title">Card title {id}</h5>
                    <p className="card-text">Some quick example. Some quick example. Some quick example. </p>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails