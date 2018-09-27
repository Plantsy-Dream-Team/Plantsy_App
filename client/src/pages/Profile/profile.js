import React, { Component } from "react";
import API from '../../utils';

class Profile extends Component {
    state = {
        user: 'Hello',
        tab: 'default',
        display_plants: [],
        plant: '',
        description: '',
        comment: ''
    }

    async componentDidMount() {
        this.getUser();
    }

    getUser() {
        API.User.findByUsername('dallinmajor')
            .then(user => {
                
                this.setState({
                    user: user.data
                })
                console.log(this.state.user)
            })
            .catch(err => console.log(err));
    }

    logUser() {
        console.log(this.user);
    }

    render() {
        return (
            <div></div>

        )
    }
}

export default Profile;