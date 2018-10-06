import React, { Component } from 'react';
import Profile from './pages/Profile';
import CreateUser from './pages/CreateUser';
import LoginPage from './pages/Login';
import API from './utils';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';

// import Login from './pages/Login';

class App extends Component {
    state = {
        user: null,
        friend: null,
        newUser: false
    }

    componentDidMount() {
        this.userCookies();
    }

    userCreation = () => {
        console.log('clicked');
        this.setState({
            newUser: true
        })
    }

    userCookies = () => {
       const cookie = read_cookie('username');
       console.log(cookie);
       if(cookie[0]) {
           API.User.findByUsername(cookie)
            .then(result => {
                if (result.data) {
                    this.setState({
                        user: result.data
                    })
                }
            });
       }
    }

    login = (user) => {
        bake_cookie('username', user.username);
        if (user) {
            this.setState({
                user: user
            })
        }
    }

    logOut = () => {
        delete_cookie('username');
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