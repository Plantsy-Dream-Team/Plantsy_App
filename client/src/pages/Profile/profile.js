import React from 'react';

class Profile extends Comment {
    state = {
        user: '',
        tab: 'default',
        plant: '',
        description: '',
        comment: ''
    }

    componentDidMount() {
        this.loadBooks();
    }

    render() {
        return (
            <div></div>

        )
    }
}