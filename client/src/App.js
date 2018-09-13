import React, { Component } from 'react';

class App extends Component {
    state = {
        response: ''
      };
    
      componentDidMount() {
        this.callApi()
          .then(res => this.setState({ response: res.express }))
          .catch(err => console.log(err));
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
                <h1>{this.state.response}</h1>

            </div>
        );
    }
};

export default App;