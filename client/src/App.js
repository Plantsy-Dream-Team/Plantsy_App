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
        this.getImages();
    }

    getImages() {
        API.getAll()
            .then(res => this.setState({ images: res.data }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <div className="container">
                    {this.state.images.map(file => (
                        <Image key={file.filename} image={file.filename} />
                    ))}
                </div>
            </div>
        );
    }
};

export default App;