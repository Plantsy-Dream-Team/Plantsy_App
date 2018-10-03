import React, { Component } from "react";
import axios from 'axios';
import Dropzone from 'react-dropzone';
import ReactCrop from 'react-image-crop';

const imageMaxSize = 10000;
class Test extends Component {
    state = {
        image: null,
        name: '',
        description: '',
        testImage: false
    }

    handleSelectedImage = event => {
        this.setState({
            image: event.target.files[0]
        })
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        console.log(value);
        this.setState({
            [name]: value
        });
    }

    handleDrop = (goodFiles, badFiles) => {
        
        this.setState({
            image: goodFiles[0]
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state.image);
        const fd = new FormData();
        fd.append('image', this.state.image, this.state.image.name)
        fd.append('name', this.state.name)
        fd.append('description', this.state.description);
        axios.post('/api/images/test', fd)
            .then(res => {
                console.log(res);
            })

    }

    testMe = event => {
        event.preventDefault();
        axios.get('/api/images/d8f5026b4fab6292d66d84e501d95a62.jpeg')
            .then(res => {
                this.setState({
                    testImage: res.data
                }, console.log(this.state.testImage))
            })
    }

    render() {
        return (
            <div>
                <Dropzone
                    onDrop={this.handleDrop}
                    maxSize={imageMaxSize}
                    multiple={false}
                    accept='image/*  '
                />
                <form>
                    <input name='image' type='file' onChange={this.handleSelectedImage} />
                    <input name='name' type='text' onChange={this.handleInputChange} />
                    <textarea name='description' type='text' onChange={this.handleInputChange} />
                    <button onClick={this.testMe}>Add Plant</button>
                </form>
                {this.state.testImage ? (
                    <div>
                        <h1>Hey this element is showing up!</h1>
                        <img src={this.state.testImage} alt={this.state.name} />
                    </div>
                ) : (
                        <div></div>
                    )}
            </div>

        )
    }
}

export default Test;