const mongoose = require('mongoose');


var mongoURI = process.env.MONGODB_URI ||  "mongodb://plantsy:Pin4Plantsy@ds151382.mlab.com:51382/plantsy";
const conn = mongoose.createConnection(mongoURI, (err, db) => {
    if (err) {
        console.log('err', err);

    }
    else { console.log('Connected')}
});

module.exports = {
    conn: conn,
    mongoURI: mongoURI
}