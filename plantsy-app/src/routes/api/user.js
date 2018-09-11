const router = require("express").Router();
const userController = require('../../controllers/userController');

router.route('/')
    .post(userController.validateUser);

router.route("/register")
    .post(userController.create);

router.route(":id")
    .get(userController.findById)
    .put(userController.update)
    .delete(userController.remove);