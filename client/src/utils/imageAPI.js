import axios from 'axios'

export default {
    //API Calls
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