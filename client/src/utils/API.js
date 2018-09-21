import axios from 'axios'

export default {
    getUser: (username) => {
        return axios.get('api/user/' + username);
    },
};