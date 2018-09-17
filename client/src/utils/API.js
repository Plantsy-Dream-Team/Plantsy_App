import axios from 'axios'

export default {
    getImage: (id) => {
        return axios.get('api/images/' + id);
    }
};