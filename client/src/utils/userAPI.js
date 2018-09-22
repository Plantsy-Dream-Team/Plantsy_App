import axios from 'axios'

export default {
    create: (user) => {
        return axios.post('/api/user/register' + user)
            .catch(err => console(err));
    },

    findByUsername: (username) => {
        return axios.get('api/user/' + username)
            .catch(err => console.log(err));
    },

    update: (username) => {
        return axios.put('api/user/' + username)
            .catch(err => console.log(err));
    },

    remove: (username) => {
        return axios.delete('api/user/' + username)
            .catch(err => console.log(err));
    }
};