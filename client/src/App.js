import React, { Component } from 'react';
// import Image from './components/Image';
import PlantCard from './components/PlantCard';
import API from './utils';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "dallinmajor",
            firstname: '',
            lastname: '',
            plants: [],
            id: '',
            profile_picture: '',
            cover_photo: ''
        };
    }

    async componentDidMount() {
        this.getUser()
    }

    getUser() {
        API.User.findByUsername(this.state.username)
            .then(user => this.setState({
                firstname: user.data.firstname,
                lastname: user.data.lastname,
                plants: user.data.plants,
                id: user.data._id,
                profile_picture: user.data.profile_picture,
                cover_photo: user.data.cover_photo
            }))
            .catch(err => console.log(err));
    }
    
    addComment() {
        // API.addComment('Ok this could be really cool if it can work!!!','5ba48dc67abb61befb1a550f')
        //     .then(plant => console.log(plant));
    }

    render() {
        return (
            <div>
                <div className="container">
                    {this.state.plants.map(plant => (
                        <PlantCard 
                            key={plant._id}
                            id={plant._id}
                            name={plant.name} 
                            image={plant.image}
                            description={plant.description}
                            comment={plant.comments[0].comment}
                        /> 
                    ))}
                </div>
            </div>
        );
    }
};

export default App;