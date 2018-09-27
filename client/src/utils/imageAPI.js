import axios from 'axios'

//GET ALL PLANTS
    //In your brower address bar thing put
        //localhost:3001/api/images/all
//OUTPUT JSON DATA

export default {
    //API CALLS
        //Create user's profile picture
            //api/images/profilePicture/:username
        //Create user's cover phot
            //api/images/coverPhoto/:username
        //Create plant photo
            //api/images/plant/:plantId

    logImg: (id) => {
        return axios.get('localhost:3001/api/images/' + id)
        .catch(err => console.log(err))
    },

    remove: (filename) => {
        return axios.delete('/api/images/' + filename)
            .catch(err => console.log(err));
    }
};