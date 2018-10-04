import React, { Component } from "react";
import PicCard from '../PicCard';
import DragNDrop from '../../containers/AddPlant/DragNDrop';

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


    render() {
        return (
            <div>
                <div className="formModal">
                    {!this.state.imageFileName ?
                        <div>
                            <DragNDrop
                                setImageFileName={this.setImageFileName}
                            />
                        </div>
                        :
                        <div>

                            <div className="bgImage">
                                <div className="upperBox">
                                    <PicCard
                                        image={this.state.imageFileName}
                                        name={''}
                                    />
                                </div>
                                <form>
                                    <h3>Plant Name:</h3>
                                    <input className="inputBox" name='name' type="text"  onChange={this.handleInputChange}/>
                                    <h3>Plant Info:</h3>
                                    <textarea className="textBox"  name='description' type='text' onChange={this.handleInputChange}>
                                    </textarea>
                                    <input className="submitBtn" type="submit" value="Submit" />
                                </form>
                            </div>
                            <img src={'/api/images/' + this.state.imageFileName} alt="Preped Image" />
                            <form>
                                <input  type='text'  />
                                <textarea    />
                                <button >Add Plant</button>
                            </form>
                        </div>
                    }

                </div>
            </div>
        )
    }
}

export default PostPlant;