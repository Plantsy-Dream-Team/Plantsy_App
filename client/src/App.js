import React, { Component } from 'react';
import Profile from './pages/Profile';
import CreateUser from './pages/CreateUser';
import LoginPage from './pages/Login'
import Test from './pages/Test';

// import Login from './pages/Login';

class App extends Component {

    render() {
        return (
            <div>
                
                <CreateUser/>
            {/* <Profile/> */}
            </div>
        );
    }
};

export default App;