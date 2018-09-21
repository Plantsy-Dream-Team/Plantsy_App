import axios from 'axios'

export default {
    getUser: (username) => {
        console.log(username);
        return axios.get('api/user/' + username);
    },
    addComment: (comment, plantId) => {
        return axios.post('api/comments/' + plantId, {
            comment: comment
        }).then();
    }
};