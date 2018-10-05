import React, { Component } from 'react';
import Profile from './pages/Profile';
import CreateUser from './pages/CreateUser';
import LoginPage from './pages/Login';
import Test from './pages/Test';

// import Login from './pages/Login';

class App extends Component {

    state = {
        user: null,
        friend: null,
    }

    login = (user) => {
        console.log(user)
        if (user) {
            this.setState({
                user: user
            })
        }
    }

    logOut = () => {
        this.setState({
            user: null,
            friend: null
        })
    }


    render() {
        const {user, friend} = this.state
        return (
            <div>
                {user ? (
                    <div>
                        <Profile 
                        user={user}
                        logOut={this.logOut}
                        />
                    </div>
                ) :
                (
                    <div>
                        <LoginPage
                            setUser={this.login}
                        />
                    </div>
                )
                }
            </div>
        );
    }
};

export default App;