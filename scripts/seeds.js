const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://plantsy:Pin4Plantsy@ds151382.mlab.com:51382/plantsy"
);

const users = [
    {
        username: 'dallinmajor',
        password: 'Pin4Dallin',
        firstname: 'Dallin',
        lastname: 'Major'
    },
    {
        username: 'phil',
        password: 'coolbeans',
        firstname: 'Phil',
        lastname: 'Smith'
    }
];

const plants = [
    {
        name: 'Rose',
        comment: '123434222'
    },
    {
        name: 'Red Fern',
        comment: '132453382'
    },
]

const comments = [
    {
        comment: 'Cool this is a comment'
    },
    {
        comment: 'This is a comment'
    },
]



db.User
    .remove({})
    .then(() => db.User.collection.insertMany(users))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

db.Plant
    .remove({})
    .then(() => db.Plant.collection.insertMany(plants))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

db.Comments
    .remove({})
    .then(() => db.Comments.collection.insertMany(comments))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });





