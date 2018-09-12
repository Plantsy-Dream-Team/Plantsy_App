const router = require("express").Router();
const upload = require('../../gridfs').uploads;

router.post('/upload', upload.single('file'), (req, res) => {
   res.json({file: req.file});
});

module.exports = router;