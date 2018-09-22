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

    remove: (filename) => {
        return axios.delete('/api/images/' + filename)
            .catch(err => console.log(err));
    }
};