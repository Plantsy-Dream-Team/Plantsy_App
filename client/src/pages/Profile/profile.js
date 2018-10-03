import React, { Component } from "react";
import PlantCard from '../../components/PlantCard';
import API from '../../utils';
import Jumbotron from '../../components/Jumbotron';
import Nav from '../../components/Nav';
// import Image from '../../components/Image';
import LazyLoad from 'react-lazyload';
// import InputForm from '../../components/InputForm';
// import { FormBtn } from '../../components/Form'
import PicCard from '../../components/PicCard'
import './profile.css';

class Profile extends Component {
    state = {
        user: { plants: 'Plant' },
        tab: 'default',
        display_plants: [],
        uploadImage: null,
        prepedPlant: null,
        plant: '',
        modal: '',
        plantname: null,
        description: null,
        comments: null,
        image: null,
        health: null,
        comment: null
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

    prepPlantForCreation = () => {
        API.Plant.createUserPlant(this.state.user.username, { name: 'Staged' })
            .then(result => (this.setState({
                prepedPlant: result.data._id
            }, console.log(this.state.prepedPlant))))
    }

    createPlant() {
        console.log(this.state.prepedPlant)
        API.Plant.update(this.state.prepedPlant, {
            name: this.state.plantname,
            description: this.state.description,
        }).then(plant => {
            this.state.user.plants.push(plant);
        })
    }

    changePlantHealth = event => {
        API.Plant.update(this.state.plant, {
            health: event.value
        })
    }

    changeDisplayTabs = tab => {
        const { plants } = this.state.user

        this.setState({
            display_plants: plants.filter(plant => plant.health === tab)
        });
    }

    handlePlantClick = (e, plant) => {
        console.log(plant);
        this.setState({
            modal: 'active',
            plant: plant
        })
    }

    closeModal = () => {
        this.setState({
            modal: '',
            plant: ''
        })
    }
    imageUploadHandler = (e) => {
        console.log(this.state.prepedPlant)
        API.Image.create(this.state.prepedPlant, e.target.files[0])

    }

    addComment = plantId => {
        API.Comments.create(plantId, {
            comment: this.state.comment
        }).then(comment => {

            this.state.user.plants
                .filter(plant => plantId === plant._id).comments
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
                <PlantCard
                    modal={this.state.modal}
                    name={this.state.plant.name}
                    description={this.state.plant.description}
                    health={this.state.plant.health}
                    close={this.closeModal}
                >
                    <PicCard
                        name={this.state.user.username}
                        image={this.state.plant.image}
                    />
                </PlantCard>
                <Jumbotron>
                    <PicCard
                        name={this.state.user.username}
                        image={this.state.user.profile_picture}
                    />
                </Jumbotron>
                <div className="picBody">
                    <Nav />
                    <div className="picContainer">
                        <div className="picBox">
                            <LazyLoad height={200}>
                                {this.state.display_plants.map(plant => (
                                    <div>
                                        <PicCard
                                            name={plant.name}
                                            image={plant.image}
                                            click={this.handlePlantClick}
                                            plant={[plant]}
                                        />
                                    </div>)
                                )}
                            </LazyLoad>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
};

export default Profile;