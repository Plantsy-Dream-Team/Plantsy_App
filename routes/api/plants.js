const router = require("express").Router()
const plantController = require('../../controllers/plantController');

// // router.route('/')
// //     .post(plantController.create);
router.route('/:username')
    .post(plantController.create)

router.route('/all')
    .get(plantController.findAll);

// api/user/:id
router.route("/:id")
    .get(plantController.findById)
    .put(plantController.update)

router.route('/:plantId/:username')
    .delete(plantController.remove);


module.exports = router;