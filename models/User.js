var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    status: {
        type: String,
        default: 'active'
    },

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

    plants: [
        {
            type: Schema.Types.ObjectId,
            ref: "Plant"
        }
    ],

    profile_picture: {
        type: String,
        ref: 'uploads'
    },

    cover_photo: {
        type: String,
        ref: 'uploads'
    }
}, { timestamps: true });

var User = mongoose.model("User", UserSchema);

module.exports = User;