import axios from 'axios'

//GET ALL PLANTS
    //In your brower address bar thing put
        //localhost:3001/api/plant/all
//OUTPUT JSON DATA

export default {

    //Input username
    //Output plant data
    createUserPlant: (username, plant) => {
        return axios.post('/api/plant/' + username, plant)
            .catch(err => console(err));
    },

    //Input plantId
    //Out put plant data
    findById: (id) => {
        return axios.get('api/plant/' + id)
            .catch(err => console.log(err));
    },

    //Input plantId and object with updated properties
    //Example
    //name: 'New name',
    //description: 'New description'

    update: (id, update) => {
        return axios.put('api/plant/' + id, update)
            .catch(err => console.log(err));
    },

    //Input plantId and User's username
    removeFromUser: (id, username) => {
        return axios.delete(`api/plant/${id}/${username}`)
            .catch(err => console.log(err));
    }
};