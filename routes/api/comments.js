const router = require("express").Router();
const commentsController = require('../../controllers/commentsController');

// /api/comments/all
router.route('/all')
    .get(commentsController.findAll);

// /api/comments/:plantId
router.route('/:id')
    .post(commentsController.create)
    .delete(commentsController.remove)
    .put(commentsController.update)
    .get(commentsController.findById);

// /api/comments/commentId/plantId delete comment from db and plant    
router.route('/:commentId/:plantId')
    .delete(commentsController.removeFromPlant);


    

module.exports = router;