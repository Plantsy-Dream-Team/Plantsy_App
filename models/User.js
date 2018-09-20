var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: {
        type: String,
        trim: true,
        index: {
            unique: true
        },
        required: "Username is Required"
    },
    password: {
        type: String,
        trim: true,
        required: "Password is Required",
        validate: [
            function (input) {
                return input.length >= 6;
            },
            "Password should be longer."
        ]
    },
    firstname: {
        type: String,
        trim: true
    },

    lastname: {
        type: String,
        trim: true
    },

    plants: [String],

    profile_picture: {
        type: String
    },

    cover_photo: {
        type: String
    },
    // date: {
    //     type: Date,
    //     default: Date.now
    // }
});

var User = mongoose.model("User", UserSchema);

module.exports = User;