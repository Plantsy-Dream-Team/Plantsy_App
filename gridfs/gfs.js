const mongoose = require('mongoose');
const Grid = require('gridfs-stream');
const conn = require('../connections').conn;

let gfs;

conn.once('open', () => {
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection('uploads');
});

module.exports = gfs;
