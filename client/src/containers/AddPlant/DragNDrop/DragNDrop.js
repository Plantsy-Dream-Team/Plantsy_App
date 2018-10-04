import React, { Component } from "react";
import axios from 'axios';
import Dropzone from 'react-dropzone';
import ReactCrop from 'react-image-crop';
import { image64toCanvasRef, extractImageFileExtensionFromBase64, base64StringtoFile, downloadBase64File } from '../../../base64/base64';
import 'react-image-crop/dist/ReactCrop.css';

const maxSize = 1000000;
const fileTypes = ['image/x-png', 'image/jpeg', 'image/png', 'image/jpg']

class DragNDrop extends Component {
    constructor(props) {
        super(props)
        this.imagePreviewCanvasRef = React.createRef()
        this.state = {

            imgSrc: null,
            imgSrcExt: null,
            crop: {
                aspect: 1 / 1
            }
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
                        imgSrc: reader.result,
                        imgSrcExt: extractImageFileExtensionFromBase64(reader.result)
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
        // console.log(crop, pixelCrop);
        const canvasRef = this.imagePreviewCanvasRef.current
        const { imgSrc } = this.state
        image64toCanvasRef(canvasRef, imgSrc, pixelCrop)
    }

    handleDownLoadClick = (event) => {
        event.preventDefault()
        const { imgSrc } = this.state
        const { imgSrcExt } = this.state
        if (imgSrc) {
            const canvasRef = this.imagePreviewCanvasRef

            const imageData64 = canvasRef.toDataURL('image/' + imgSrcExt);

            const myFileName = "Preview File" + imgSrcExt
            const myNewCroppedFile = base64StringtoFile(imageData64, myFileName)
        }
    }

    handleDefaultClearing = event => {
        event.preventDefault()
        const canvas = this.imagePreviewCanvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.clearReact(0, 0, canvas.width, canvas.height)

        this.setState({
            imgSrc: null,
            imgSrcExt: null,
            crop: {
                aspect: 1 / 1
            }
        })
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
                        <br />
                        <canvas ref={this.imagePreviewCanvasRef}></canvas>
                    </div>
                    :
                    <div>
                        <Dropzone
                            onDrop={this.handleDrop}
                            maxSize={maxSize}

                            multiple={false}
                            accept={fileTypes}
                        >Click to upload</Dropzone>
                    </div>
                }
            </div>
        )
    }
}

export default DragNDrop;