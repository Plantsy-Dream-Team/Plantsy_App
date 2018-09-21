const router = require("express").Router()
const plantController = require('../../controllers/plantController');
const db = require('../../models');

// // router.route('/')
// //     .post(plantController.create);
router.route('/')
    .post(plantController.create)

router.route('/all')
    .get(plantController.findAll);

// api/user/:id
router.route("/:id")
    .get(plantController.findById)
    .put(plantController.update)
    .delete(plantController.remove);

module.exports = router;