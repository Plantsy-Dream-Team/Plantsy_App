import React, { Component } from "react";
import DragNDrop from '../PostAPlant/DragNDrop';
import API from '../../utils';

class PostPlant extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imageFileName: null,
            name: '',
            description: ''
        }
    }

    setImageFileName = imageFileName => {
        console.log(imageFileName.data)
        this.setState({
            imageFileName: imageFileName.data
        })
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        console.log(value);
        this.setState({
            [name]: value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        API.Plant.createUserPlant(this.props.username, {
            name: this.state.name,
            description: this.state.description,
            image: this.state.imageFileName
        }).then(result => {
            this.props.addPlantToUser(result.data);
        })

    }


    render() {

        return (
            <div className="modal active">
                <div>
                    <div>
                        {this.state.imageFileName ? (
                            <div>
                                <img src={'/api/images/' + this.state.imageFileName} alt='image of your plant' />
                            </div>
                        ) : (
                                <div>
                                    <DragNDrop
                                        setImageFileName={this.setImageFileName}
                                    />
                                </div>
                            )}
                        <form>
                            <h3>Plant Name:</h3>
                            <input className="inputBox" name='name' type="text" onChange={this.handleInputChange} />
                            <h3>Plant Info:</h3>
                            <textarea className="textBox" name='description' type='text' onChange={this.handleInputChange}>
                            </textarea>
                            {!this.state.imageFileName ? (
                                <div>
                                    <h3>Be sure to add Picture</h3>
                                </div>
                            ) : (
                                    <div>
                                        <input className="submitBtn" type="submit" value="Submit" onClick={this.handleSubmit} />
                                    </div>
                                )}
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostPlant;