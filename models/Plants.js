var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PlantSchema = new Schema({
    
    name: {
        type: String,
        trim: true,
        required: "Username is Required"
    },
    image: {
        type:  String,
        ref: 'uploads'
    },
    description: {
        type: String,
    },
    comments: {
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    },
    date: {
        type: Date,
        default: Date.now
    }
});

var Plant = mongoose.model("Plant", PlantSchema);

module.exports = Plant;