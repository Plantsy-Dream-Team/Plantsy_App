import React, { Component } from 'react';
import Profile from './pages/Profile';
import Login from './pages/Login';

class App extends Component {

    render() {
        return (
            <div>
                <Login/>
                {/* <Profile/> */}
            </div>
        );
    }
};

export default App;