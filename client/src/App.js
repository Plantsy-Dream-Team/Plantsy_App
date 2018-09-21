import React, { Component } from 'react';
// import Image from './components/Image';
import API from './utils';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "dallinmajor"
        };
    }

    async componentDidMount() {
        // this.getImages();
        this.getUser()
    }

    getImages() {
        API.getUser(this.state.props)
            .then(res => console.log(res))
            .catch(err => console.log(err));
            // this.setState({ images: res.data })
    }

    getUser() {
        API.getUser(this.state.username)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <div className="container">

                </div>
            </div>
        );
    }
};
// {this.state.images.map(file => (
//     <Image key={file.filename} image={file.filename} />
// ))}
export default App;