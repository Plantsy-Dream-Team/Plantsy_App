const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const gridfs = require('./gridfs');

const app = express();

app.use(bodyParser.json({ useNewUrlParser: true }));
app.use(methodOverride("_method"));

const port = 3001;

app.listen(port, () => console.log(`server started on port ${port}`));