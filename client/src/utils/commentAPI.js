import axios from 'axios'

export default {
    create: (plantId) => {
        return axios.post('/api/comments/' + plantId)
            .catch(err => console(err));
    },

    findById: (id) => {
        return axios.get('api/comments/' + id)
            .catch(err => console.log(err));
    },

    update: (id) => {
        return axios.put('api/comments/' + id)
            .catch(err => console.log(err));
    },

    removeFromUser: (id, plantId) => {
        return axios.delete(`api/comments/${id}/${plantId}`)
            .catch(err => console.log(err));
    }
};