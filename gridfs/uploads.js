const mongoose = require('mongoose');
const Grid = require('gridfs-stream');
const plantsydb = require('../connections');

let gfs;

plantsydb.conn.once('open', () => {
    gfs = Grid(plantsydb.conn.db, mongoose.mongo);
    grs.collection('uploads');
});

module.exports = gfs;
