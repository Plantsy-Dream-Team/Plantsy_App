const router = require("express").Router();
const commentsController = require('../../controllers/commentsController');

// /api/comments/all
router.route('/all')
    .get(commentsController.findAll);

module.exports = router;