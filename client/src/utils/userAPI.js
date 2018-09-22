import axios from 'axios'

//GET ALL USERS
    //In your brower address bar thing put
        //localhost:3001/api/user
//OUTPUT JSON DATA

export default {

    //Input User Object look to Model to know what it needs
        //username
        //password
        //firstname
        //lastname
    //Output User Data
    create: (user) => {
        return axios.post('/api/user/register' + user)
            .catch(err => console(err));
    },

    //Input username
        //Out put User json data!! like all of it
    findByUsername: (username) => {
        return axios.get('api/user/' + username)
            .catch(err => console.log(err));
    },

    //Input username and an object with the key and new value
        //Output old object
    update: (username, updates) => {
        return axios.put('api/user/' + username, updates)
            .catch(err => console.log(err));
    },

    //Input username
    remove: (username) => {
        return axios.delete('api/user/' + username)
            .catch(err => console.log(err));
    }
};