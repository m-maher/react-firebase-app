import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutlinks = () => {
    return (
        <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
                <NavLink to = "/signup" className="nav-link">Sign Up</NavLink>
            </li>
            <li className="nav-item active">
                <NavLink to = "/signin" className="nav-link">Login</NavLink>
            </li>
        </ul>
    )
}

export default SignedOutlinks