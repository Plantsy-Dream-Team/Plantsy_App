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
        plant: '5bac252453d8ba2f3e9e0527',
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
            })
            .catch(err => console.log(err));
    }

    handleImgClick = event => {
        console.log(event)
        this.setState({
            plant: event.value
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
                                            click={this.handleImgClick}
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