const router = require("express").Router();
const commentsController = require('../../controllers/commentsController');

// /api/comments/all
router.route('/all')
    .get(commentsController.findAll);

// /api/comments/:plantId
router.route('/:plantId')
    .post(commentsController.create);

// /api/comments/:plantId/commentId
router.route('/:plantId/commentId')
    .delete(commentsController.remove);

// /api/comments/:id
router.route('/:id')
    .put(commentsController.update);

module.exports = router;