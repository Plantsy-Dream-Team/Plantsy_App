import React, { Component } from 'react';
import Image from './components/Image';
import API from './utils';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: []
        };
    }
    
    async componentDidMount() {
        await this.setState({
            images: ['3077b19fe8c78a7708b255b62ef3dbb9.jpeg', 'c1cebf628406c2b34eed7bea9a827ba3.jpg', 'fb31f0a7a08215ea26cb1e4c7b9fa8c1.png']
        });
    }

    getImages(filenames) {
        console.log(filenames);
        API.getImages(filenames)
            .then(res => this.setState({ images: res }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                {this.state.images.map(file => (
                    <Image image={file} />
                ))}
            </div>
        );
    }
};

export default App;