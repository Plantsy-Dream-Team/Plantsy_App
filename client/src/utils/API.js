import axios from 'axios'

export default {
    getAll: () => {
        return axios.get('api/images/all');
    },

    getImage: (id) => {
        return axios.get('api/images/' + id);
    },

    getImages: async (filesArray) => {
        let images;
        await filesArray.map(filename => axios.get('api/images/' + filename))
        console.log(images)
       return images;
    }
};