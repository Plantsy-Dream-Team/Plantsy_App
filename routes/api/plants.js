const upload = require('../gridfs').uploads;

app.post('/upload', upload.single('file'), (req, res) => {
   res.json({file: req.file});
});