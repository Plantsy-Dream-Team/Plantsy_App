import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/userAPI";

class Users extends component {
    state = {
        username: "",
        password: "",

    };

    render() {
        return (
            <div>
                <Jumbotron>
                    <h1> Plantsy </h1>
                </Jumbotron>
                <form>
                    <Input
                        value={this.state.name}
                        name="username"
                        placeholder="Username Required"
                    />

                    <Input
                        value={this.state.password}
                        name="password"
                        placehold="Password Required"
                    />

                    <FormBtn
                        disabled={!(this.state.name && this.state.password)}
                        onClick={this.handleFormSubmit}
                    >
                        Login
                </FormBtn>
                </form>
            </div>
        )
    }
}


export default Login;