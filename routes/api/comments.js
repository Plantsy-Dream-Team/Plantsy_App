const router = require("express").Router();

router.get('/', (req, res) => {
    res.send({express: 'hi'});
});

module.exports = router;