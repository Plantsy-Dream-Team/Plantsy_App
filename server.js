const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const router = require('./routes');
const gridfs = require('./gridfs');

const app = express();

app.use(bodyParser.json({ useNewUrlParser: true }));
app.use(methodOverride("_method"));
app.use(router);

app.get('/test/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
  });


const port = 3001;

app.listen(port, () => console.log(`server started on port ${port}`));