const router = require("express").Router();
const upload = require('../../gridfs').upload;
const mongoose = require('mongoose');
const Grid = require('gridfs-stream');
const conn = require('../../connections').conn;

let gfs;

conn.once('open', () => {
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection('uploads');

});


router.post('/upload', upload.single('image'), (req, res) => {
   res.json({file: req.file});
});

// /api/images/all
router.get('/all', (req, res) => {

    gfs.files.find().toArray((err, files) => {
        res.json(files);
    });
})

// /api/images/:filename
router.get('/:filename', (req, res) => {
    gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
        if (!file || file.length === 0) {
            return res.status(404).json({
                err: 'No files exist'
            });
        };

        if (file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
            const readstream = gfs.createReadStream(file._id);
            readstream.pipe(res);
        } else {
            res.status(404).json({
                err: 'Not an image'
            });
        };
    });
});

// /api/images/:filename
router.delete('/:filename', (req, res) => {
    gfs.remove({filename: req.params.filename, root: 'uploads'}, (err, gfsStore) => {
        if(err) {
            return res.status(404).json({err: err});
        }
    })
});

module.exports = router;