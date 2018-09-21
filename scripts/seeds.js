const mongoose = require('mongoose');
const db = require('../models');
const axios = require('axios');

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://plantsy:Pin4Plantsy@ds151382.mlab.com:51382/plantsy",
    { useNewUrlParser: true }
);

const users = [
    {
        username: 'dallinmajor',
        password: 'Pin4Dallin',
        firstname: 'Dallin',
        lastname: 'Major',
        plants: ['5ba473644af65ab2ff9e9f05','5ba473644af65ab2ff9e9f06','5ba473644af65ab2ff9e9f07','5ba473644af65ab2ff9e9f08','5ba473644af65ab2ff9e9f09','5ba473644af65ab2ff9e9f0a','5ba473644af65ab2ff9e9f0b'],
        profile_picture: '993a0f3f429cfcf9c81a65a8dd441a15.jpeg"',
        cover_photo: 'bb3701a2eb97ca8fee2fc727b7b54e02.jpeg"'
    },
    {
        username: 'pdemille',
        password: 'Pin4Paris',
        firstname: 'Paris',
        lastname: 'DeMille',
        plants: ['5ba473644af65ab2ff9e9f05','5ba473644af65ab2ff9e9f06','5ba473644af65ab2ff9e9f07','5ba473644af65ab2ff9e9f08','5ba473644af65ab2ff9e9f09','5ba473644af65ab2ff9e9f0a','5ba473644af65ab2ff9e9f0b'],
        profile_picture: '046b693f63cda0e8004ac5dec8f50266.jpg',
        cover_photo: 'api/images/0187ace93a165a4654ab1392f9fee1a6.jpeg'
    }
];

const plants = [
    {
        name: 'SunFlower',
        image: "885175494509bd5b86748da596d86d03.jpeg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        comments: ['5ba445db60e4c9a152e5dda9','5ba445db60e4c9a152e5ddaa']
    },
    {
        name: 'Purple Beauty',
        image: "0cd458d1752b1c2a07e7aa7d9a0e8bb7.jpeg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        comments: ['5ba445db60e4c9a152e5dda9','5ba445db60e4c9a152e5ddaa']
    },
    {
        name: 'Cool Exotic',
        image: "1b5b5cf295778a6e303455139ccfa96f.jpeg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        comments: ['5ba445db60e4c9a152e5dda9','5ba445db60e4c9a152e5ddaa']
    },
    {
        name: 'Venus Fly Trap',
        image: "ca9ffa96808e2e625b207deb482aae9c.jpeg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        comments: ['5ba445db60e4c9a152e5dda9','5ba445db60e4c9a152e5ddaa']
    },
    {
        name: 'Bamboo',
        image: "f03e38ec956d7871664e0aea5acc6e16.jpeg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        comments: ['5ba445db60e4c9a152e5dda9','5ba445db60e4c9a152e5ddaa']
    },
    {
        name: 'Aloe Vera',
        image: "5581f66971b41e181400cf94ba525a4f.jpeg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        comments: ['5ba445db60e4c9a152e5dda9','5ba445db60e4c9a152e5ddaa']
    },
    {
        name: 'Suculent',
        image: "bef75809eceb947135b7a7c8dd23418c.jpeg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        comments: ['5ba445db60e4c9a152e5dda9','5ba445db60e4c9a152e5ddaa']
    },
    
]

// const comments = [
//     {
//         comment: 'Cool this is a comment'
//     },
//     {
//         comment: 'This is a comment'
//     },
// ]



// db.User
//     .remove({})
//     .then(() => db.User.collection.insertMany(users))
//     .then(data => {
//         console.log(data.result.n + " records inserted!");
//         process.exit(0);
//     })
//     .catch(err => {
//         console.error(err);
//         process.exit(1);
//     });




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

// db.Comments
//     .remove({})
//     .then(() => db.Comments.collection.insertMany(comments))
//     .then(data => {
//         console.log(data.result.n + " records inserted!");
//         process.exit(0);
//     })
//     .catch(err => {
//         console.error(err);
//         process.exit(1);
//     });





