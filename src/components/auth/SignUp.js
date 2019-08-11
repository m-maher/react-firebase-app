import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions'

class SignUp extends Component {

    state = {
        email: '',
        password: '',
        first_name: '',
        last_name: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.signUp(this.state)
    }

    render() {
        const {auth, authError} = this.props
        if(auth.uid) return <Redirect to='/' />
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <h4>Sign Up</h4>
                    <div>
                        <label>First Name: </label>
                        <br/>
                        <input name="first_name" type="text" onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <label>Last Name: </label>
                        <br/>
                        <input name="last_name" type="text" onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <label>Email: </label>
                        <br/>
                        <input name="email" type="email" onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <label>Password: </label>
                        <br/>
                        <input name="password" type="password" onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <button className="btn btn-primary">Submit</button>
                    </div>
                    <div>
                        { authError ? <p>{authError}</p> : null }
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

export default connect(mapStateToProps, {signUp})(SignUp)