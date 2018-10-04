import React, { Component } from "react";
import axios from 'axios';
import Dropzone from 'react-dropzone';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import { isThisWeek } from "date-fns";

const imageMaxSize = 10000;
class Test extends Component {
    state = {
        imgSrc: null,
        image: null,
        crop: {
            aspect: 1 / 1
        },
        name: '',
        description: '',
        testImage: false
    }

    handleSelectedImage = event => {
        this.setState({
            imgSrc: event.target.files[0]
        })
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        console.log(value);
        this.setState({
            [name]: value
        });
    }

    handleDrop = (badFiles, goodFiles) => {

        console.log('this was ran!')
        console.log(badFiles)
        console.log(goodFiles)
        this.setState({
            imgSrc: goodFiles[0]
        })
    }

    handleCrop = (crop) => {
        this.setState({ image: crop });
      }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state.imgSrc);
        const fd = new FormData();
        fd.append('image', this.state.imgSrc, this.state.imgSrc.name)
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
                {this.state.imgSrc !== null ? (
                    <div>
                        <h1>this was renedered!</h1>
                        <ReactCrop src={this.state.imgSrc} onChange={this.handleCrop}/>
                    </div>
                ) : (
                    <div>
                        <Dropzone
                            onDrop={this.handleDrop}
                            maxSize={imageMaxSize}
                            multiple={false}
                            accept={'image/*'}
                        />
                    </div>
                )}

                <form>
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