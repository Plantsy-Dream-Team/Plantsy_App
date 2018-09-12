const router = require("express").Router();
const userController = require('../../controllers/userController');

// api/user/
router.route('/')
    .post(userController.validateUser);

// api/register
router.route("/register")
    .post(userController.create);

// api/:id
router.route(":id")
    .get(userController.findById)
    .put(userController.update)
    .delete(userController.remove);