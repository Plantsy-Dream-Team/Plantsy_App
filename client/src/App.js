import React, { Component } from 'react';
import Profile from './pages/Profile';
import CreateUser from './pages/CreateUser';
import LoginPage from './pages/Login';

// import Login from './pages/Login';

class App extends Component {
    state = {
        user: null,
        friend: null,
        newUser: false
    }

    userCreation = () => {
        console.log('clicked');
        this.setState({
            newUser: true
        })
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
        this.userCreation.bind(this)

        const { user, friend } = this.state
        return (
            <div>

                {user ? (
                    <div>
                        <Profile
                            user={user}
                            logOut={this.logOut}
                        />
                    </div>
                )
                    :
                    (
                        <div>
                            {!this.state.newUser ? (
                                <div>
                                <LoginPage
                                    setUser={this.login}
                                    userCreation={this.userCreation}
                                />
                            </div>
                            ) : (
                                <div>
                                    <CreateUser
                                        login={this.login}
                                    />
                                </div>
                            )}
                        </div>
                    )
                }
            </div>
        );
    }
};

export default App;