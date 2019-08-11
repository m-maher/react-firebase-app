import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'

class SignIn extends Component {

    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.signIn(this.state)
    }
    render() {
        const { authError, auth } = this.props
        if(auth.id) return <Redirect to="/" />
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <h4>Sign In</h4>
                    <div>
                        <label>Email: </label>
                        <br/>
                        <input name="email" type="email" onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Password: </label>
                        <br/>
                        <input name="password" type="password" onChange={this.handleChange} />
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
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps,{signIn})(SignIn)