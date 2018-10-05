import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Jumbotron from "../../components/Jumbotron";
import API from '../../utils';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import { Form, Col, FormGroup, Label, Input, Button, Container } from 'reactstrap';


class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
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

        if(this.state.username && this.state.password) {
            return API.User.userValidation(this.state.username, this.state.password)
                .then(result => {
                    if(result.data === null) {
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
                {/* <Container className="App">
                    <h2>Sign In</h2>
                    <Form className="form">
                        <Col>
                            <FormGroup>
                                <Label>Email</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    id="exampleEmail"
                                    placeholder="myemail@email.com"
                                />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    id="examplePassword"
                                    placeholder="********"
                                />
                            </FormGroup>
                        </Col>
                        <Button>Submit</Button>
                    </Form>
                </Container> */}
                <div className='whiteBackground'>
                    <div className="Login">
                        <form onSubmit={this.handleSubmit}>
                            {
                                this.state.error &&
                                <h3 data-test="error" onClick={this.dismissError}>
                                    <button onClick={this.dismissError}>✖</button>
                                    {this.state.error}
                                </h3>
                            }
                            <label>User Name</label>
                            <input type="text" data-test="username" value={this.state.username} onChange={this.handleUserChange} />

                            <label>Password</label>
                            <input type="password" data-test="password" value={this.state.password} onChange={this.handlePassChange} />

                            <input type="submit" value="Log In" data-test="submit" />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPage;