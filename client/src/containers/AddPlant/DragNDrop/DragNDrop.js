import React, { Component } from "react";
import axios from 'axios';
import Dropzone from 'react-dropzone';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

const maxSize = 1000000;
const fileTypes = ['image/x-png', 'image/jpeg', 'image/png', 'image/jpg']

class DragNDrop extends Component {
    state = {
        imgSrc: null,
        crop: {
            aspect: 1 / 1
        }
    }

    verifyImage = (files) => {
        if (files && files.length > 0) {
            const currentfile = files[0]
            const currentFileType = currentfile.type
            const currentFileSize = currentfile.size
            if (currentFileSize > maxSize) {
                alert('This file is not allowed. ' + currentFileSize + ' bytes is too large!')
                return false;
            }

            if (!fileTypes.includes(currentFileType)) {
                alert('This file is not an image. Only Images are allowed')
                return false;
            }

            return true;
        }
    }

    handleDrop = (files, rejects) => {

        if (rejects && rejects.length > 0) {
            console.log('This was a rejected file' + rejects)
            this.verifyImage(rejects);
        }

        if (files && files.length > 0) {
            console.log(files[0]);
            const isVerified = this.verifyImage(files);
            if (isVerified) {
                const image = files[0];
                const reader = new FileReader();
                reader.addEventListener("load", () => {
                    console.log(reader.result)
                    this.setState({
                        imgSrc: reader.result
                    })
                }, false)

                reader.readAsDataURL(image);
            }
        }

        this.setState({
            imgSrc: files[0]
        })
    }

    handleImageLoaded = (image) => {
        console.log(image);
    }

    handleOnCropChange = (crop) => {
        this.setState({ crop: crop });
    }

    handleOnCropComplete = (crop, pixelCrop) => {
        console.log(crop, pixelCrop);
    }

    render() {
        const { imgSrc, crop } = this.state
        return (
            <div>
                {imgSrc ?
                    <div>
                        <ReactCrop
                            src={imgSrc}
                            crop={crop}
                            onChange={this.handleOnCropChange}
                            onImageLoaded={this.handleImageLoaded}
                            onComplete={this.handleOnCropComplete} />
                    </div>
                    :
                    <div>
                        <Dropzone
                            onDrop={this.handleDrop}
                            maxSize={maxSize}

                            multiple={false}
                            accept={fileTypes}
                        >Drop image here or click to upload</Dropzone>
                    </div>
                }

            </div>
        )
    }
}

export default DragNDrop;