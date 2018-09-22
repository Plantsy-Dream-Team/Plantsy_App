import axios from 'axios'

export default {
    createUserPlant: (username) => {
        return axios.post('/api/plant/', username)
            .catch(err => console(err));
    },

    findById: (id) => {
        return axios.get('api/plant/' + id)
            .catch(err => console.log(err));
    },

    update: (id) => {
        return axios.put('api/plant/' + id)
            .catch(err => console.log(err));
    },

    removeFromUser: (id, username) => {
        return axios.delete(`api/plant/${id}/${username}`)
            .catch(err => console.log(err));
    }
};