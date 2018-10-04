import React, { Component } from 'react';
import Profile from './pages/Profile';
import Test from './pages/Test';
import DragNDrop from './containers/AddPlant/DragNDrop';
// import Login from './pages/Login';

class App extends Component {

    render() {
        return (
            <div>
            <DragNDrop/>
            {/* <Profile/> */}
            </div>
        );
    }
};

export default App;