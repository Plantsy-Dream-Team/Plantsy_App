import axios from 'axios'

export default {
    
    remove: (filename) => {
        return axios.delete('/api/images/' + filename)
            .catch(err => console.log(err));
    }
};