const router = require("express").Router();
const userController = require('../../controllers/userController');

// api/user/
router.route('/')
    .post(userController.validateUser);

// api/user/register
router.route("/register")
    .post(userController.create);

// api/user/:id
router.route("/hi")
    .get((req, res) => {
        res.json({hello: 'hi'})
    })
    .put(userController.update)
    .delete(userController.remove);

module.exports = router;