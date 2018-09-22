const router = require("express").Router();
const commentsController = require('../../controllers/commentsController');

// /api/comments/all
router.route('/all')
    .get(commentsController.findAll);

// /api/comments/:plantId
router.route('/:plantId')
    .post(commentsController.create);

module.exports = router;