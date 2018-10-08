import React, { Component } from 'react';
import API from '../../utils';
import './Login.css'

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null,
            error: '',
        };

        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.dismissError = this.dismissError.bind(this);
    }

    dismissError() {
        this.setState({ error: '' });
    }

    handleSubmit(evt) {
        evt.preventDefault();

        if (this.state.username && this.state.password) {
            return API.User.userValidation(this.state.username, this.state.password)
                .then(result => {
                    if (result.data === null) {
                        this.setState({
                            error: 'Invalid Username and Password!'
                        })
                    } else {
                        this.props.setUser(result.data)
                    }
                });
        }

        if (!this.state.username) {
            return this.setState({ error: 'Username is required' });
        }

        if (!this.state.password) {
            return this.setState({ error: 'Password is required' });
        }

        return this.setState({ error: '' });
    }

    handleUserChange(evt) {
        console.log(evt.target.value)
        this.setState({
            username: evt.target.value,
        });
    };

    handlePassChange(evt) {
        this.setState({
            password: evt.target.value,
        });
    }

    render() {
        return (
            <div>
                <div className='whiteBackground'>
                    <div className="jumbo">
                        <div class="title">Plantsy  </div>
                    </div>
                    <div className="Login">
                        <form>
                            {
                                this.state.error &&
                                <h3 data-test="error" onClick={this.dismissError}>
                                    <button onClick={this.dismissError}>✖</button>
                                    {this.state.error}
                                </h3>
                            }
                            <label >User Name  </label>
                            <input className="label" type="text" onChange={this.handleUserChange} />
                            <label>Password  </label>
                            <input className="label" type="password" onChange={this.handlePassChange} />

                            <button className="subBtn" onClick={this.handleSubmit}>Login</button>
                        </form>
                    </div>
                    <div className="newUserText">
                        Don't have an Account?
                            <button className="newUserBtn" onClick={this.props.userCreation}>Create an Account</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPage;