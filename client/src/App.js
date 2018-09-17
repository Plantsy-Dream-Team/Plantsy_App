import React, { Component } from 'react';
import Image from './components/Image';
import API from './utils/API';

class App extends Component {
    state = {
        images: ['5b995cd7abe241d4953c8561','5b995d46abe241d4953c8563','5b9d2efaaa84bc21721e6dea']
      };
    
      componentDidMount() {
          
      }
      getImage(id) {
          return API.getImage(id);
      }
    
      callApi = async () => {
        const response = await fetch('/test/hello');
        const body = await response.json();
    
        if (response.status !== 200) throw Error(body.message);
    
        return body;
      };

    render() {
        return (
            <div>
                {this.state.images.map(id => (
                    <Image image={this.getImage(id)} />
                ))}
            </div>
        );
    }
};

export default App;