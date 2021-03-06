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
import PostPlant from '../../containers/PostAPlant'
import './profile.css';

class Profile extends Component {
    state = {
        user: { plants: 'Plant' },
        tab: 'default',
        display_plants: [],
        addingPlant: false,
        plant: '',
        modal: '',
        plantname: null,
        description: null,
    }

    async componentDidMount() {
        this.getUser();
    }

    filterPlants = (health) => {
        const { user } = this.state;
        if (!user.plants[0]) {
            return 'No Plants..'
        } else {
            const filted = user.plants.filter(plant => health.includes(plant.health) ? plant : null)
            this.setState({
                display_plants: filted
            })
        }
    }

    getUser() {
        this.setState({
            user: this.props.user,
            display_plants: this.props.user.plants
        })
    }

    prepPlantForCreation = () => {
        API.Plant.createUserPlant(this.state.user.username, { name: 'Staged' })
            .then(result => (this.setState({
                prepedPlant: result.data._id
            }, console.log(this.state.prepedPlant))))
    }

    handlePostAPlantClick = () => {
        this.setState({
            addingPlant: true
        })
    }

    goHome = () => {
        this.setState({
            display_plants: this.state.user.plants
        })
    }

    deletePlant = (plantId) => {
        API.Plant.removeFromUser(plantId, this.state.user.username);
        const {user} = this.state;
        user.plants = user.plants.filter(plant => plant._id === plantId ? null : plant)
        console.log(user.plants);
        console.log(user);
        this.setState({
            user: user,
            display_plants: user.plants
        })
    }

    addPlantToUser = (plant) => {
        let { user } = this.state
        user.plants.unshift(plant)
        this.setState({
            user: user,
            addingPlant: false
        })
    }

    cancelAddingPlant = (filename) => {
        console.log(filename);
        if (filename) {
            API.Image.remove(filename)
                .then(result => console.log(result));
        }

        this.setState({
            addingPlant: false
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


    addComment = plantId => {
        API.Comments.create(plantId, {
            comment: this.state.comment
        }).then(comment => {

            this.state.user.plants
                .filter(plant => plantId === plant._id).comments
                .push(comment);
        })
    }

    render() {
        const plantAdder = (
            <div>
                <PostPlant
                    username={this.state.user.username}
                    addPlantToUser={this.addPlantToUser}
                    cancel={this.cancelAddingPlant}
                />
            </div>
        )
        return (
            <div className="background">
                {this.state.addingPlant ? plantAdder : null}
                <PlantCard
                    modal={this.state.modal}
                    name={this.state.plant.name}
                    description={this.state.plant.description}
                    health={this.state.plant.health}
                    close={this.closeModal}
                    deletePlant={this.deletePlant}
                    id={this.state.plant._id}
                >
                    <PicCard
                        name={this.state.user.username}
                        image={this.state.plant.image}
                    />
                </PlantCard>
                <Jumbotron
                    handlePostAPlantClick={this.handlePostAPlantClick}
                    logOut={this.props.logOut}
                    goHome={this.goHome}
                >
                    <PicCard
                        name={this.state.user.username}
                        image={this.state.user.profile_picture}
                    />
                </Jumbotron>
                <div className="picBody">
                    <Nav
                        filterPlants={this.filterPlants}
                    />
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