import React, { Component } from "react";
import PlantCard from '../../components/PlantCard';
import API from '../../utils';

class Profile extends Component {
    state = {
        user: {plants: 'Plant'},
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
                    user: user.data,
                    display_plants: user.data.plants
                })
                console.log(this.state.user)
                console.log(this.state.display_plants)
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <div className="container">
                   {this.state.display_plants.map(plant => (
                       <PlantCard
                            key={plant.id}
                            name={plant.name}
                            description={plant.description}
                            comments={plant.comments}
                            image={plant.image}
                        />
                   ))}
                </div>
            </div>

        );
    }
};

export default Profile;