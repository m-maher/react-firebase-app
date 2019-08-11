import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInlinks = (props) => {
    return (
        <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
                <NavLink to = "/create" className="nav-link">New Project</NavLink>
            </li>
            <li className="nav-item active" onClick={()=>props.signOut()}>
                <NavLink to = "/" className="nav-link">Log Out</NavLink>
            </li>
            <li className="nav-item active">
                <NavLink to = "/" className="btn btn-success">MM</NavLink>
            </li>
        </ul>
    )
}

export default connect(null, {signOut})(SignedInlinks)