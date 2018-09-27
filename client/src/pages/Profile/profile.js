import React, { Component } from "react";
import PlantCard from '../../components/PlantCard';
import API from '../../utils';
import Jumbotron from '../../components/Jumbotron';
import Nav from '../../components/Nav';
import Image from '../../components/Image';
// import Form from '../../components/Form';
import LazyLoad from 'react-lazyload';

class Profile extends Component {
    state = {
        user: { plants: 'Plant' },
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

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <div>
                <div className="container">
                    <Nav />
                    <Jumbotron>
                        <h1>
                            Plantsy
                    </h1>
                    </Jumbotron>
                    {this.state.display_plants.map(plant => (
                        <LazyLoad height={100}>
                            <PlantCard
                                key={plant.id}
                                name={plant.name}
                                description={plant.description}
                                comments={plant.comments}
                            >
                                <Image
                                    image={plant.image}
                                    name={plant.name}
                                />
                            </PlantCard>
                        </LazyLoad>
                    ))}
                </div>
            </div>

        );
    }
};

export default Profile;