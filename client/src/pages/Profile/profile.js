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
        prepedPlant: '',
        plant: '5bac252453d8ba2f3e9e0527',
        plantname: '',
        description: '',
        health: '',
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
            })
            .catch(err => console.log(err));
    }

    prepPlantForCreation() {
        API.Plant.createUserPlant(this.state.user.username, {name: 'Staged'})
            .then(result => this.setState({
                prepedPlant: result._id
            }))
    }

    createPlant() {
        API.Plant.update(this.state.plant, {
            name: this.state.plantname,
            description: this.state.description,
        }).then(plant => {
            this.state.user.plants.push(plant);
        })
    }

    changePlantHealth(event) {
        API.Plant.update(this.state.plant, {
            health: event.value
        })
    }

    changeDisplayTabs(tab) {
        const { plants } = this.state.user

        this.setState({
            display_plants: plants.filter(plant => plant.health === tab)
        });
    }

    plantClicked(event){
        console.log(event)
        this.setState({
            plant: event.value
        })
    }

    addComment(plantId) {
        API.Comments.create(plantId, {
            comment: this.state.comment
        }).then(comment => {
            
            this.state.user.plants
                .filter(plant => plantId === plant._id ).comments
                .push(comment);
        })
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
                        <LazyLoad height={200}>
                            {this.state.plant === plant._id ? (
                                <div>
                                    <PlantCard
                                        key={plant._id}
                                        name={plant.name}
                                        description={plant.description}
                                        comments={plant.comments}
                                    >
                                        <Image
                                            image={plant.image}
                                            name={plant.name}
                                        />
                                    </PlantCard>
                                </div>
                            ) : (
                                    <div>
                                        <Image
                                            click={this.handlePlantClick}
                                            id={plant._id}
                                            image={plant.image}
                                            name={plant.name}
                                        />
                                    </div>
                                )}
                        </LazyLoad>
                    ))}
                </div>
            </div>

        );
    }
};

export default Profile;