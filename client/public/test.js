const axios = require('axios');

axios.post('/api/images', {
    username: 'dallinmajor',
    password: 'Pin4Dallin',
    firstname: 'Dallin',
    lastname: 'Major'
}).then((res) => {
    console.log('Added to the Database');
    console.log(res);
});

axios.post('/api/images', {
    username: 'phill47',
    password: '1234',
    firstname: 'Phill',
    lastname: 'Smith'
}).then((res) => {
    console.log('Added to the Database');
    console.log(res);
});

