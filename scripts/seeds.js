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
        lastname: 'Major',
        plants: ['db78bf7ce506a9f85c1cae2a85d9679a.jpeg','885175494509bd5b86748da596d86d03.jpeg','0cd458d1752b1c2a07e7aa7d9a0e8bb7.jpeg','3fb14fcc35eb717d5a47a7ae81b496f1.jpeg','bb3701a2eb97ca8fee2fc727b7b54e02.jpeg'],
        profile_picture: '1b5b5cf295778a6e303455139ccfa96f.jpeg',
        cover_photo: '107632facb26395fb8641718e82055d9.jpg',

    },
];

// const plants = [
//     {
//         name: 'Rose',
//         comment: '123434222'
//     },
//     {
//         name: 'Red Fern',
//         comment: '132453382'
//     },
// ]

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

// db.Plant
//     .remove({})
//     .then(() => db.Plant.collection.insertMany(plants))
//     .then(data => {
//         console.log(data.result.n + " records inserted!");
//         process.exit(0);
//     })
//     .catch(err => {
//         console.error(err);
//         process.exit(1);
//     });

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





