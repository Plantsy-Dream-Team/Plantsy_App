import React, { Component } from "react";
import DragNDrop from '../PostAPlant/DragNDrop';
import './PostAPlant.css';
import API from '../../utils';

class PostPlant extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imageFileName: null,
            name: '',
            description: '',
            health: 'green'
        }
    }

    setImageFileName = imageFileName => {
        console.log(imageFileName.data)
        this.setState({
            imageFileName: imageFileName.data
        })
    }

    cancel = () => {
        this.props.cancel(this.imageFileName);
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
            image: this.state.imageFileName,
            health: this.state.health
        }).then(result => {
            this.props.addPlantToUser(result.data);
        })

    }


    render() {
        return (
            <div className="modal active">
                <div className='create-plant-box'>
                    <div>
                        <h3 className='cancelBtn' onClick={this.cancel}>x</h3>
                        <br/>
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
                        <br /><br /><br />
                        <form>
                            <h2>Plant Name</h2>
                            <input name='name' className='plantInput' id='name' type="text" onChange={this.handleInputChange} />
                            <h2>How's your plant doing?</h2>
                            <select className='healthSelect' id='health' name='health' onChange={this.handleInputChange}>
                                <option value="green">Going strong</option>
                                <option value="yellow">Needs a little help</option>
                                <option value="orange">Struggling</option>
                            </select>
                            <h2>Plant Info</h2>
                            <textarea name='description' className='plantInput' rows='10' id='description' type='text' onChange={this.handleInputChange}>
                            </textarea>
                            <br/><br/>
                            {!this.state.imageFileName ? (
                                <div>
                                    <h3 className='imageWarning'>An image is required before submiting!</h3>
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